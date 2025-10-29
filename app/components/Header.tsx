"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-menu="true"]')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white to-gray-100 shadow-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              NOMOS
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden" data-menu="true">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex md:space-x-10">
            <Link href="/cmat" className="text-lg font-medium text-black hover:text-gray-700">
              CMAT
            </Link>
            <Link href="/cgov" className="text-lg font-medium text-black hover:text-gray-700">
              CGOV
            </Link>
          </nav>
        </div>
      </Container>
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          aria-hidden="true"
        />
      )}
      
      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-menu="true"
      >
        <Container>
          <div className="py-6 space-y-4">
            <Link 
              href="/cmat" 
              className="block py-3 text-xl font-medium text-black hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              CMAT
            </Link>
            <Link 
              href="/cgov" 
              className="block py-3 text-xl font-medium text-black hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              CGOV
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}