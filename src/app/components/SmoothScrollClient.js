'use client';

import { useEffect } from 'react';

export default function SmoothScrollClient() {
  useEffect(() => {
    // Apply native smooth scrolling for anchors and programmatic scrolls
    document.documentElement.style.scrollBehavior = 'smooth';
    // iOS touch momentum
    document.documentElement.style.WebkitOverflowScrolling = 'touch';

    return () => {
      // Clean up when unmounting (not strictly necessary in most apps,
      // but keeps the global style predictable)
      document.documentElement.style.scrollBehavior = '';
      document.documentElement.style.WebkitOverflowScrolling = '';
    };
  }, []);

  // no UI — just a side-effect
  return null;
}
