"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function SectionOne() {
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Show content only after page fully loaded
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return; // Don't run animations before loaded

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stage 1 - two images animate simultaneously
      tl.from(".img-top", {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, 0)
        .from(".img-left-bottom", {
          x: -150,
          y: 150,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        }, 0);

      // Stage 2 - text & main image animate simultaneously
      tl.from(".text-container", {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "+=0.2")
        .from(".main-img-container", {
          x: 150,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        }, "<");
    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <>
      {/* Blank screen until loaded */}
      {!isLoaded ? (
        <div className="w-full h-screen bg-blue-950 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
        </div>
      ) : (
        <>
          <div ref={sectionRef} className="services-page w-full h-[60vh] md:min-h-screen">
            <Header />
            <div className="w-full h-screen pt-15 md:pt-26 relative overflow-hidden">
              <img
                src="/img/ServicesPage/SectionOne/image02.png"
                className="img-top hidden md:block absolute top-[5vw] left-[29vw] h-[16vw]"
              />
              <img
                src="/img/ServicesPage/SectionOne/image03.png"
                className="img-left-bottom hidden md:block absolute top-[7vw] right-[43vw] rotate-30 w-[5vw]"
              />
              <div className="w-full h-[50vh] md:h-[83vh] flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 ps-25.5 pe-25.5">
                <div className="text-container w-[50vw] sm:w-[90%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center">
                  <button className="px-6 py-2 bg-white text-purple-800 text-[5vw] sm:text-[3vw] md:text-[2.5vw] font-bold rounded-lg mt-2 md:mt-20">
                    LET'S SEE
                  </button>
                  <h1 className="text-white leading-[14vw] sm:leading-[8.4vw] md:leading-[6vw] font-bold text-[15vw] sm:text-[10vw] md:text-[6.5vw]">
                    SERVICES
                  </h1>
                  <span className="text-[3vw] text-white">DETAILS</span>
                  <p className="text-white text-[4vw] sm:text-[2.4vw] md:text-[1.5vw] w-[90vw] sm:w-[100%] md:w-[85%] text-center md:text-start">
                   Lorem ipsum is simply dummy text of the printing and typesetting
                   industry. Lorem ipsum has been the industry's standard dummy text ever
                   since the 1500s.
                  </p>
                  <button className="px-4 py-2 bg-white text-purple-800 text-[3.4vw] sm:text-[2.4vw] md:text-[1.4vw] font-bold rounded-lg mt-4 md:mt-10">
                    Talk to our expert
                  </button>
                </div>
                <div className="main-img-container w-[70vw] sm:w-[44vw] md:w-[50%] h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/img/CaseStudies/SectionOne/image01.png"
                    className="pt-4 sm:pt-10 md:pt-0 w-[95%] sm:w-[65%] md:w-[85%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
