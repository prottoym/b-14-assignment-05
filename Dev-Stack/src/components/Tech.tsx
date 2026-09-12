import React, { useEffect, useState } from "react";
import { Star, X, Loader2 } from "lucide-react";
import type { Icard } from "../types/CardType";

const DIFFICULTY_STYLES: Record<string, string> = {
  "Beginner-Friendly": "text-emerald-600",
  Intermediate: "text-amber-600",
  Advanced: "text-rose-600",
};

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-600",
};

export default function Tech() {
  const [technologies, setTechnologies] = useState<Icard[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [stack, setStack] = useState<Icard[]>([]);
  const [warning, setWarning] = useState<string | null>(null);

  // Load data from the JSON file instead of hardcoding it in the component.
  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load data.json");
        return res.json();
      })
      .then((data: Icard[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoadError(err.message);
        setLoading(false);
      });
  }, []);

  const isAdded = (id: number) => stack.some((t) => t.id === id);

  const handleAdd = (tech: Icard) => {
    if (isAdded(tech.id)) {
      setWarning(`${tech.name} is already in your stack.`);
      setTimeout(() => setWarning(null), 2500);
      return;
    }
    setStack((prev) => [...prev, tech]);
  };

  const handleRemove = (id: number) =>
    setStack((prev) => prev.filter((t) => t.id !== id));
  const handleRemoveAll = () => setStack([]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm gap-2">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading technologies…
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-rose-500 text-sm">
        Failed to load data: {loadError}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10 sm:px-10">
      {/* Toast-style warning, fixed so it's visible even while scrolled */}
      {warning && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-sm px-4 py-3 shadow-md">
          ⚠ {warning}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-[34px] font-extrabold text-gray-900 mb-1.5 leading-tight">
          Explore the{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
          {/* Technology cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 min-w-0 w-full">
            {technologies.map((tech) => {
              const added = isAdded(tech.id);
              return (
                <div
                  key={tech.id}
                  className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3"
                >
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                        }}
                      />
                    </div>
                    {tech.badge && (
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          BADGE_STYLES[tech.badge] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-[17px] font-bold text-gray-900 -mt-1">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed -mt-2">
                    {tech.description}
                  </p>

                  {/* Chips row */}
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">
                      {tech.category}
                    </span>
                    <span
                      className={`font-medium ${
                        DIFFICULTY_STYLES[tech.difficulty] || "text-gray-500"
                      }`}
                    >
                      {tech.difficulty}
                    </span>
                    <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {tech.rating}
                    </span>
                  </div>

                  {/* Add to Stack button */}
                  <button
                    onClick={() => handleAdd(tech)}
                    disabled={added}
                    className={`w-full h-[38px] rounded-lg text-sm font-medium transition-colors ${
                      added
                        ? "bg-emerald-50 text-emerald-600 cursor-not-allowed"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {added ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack panel */}
          <div className="w-full lg:w-[280px] lg:shrink-0 border border-gray-200 rounded-2xl p-5">
            <h4 className="text-[15px] font-bold text-gray-900">Your Stack</h4>
            <p className="text-xs text-gray-400 mb-4">
              {stack.length} Technology Selected
            </p>

            <div className="flex flex-col gap-2 mb-4">
              {stack.length === 0 && (
                <p className="text-xs text-gray-400">No technologies added yet.</p>
              )}
              {stack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2.5 bg-gray-50/70"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7 object-contain shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                      }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {tech.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(tech.id)}
                    className="text-gray-400 hover:text-gray-700 shrink-0"
                    aria-label={`Remove ${tech.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Always visible; disabled when the stack is empty */}
            <button
              onClick={handleRemoveAll}
              disabled={stack.length === 0}
              className={`w-full h-[36px] rounded-lg border text-sm font-medium transition-colors ${
                stack.length === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-rose-200 text-rose-500 hover:bg-rose-50"
              }`}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React from 'react';

// const Tech = ({ card }) => {
//     return (
//         <div className="w-[1216px] h-[72px]">
//             <h1 className="text-[40px] leading-[42px] font-bold text-[#0F172A] w-[1216px] h-[40px]">
//                 Explore The{' '}
//                 <span className="font-bold text-purple-500">
//                     Technologies
//                 </span>
//             </h1>
//             <p className='w-[1216px] h-[24px]'>pick one technology per catagory to build your ideal stack</p>
//         </div>
//     );
// };

// export default Tech;

// <div>
//     {
//         <div>
//             {card.name}
//         </div>

//     }


// </div>