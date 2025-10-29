"use client";

import { useEffect, useState } from 'react';

export default function CustomScrollbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 
                 ('ontouchstart' in window) ||
                 (navigator.maxTouchPoints > 0));
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Skip custom scrollbar on mobile devices
    if (isMobile) return;
    
    // Create a custom scrollbar element that overlays the native one
    const createCustomScrollbar = () => {
      // Create custom scrollbar elements
      const scrollbarContainer = document.createElement('div');
      scrollbarContainer.id = 'custom-scrollbar-container';
      scrollbarContainer.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 16px;
        height: 100vh;
        background: #000;
        z-index: 9999;
        pointer-events: none;
      `;
      
      const scrollbarThumb = document.createElement('div');
      scrollbarThumb.id = 'custom-scrollbar-thumb';
      scrollbarThumb.style.cssText = `
        position: absolute;
        top: 0;
        right: 0;
        width: 16px;
        background: #fff;
        transform-origin: top right;
      `;
      
      scrollbarContainer.appendChild(scrollbarThumb);
      document.body.appendChild(scrollbarContainer);
      
      // Update the custom scrollbar position
      const updateScrollbar = () => {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const thumbHeight = Math.max(40, (window.innerHeight / document.body.scrollHeight) * window.innerHeight);
        
        scrollbarThumb.style.height = `${thumbHeight}px`;
        scrollbarThumb.style.top = `${scrollPercentage * (window.innerHeight - thumbHeight)}px`;
      };
      
      // Initial update
      updateScrollbar();
      
      // Add scroll event listener
      window.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);
      
      // Hide native scrollbar
      document.documentElement.style.cssText = `
        scrollbar-width: none;
        -ms-overflow-style: none;
      `;
      
      document.body.style.cssText += `
        &::-webkit-scrollbar {
          display: none;
        }
      `;
    };
    
    // Initialize after a short delay to ensure DOM is ready
    setTimeout(createCustomScrollbar, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
      const container = document.getElementById('custom-scrollbar-container');
      if (container) document.body.removeChild(container);
    };
  }, [isMobile]);

  return null;
}