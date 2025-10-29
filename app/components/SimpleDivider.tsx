import React from "react";

type SimpleDividerProps = {
  width?: "full" | "half" | "quarter";
  thickness?: "thin" | "medium" | "thick";
  className?: string;
};

export default function SimpleDivider({ 
  width = "full", 
  thickness = "thin", 
  className = "" 
}: SimpleDividerProps) {
  // Width classes
  const widthClasses = {
    full: "w-full",
    half: "w-1/2",
    quarter: "w-1/4"
  };
  
  // Thickness classes
  const thicknessClasses = {
    thin: "h-px",
    medium: "h-0.5",
    thick: "h-1"
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`${widthClasses[width]} ${thicknessClasses[thickness]} bg-white`}></div>
    </div>
  );
}
