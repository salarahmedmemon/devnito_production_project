"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
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
        // loader
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
                className="img-left-bottom hidden md:block absolute top-[7vw] right-[10vw] rotate-30 w-[5vw]"
              />
              <div className="w-full h-[50vh] md:h-[83vh] flex flex-col-reverse md:flex-row items-center justify-center md:gap-10 ps-25.5 pe-25.5">
                <div className="text-container w-[50vw] sm:w-[90%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center">
                  <button className="px-6 py-2 bg-white text-[#4C4886] text-[5vw] sm:text-[3vw] md:text-[2.5vw] font-bold rounded-lg mt-2 md:mt-10">
                    WE OFFER
                  </button>
                  <h1 className="text-white font-bold text-[15vw] sm:text-[10vw] md:text-[6.5vw] sm:leading-[10vw] md:leading-[7vw]">
                    SERVICES
                  </h1>
                  <p className="text-white text-[4vw] sm:text-[2.4vw] md:text-[1.5vw] w-[90vw] sm:w-[100%] md:w-[70%] text-center md:text-start mt-[1vw]">
                    We have made quality our habit. It's not something that we just strive for - we live
                    by this principle every day.
                  </p>
                  <button className="px-4 sm:px-6 py-2 bg-white text-[#4C4886] text-[3.8vw] sm:text-[2.4vw] md:text-[1.2vw] font-bold rounded mt-4 md:mt-10">
                    VIEW ALL SERVICES
                  </button>
                </div>
                <div className="main-img-container w-[70vw] sm:w-[44vw] md:w-[50%] h-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/img/ServicesPage/SectionOne/image01.png"
                    className="pt-4 sm:pt-10 md:pt-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Footer />
        </>
      )}
    </>
  );
}
