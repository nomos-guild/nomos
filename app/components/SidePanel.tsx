"use client";

import { ReactNode, useState, useEffect, useRef } from "react";

type SidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const MIN_WIDTH = 300;
const MAX_WIDTH = 800;

export default function SidePanel({ isOpen, onClose, title, children }: SidePanelProps) {
  const [width, setWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset width when panel closes
  useEffect(() => {
    if (!isOpen) {
      setWidth(500);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !panelRef.current) return;
      
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Side panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 h-full bg-black border-l border-gray-800 transform z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isOpen && !isResizing ? "transition-transform duration-300 ease-in-out" : ""}`}
        style={{ 
          width: isOpen ? `${width}px` : "0px",
          minWidth: isOpen ? `${width}px` : "auto"
        }}
      >
        {/* Resize handle */}
        {isOpen && (
          <div
            onMouseDown={handleMouseDown}
            className="absolute left-0 top-0 h-full w-1 cursor-ew-resize hover:bg-white transition-colors group z-10"
            aria-label="Resize panel"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-12 rounded-full bg-gray-600 group-hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
        
        <div className="sticky top-0 bg-black border-b border-gray-800 flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-white pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close panel"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          {children}
        </div>
      </div>
    </>
  );
}

