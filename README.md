# DevStack

DevStack is a React web app that helps developers explore popular web development technologies and build their own personal tech stack. Users can browse technology cards (React, Node.js, MongoDB, Tailwind CSS, and more), see details like rating, difficulty, and category, and add their favorites to a "Your Stack" panel.

## 🛠️ Technologies Used

- **React.js** – for building the component-based UI
- **Vite** – fast development server and build tool
- **Tailwind CSS** – utility-first styling
- **TypeScript** – type-safe app logic
- **React-Toastify** – toast notifications for add, duplicate, remove, and remove-all actions
- **Lucide React** – icons (star, hamburger menu, close, loading spinner)
- **JSON** – local data source for the technology list

## ✨ Features

1. **Browse Technology Cards** – View 15 technologies with icon, badge, name, description, category chip, difficulty, and star rating, loaded dynamically from a local JSON file (not hardcoded), in a responsive 1/2/3-column grid.
2. **Build Your Own Stack** – Add any technology to the "Your Stack" panel with one click. Duplicate additions are blocked with a toast warning, successful adds/removes show toast feedback, and the added card's button becomes a disabled "✓ Added to Stack" state.
3. **Fully Responsive Layout** – A sticky navbar with a mobile hamburger menu, a stacked hero section, and an adaptive technology grid make the app usable on mobile, tablet, and desktop alike.

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code directly inside JavaScript. It's used because it makes it much easier to describe what the UI should look like right next to the logic that controls it, instead of writing separate `createElement` calls.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent, and the component receiving them cannot change them. State is data that a component owns itself and can update over time. In this project, `stack` and `technologies` are state inside the `Tech` component, updated with `setStack`/`setTechnologies` whenever the user adds, removes, or the data finishes loading.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that survives re-renders, along with a function to update it. When the setter is called, React re-renders the component with the new value. I used `useState` in `Tech.tsx` to store the loaded technology list, the loading and error state, and the array of technologies added to the stack, and in `Nav.tsx` to track whether the mobile menu is open.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders — usually for things that aren't part of rendering itself, like fetching data. I used `useEffect` in `Tech.tsx` to `fetch("/data.json")` once when the component first mounts, and to update the state with the loaded technologies (or an error) once the request finishes.

**5. Why does every item in a .map() list need a unique key prop?**
The `key` prop gives React a stable identity for each item in a list. With unique keys, React can tell which items changed, were added, or were removed, and only update those instead of re-rendering the whole list — without keys (or with duplicate ones), React can get confused and update the wrong items. I used `key={tech.id}` when mapping over both the technology cards and the stack items.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on whether a condition is true or false. I used it in the "Your Stack" panel in `Tech.tsx`: if the stack is empty, it shows a small "No technologies added yet." message; otherwise, it renders the list of added technologies.

```jsx
{stack.length === 0 && (
  <p className="text-xs text-gray-400">No technologies added yet.</p>
)}
{stack.map((tech) => (
  <div key={tech.id}>{/* stack item */}</div>
))}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child simply by writing it as a prop, like `<Tech technologies={data} />`. For the child to send something back up, the parent passes a function as a prop as well. When something happens in the child (like clicking "Add to Stack"), it calls that function, which runs back in the parent and updates the parent's state — that's how `handleAdd`, `handleRemove`, and `handleRemoveAll` update the `stack` state and immediately re-render the "Your Stack" panel.
