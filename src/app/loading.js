'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [dots, setDots] = useState('');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Animate dots: LOADING.
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    // Simulate full loading with delay (2s or until real data/animations complete)
    const timeout = setTimeout(() => {
      setShowLoader(false); // Hide loader after delay
    }, 1000); // Adjust delay as needed

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-opacity duration-500 ease-in-out animate-fadeOut">
      <div className="mb-4 text-2xl font-bold">LOADING{dots}</div>
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
}
