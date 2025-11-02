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
    let isDragging = false;
    let startY = 0;
    let startScrollTop = 0;
    let scrollbarContainer: HTMLDivElement | null = null;
    let scrollbarThumb: HTMLDivElement | null = null;
    let styleElement: HTMLStyleElement | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaY = e.clientY - startY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const thumbHeight = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
      const trackHeight = window.innerHeight - thumbHeight;
      const scrollRatio = scrollableHeight / trackHeight;
      
      const newScrollTop = startScrollTop + (deltaY * scrollRatio);
      window.scrollTo(0, Math.max(0, Math.min(newScrollTop, scrollableHeight)));
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      if (scrollbarThumb) {
        scrollbarThumb.style.cursor = 'grab';
      }
    };
    
    const updateScrollbar = () => {
      if (!scrollbarContainer || !scrollbarThumb) return;
      
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        scrollbarContainer.style.display = 'none';
        return;
      }
      scrollbarContainer.style.display = 'block';
      
      const scrollPercentage = window.scrollY / scrollableHeight;
      const thumbHeight = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
      const maxTop = window.innerHeight - thumbHeight;
      
      scrollbarThumb.style.height = `${thumbHeight}px`;
      scrollbarThumb.style.top = `${scrollPercentage * maxTop}px`;
    };
    
    const createCustomScrollbar = () => {
      // Create custom scrollbar elements
      scrollbarContainer = document.createElement('div');
      scrollbarContainer.id = 'custom-scrollbar-container';
      scrollbarContainer.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 16px;
        height: 100vh;
        background: #000;
        z-index: 9999;
        cursor: pointer;
      `;
      
      scrollbarThumb = document.createElement('div');
      scrollbarThumb.id = 'custom-scrollbar-thumb';
      scrollbarThumb.style.cssText = `
        position: absolute;
        top: 0;
        right: 0;
        width: 16px;
        background: #fff;
        cursor: grab;
        user-select: none;
      `;
      
      const thumbMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startY = e.clientY;
        startScrollTop = window.scrollY;
        scrollbarThumb!.style.cursor = 'grabbing';
        e.preventDefault();
        e.stopPropagation();
      };
      
      scrollbarThumb.addEventListener('mousedown', thumbMouseDown);
      
      // Click on track to jump (but not on thumb)
      const containerMouseDown = (e: MouseEvent) => {
        // Only jump if clicking directly on container track, not on thumb
        if (e.target === scrollbarContainer && !isDragging) {
          const clickY = e.clientY;
          const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
          const thumbHeight = Math.max(40, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
          const trackHeight = window.innerHeight - thumbHeight;
          const scrollRatio = scrollableHeight / trackHeight;
          
          const newScrollTop = (clickY - thumbHeight / 2) * scrollRatio;
          window.scrollTo(0, Math.max(0, Math.min(newScrollTop, scrollableHeight)));
        }
      };
      
      scrollbarContainer.addEventListener('mousedown', containerMouseDown);
      
      scrollbarContainer.appendChild(scrollbarThumb);
      document.body.appendChild(scrollbarContainer);
      
      // Add document-level event listeners for dragging
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      // Initial update
      updateScrollbar();
      
      // Add scroll event listener
      window.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);
      
      // Hide native scrollbar
      styleElement = document.createElement('style');
      styleElement.textContent = `
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(styleElement);
    };
    
    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(createCustomScrollbar, 100);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (scrollbarContainer) {
        if (scrollbarContainer.parentNode) {
          scrollbarContainer.parentNode.removeChild(scrollbarContainer);
        }
        scrollbarContainer = null;
      }
      scrollbarThumb = null;
      
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
        styleElement = null;
      }
      
      isDragging = false;
    };
  }, [isMobile]);

  return null;
}