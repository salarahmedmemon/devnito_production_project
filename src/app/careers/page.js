"use client";
import { useState, useRef, useEffect } from "react";


export default function CareersPage() {
    // 1. states/hook variables
    const [isLoaded, setIsLoaded] = useState(true);
    const containerRef = useRef(null);

    // 2. functions/methods
    useEffect(() => {
        const timer = setTimeout(() => { setIsLoaded(false) }, 500);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (isLoaded || !containerRef.current) return;

        let ctx = gsap.context(() => {}, containerRef);
        return () => ctx.revert(timer);
    }, [isLoaded]);

    // 3. return statement/jsx
    return (
        <>
        {
            isLoaded ? (
                // loader
                <div className="w-full h-[72vh] sm:h-[80vh] lg:h-screen bg-blue-950 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
                </div>
            ) : (
                <>
                  <div className="w-full h-full ">
                    <h1>WORKING ON THIS PAGE...</h1>
                  </div>
                </>
            )
        }
        </>
    );
}