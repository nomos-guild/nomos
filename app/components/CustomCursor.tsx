"use client";

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [circleScale, setCircleScale] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const checkIfClickable = (element: HTMLElement | null): boolean => {
      if (!element) return false;
      
      return !!(
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.closest('a') ||
        element.closest('button') ||
        element.closest('[role="button"]') ||
        element.closest('.cursor-pointer') ||
        element.hasAttribute('onclick') ||
        element.onclick !== null
      );
    };

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element on every mouse move
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      setIsHovering(checkIfClickable(target));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (checkIfClickable(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      
      if (!checkIfClickable(relatedTarget)) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const animate = () => {
      setCircleScale(prev => {
        if (isHovering) {
          const next = Math.min(1, prev + 0.08);
          if (next < 1) {
            animationRef.current = requestAnimationFrame(animate);
          }
          return next;
        } else {
          const next = Math.max(0, prev - 0.12);
          if (next > 0) {
            animationRef.current = requestAnimationFrame(animate);
          }
          return next;
        }
      });
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <div
      className="fixed pointer-events-none z-[99999] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Triangle with stroke only */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <path 
          d="M0 16 L16 16 L8 0 Z" 
          fill="none" 
          stroke="white" 
          strokeWidth="1.5"
        />
      </svg>
      
      {/* Animated Circle inside triangle */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: circleScale,
        }}
      >
        <circle
          cx="8"
          cy="10"
          r={4.5 * circleScale}
          fill="white"
          stroke="none"
        />
      </svg>
    </div>
  );
}

