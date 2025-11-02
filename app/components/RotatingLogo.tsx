"use client";

import { useEffect, useState } from 'react';

export default function RotatingLogo() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Rotate 360 degrees for every 1000px scrolled
      setRotation(scrollY * 0.36);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 bg-white rounded-t-3xl w-25 h-32 z-40 flex items-center justify-center p-3 mr-4">
      <img 
        src="/Cardano-RGB_Logo-Icon-Black.svg" 
        alt="Cardano" 
        className="h-16 w-auto transition-transform duration-100"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}

