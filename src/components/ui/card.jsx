import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#1E1E1E] rounded-xl shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-4 text-white ${className}`}>{children}</div>;
}
