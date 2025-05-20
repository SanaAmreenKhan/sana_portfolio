import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
