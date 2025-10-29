import React from "react";

type DividerProps = {
  variant?: "simple" | "dots" | "zigzag" | "arrow";
  className?: string;
};

export default function Divider({ variant = "simple", className = "" }: DividerProps) {
  // Different divider styles
  const dividerStyles = {
    simple: (
      <div className={`w-full flex items-center ${className}`}>
        <div className="flex-grow h-px bg-gray-800"></div>
        <div className="mx-4 h-2 w-2 bg-white"></div>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>
    ),
    dots: (
      <div className={`w-full flex items-center justify-center space-x-4 ${className}`}>
        <div className="h-1 w-1 rounded-full bg-white"></div>
        <div className="h-1 w-1 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-1 w-1 rounded-full bg-white"></div>
        <div className="h-1 w-1 rounded-full bg-white"></div>
      </div>
    ),
    zigzag: (
      <div className={`w-full flex items-center ${className}`}>
        <div className="flex-grow h-px bg-gray-800"></div>
        <div className="mx-4">
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L6 8L12 0L18 8L24 0" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>
    ),
    arrow: (
      <div className={`w-full flex items-center ${className}`}>
        <div className="flex-grow h-px bg-gray-800"></div>
        <div className="mx-4">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H22M22 6L18 1M22 6L18 11" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>
    )
  };

  return dividerStyles[variant];
}
