# DevStack

DevStack is a React web app that helps developers explore popular web development technologies and build their own personal tech stack. Users can browse technology cards (React, Node.js, MongoDB, Tailwind CSS, and more), see details like rating, difficulty, and category, and add their favorites to a "Your Stack" panel.

## 🛠️ Technologies Used

- **React** – for building the component-based UI
- **Vite** – fast development server and build tool
- **Tailwind CSS** – utility-first styling
- **JavaScript (ES6+)** – core app logic
- **JSON** – local data source for the technology list

## ✨ Features

1. **Browse Technology Cards** – View 10–15 technologies with icon, name, category, description, difficulty level, badge, and star rating, loaded dynamically from a JSON file.
2. **Build Your Own Stack** – Add any technology to the "Your Stack" panel with one click. Duplicate additions are blocked with a warning toast, and the added card's button changes to a disabled "✓ Added to Stack" state.
3. **Manage Your Stack** – Remove a single technology with its ✕ button, or clear the entire stack at once with "Remove All" — with toast feedback for every action.

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code directly inside JavaScript. It's used because it makes it much easier to describe what the UI should look like right next to the logic that controls it, instead of writing separate `createElement` calls.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent, and the component receiving them cannot change them. State is data that a component owns itself and can update over time. In this project, `stack` is state inside the main component, but when it's passed down to the "Your Stack" panel, it arrives there as a prop.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that survives re-renders, along with a function to update it. When the setter is called, React re-renders the component with the new value. I used `useState` to store the loaded technology list, the loading status, and the array of technologies the user has added to their stack.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders — usually for things that aren't part of rendering itself, like fetching data. I used `useEffect` to load the technology data from the local JSON file once when the app first mounts, and to turn off the loading state once the data was ready.

**5. Why does every item in a .map() list need a unique key prop?**
The `key` prop gives React a stable identity for each item in a list. With unique keys, React can tell which items changed, were added, or were removed, and only update those instead of re-rendering the whole list — without keys (or with duplicate ones), React can get confused and update the wrong items.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on whether a condition is true or false. I used it in the "Your Stack" panel: if the stack is empty, it shows a friendly empty-state message; otherwise, it renders the list of added technologies.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty. Start adding technologies!</p>
) : (
  stack.map((tech) => <StackItem key={tech.id} tech={tech} />)
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child simply by writing it as a prop, like `<TechCard tech={tech} onAdd={handleAdd} />`. For the child to send something back up, the parent passes a function as a prop as well. When something happens in the child (like clicking "Add to Stack"), it calls that function, which runs back in the parent and updates the parent's state.
