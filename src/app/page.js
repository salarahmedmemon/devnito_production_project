'use client';
import { useEffect, useState } from "react";
import Main from "./components/Main";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";

export default function Home() {
  // 1. states/hook variables
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  // 2. functions/methods

  // 3. return statement/jsx
  return (
    <>
      {
        isLoaded ? (
          // loader
          <div className="w-full h-[75vh] md:h-screen bg-blue-950 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
          </div>
        ) : (
          <>
            <div className="root w-full min-h-screen bg-[linear-gradient(to_right,_#2F284C,_#222D48)]">
              <Main />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
            </div>
          </>
        )
      }
    </>
  );
}
