"use client";
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const heroHeight = window.innerHeight;
      setScrollPosition(Math.min(position / heroHeight, 1));
      setIsAtTop(position < heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress: scrollPosition, isAtTop };
}