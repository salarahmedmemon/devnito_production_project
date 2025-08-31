'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SectionOne = () => {
  // 1. states/hooks variables
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP context for React safety
    let ctx = gsap.context(() => {
      // timeline with small delay to wait for loader (0.6s)
      const tl = gsap.timeline({ delay: 0.6 });

      tl.from(".animate-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  // 2. return statement/jsx
  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-[80vw] sm:w-[50vw] h-[30vh] mx-auto sm:mx-0
        flex flex-col items-center sm:items-start sm:ps-8 md:ps-23 text-white"
      >
        <button className="cursor-pointer animate-text bg-white z-5 px-5 sm:px-8 sm:text-[2.5vw] py-2 rounded text-[#4C4886] font-bold">
          CONNECTING
        </button>
        <h1 className="animate-text font-bold z-10 text-xl sm:text-[8vw] md:text-[6.4vw] mt-3 md:mt-0">
          BRANDS
        </h1>
        <span className="animate-text sm:text-[4vw] md:text-[3vw]">WITH</span>
        <h4 className="animate-text font-bold z-1000 sm:text-[3.5vw] md:text-[3.5vw]">
          GLOBAL AUDIENCES
        </h4>
        <button className="cursor-pointer animate-text bg-white z-5 px-5 py-2 rounded text-[#4C4886] text-[5vw] sm:text-[2.4vw] md:text-[2vw] mt-5 font-bold">
          TALK TO OUR EXPERT
        </button>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animationPlayState: isHovered ? 'paused' : 'running',
            WebkitAnimationPlayState: isHovered ? 'paused' : 'running', // Safari support
          }}
          className="w-[100%] images p-10 sm:p-0 overflow-hidden md:p-5 flex gap-4 sm:w-[50%] h-[57%] sm:h-[85%] md:h-[190%] absolute sm:right-4 md:right-14 md:top-[20%]"
        >
          <div className="first-column w-[50%] h-[100%]">
            <img
              className="bg-repeat-y w-25 sm:hidden md:w-40 top-[-40%] sm:top-[-14%] md:top-[-4%] absolute"
              src="/img/SectionOneImages/firstColumn.png"
            />
            <img
              className="firstcolumn firsimage hidden sm:block w-30 md:w-45 absolute top-[-6vw] md:top-[-4vw]"
              src="/img/SectionOneImages/forLargeScreenFirst.png"
            />
          </div>
          <div className="second-column w-[50%] h-[100%]">
            <img
              className="bg-repeat-y w-25 md:w-40 top-[-40%] sm:hidden sm:top-[-14%] absolute md:top-[-4%]"
              src="/img/SectionOneImages/secondColumn.png"
            />
            <img
              className="firstcolumn firsimage hidden sm:block w-30 md:w-45 absolute top-[-6vw] md:top-[-4vw]"
              src="/img/SectionOneImages/secondColumn.png"
            />
          </div>
          <div className="third-column hidden sm:block w-[50%] h-[100%] ">
            <img
              className="bg-repeat-y w-25 md:w-40 sm:hidden top-[-40%] sm:top-[-14%] absolute md:top-[-4%]"
              src="/img/SectionOneImages/thirdColumn.png"
            />
            <img
              className="firstcolumn firsimage hidden sm:block w-30 md:w-45 absolute top-[-6vw] md:top-[-4vw]"
              src="/img/SectionOneImages/forLargeScreenThird.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
