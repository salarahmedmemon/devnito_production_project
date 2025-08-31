"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(true);
  const containerRef = useRef(null);

  // loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 1500); // 1.5s for smoother transition
    return () => clearTimeout(timer);
  }, []);

  // hero animations (after loader hides)
  useEffect(() => {
    if (isLoaded || !containerRef.current) return;

    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.from(".missile", {
        top: "60%",
        left: "30%",
        duration: 1,
        opacity: 0,
      }, 'first')
        .from(".astronaut", {
          top: "-70%",
          right: "80%",
          duration: 1,
          opacity: 0,
        }, 'first')
        .from(".right-section", {
          right: "-100%",
          duration: 1,
          opacity: 0,
        }, "first")
        .from(".left-section", {
          x: "-200%",
          duration: 1,
          opacity: 0,
        }, "first")
        .from(".first-image", {
          x: "-200%",
          duration: 1,
          opacity: 0,
        }, "first")
        .from(".second-image", {
          x: "200%",
          duration: 1,
          opacity: 0,
        }, "first")
        .from(".about-btn", {
          x: "300%",
          duration: .5,
          opacity: 0,
        })
        .from(".first-heading", {
          x: "-300%",
          duration: 0.9,
          opacity: 0,
        })
        .from(".para", {
          x: "200%",
          duration: 0.9,
          opacity: 0,
        })
        .from(".contact-btn", {
          x: "-300%",
          duration: 0.9,
          opacity: 0,
        });

      // scroll-trigger animations for sections
      gsap.utils.toArray([
        ".section-two",
        ".section-three",
        ".section-four",
        ".section-five",
        ".section-six",
        ".footer"
      ]).forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          opacity: 0,
          y: 100,
          duration: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        // loader
        <div className="w-full h-[75vh] md:h-screen bg-blue-950 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
        </div>
      ) : (
        <>
          
          {/* HERO SECTION */}
          <div
            ref={containerRef}
            className="about-page w-full h-[60vh] sm:h-[80vh] md:h-screen relative"
          >
            <Header />
            <div className="w-full h-[50vh] sm:h-[77vh] md:h-[83.6vh] absolute bottom-0">

              {/* small screen content */}
              <div className="w-full h-[15vh] sm:h-[25vh] md:hidden flex gap-5 p-4 sm:px-8 items-center justify-center mt-6 sm:mt-10">
                {/* First Image */}
                <div className="first-image w-1/2 h-full relative group overflow-hidden cursor-pointer">
                  <img
                    src="/img/AboutPage/MainPageImages/firstimage.jpeg"
                    className="w-full h-full p-1 bg-purple-300 object-cover transition-opacity duration-500 group-hover:opacity-40"
                    alt="About Me"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h2 className="text-white text-lg sm:text-xl font-bold">Web Developer</h2>
                  </div>
                </div>

                {/* Second Image */}
                <div className="second-image w-1/2 h-full relative group overflow-hidden cursor-pointer">
                  <img
                    src="/img/AboutPage/MainPageImages/secondimage.jpeg"
                    className="w-full h-full p-1 bg-purple-300 object-cover transition-opacity duration-500 group-hover:opacity-40"
                    alt="About Me"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h2 className="text-white text-lg sm:text-xl font-bold">Forex Trading</h2>
                  </div>
                </div>
              </div>

              {/* small screen text */}
              <div className="w-full h-[30vh] mt-4 md:hidden flex flex-col items-center justify-center text-center">
                <button className="about-btn text-[7vw] sm:text-[3vw] px-[10vw] sm:px-[7vw] py-[.6vh] rounded bg-white text-purple-800 font-bold cursor-pointer">
                  About
                </button>
                <h1 className="first-heading text-[14vw] sm:text-[8vw] text-white font-bold">Devnito</h1>
                <p className="para text-[3vw] sm:text-[2.4vw] text-white">
                  DevNito is a leading provider of IT export services, offering custom software and SaaS
                  solutions to businesses worldwide.
                </p>
                <button className="contact-btn text-[7vw] sm:text-[3vw] px-[8vw] sm:px-[6vw] py-[.6vh] rounded bg-white text-purple-800 font-bold mt-4 cursor-pointer">
                  Contact Us
                </button>
              </div>

              {/* large screen content */}
              <div className="w-full h-full hidden md:flex items-center justify-between relative gap-4 px-[7vw] pt-[5vw] overflow-hidden">
                <img src="/img/ServicesPage/SectionOne/image02.png" className="astronaut w-[12vw] absolute top-[-3vw] right-[55vw]" />
                <img src="/img/AboutPage/MainPageImages/image03.png" className="missile w-[5vw] absolute top-5 right-[20vw] rotate-[24deg]" />

                {/* left section */}
                <div className="left-section w-1/2 h-full pt-12">
                  <button className="px-[1vw] py-[0vw] bg-white text-purple-900 font-bold text-[3vw] rounded-lg">About</button>
                  <h1 className="text-[7vw] leading-[6vw] text-white font-bold">Devnito</h1>
                  <p className="text-[#CACCCD] mt-8 w-[95%]">
                    DevNito is a leading provider of IT export services, offering custom software and SaaS
                    solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration,
                    and client-centricity, we aim to elevate your business to new heights.
                  </p>
                  <button className="px-[3vw] py-[.8vw] bg-white text-purple-800 rounded-lg font-bold mt-8">CONTACT US</button>
                </div>

                {/* right section */}
                <div className="right-section w-1/2 h-full flex items-center justify-center relative">
                  <div className="w-[20vw] h-[35vh] z-1000 top-[-1vw] left-0 absolute group overflow-hidden cursor-pointer rounded-lg">
                    <img
                      src="/img/AboutPage/MainPageImages/firstimage.jpeg"
                      className="w-full h-full rounded-lg p-1 bg-purple-300 object-cover transition-opacity duration-500 group-hover:opacity-40"
                      alt="About Me"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h2 className="text-white text-2xl md:text-4xl font-bold">Web Developer</h2>
                    </div>
                  </div>
                  <div className="w-[7vw] h-[16vh] absolute top-[13vw] left-[16.5vw] border-4 border-dashed border-white"></div>
                  <div className="w-[20vw] h-[35vh] z-1000 bottom-[1vw] right-[2vw] absolute group overflow-hidden cursor-pointer rounded-lg">
                    <img
                      src="/img/AboutPage/MainPageImages/secondimage.jpeg"
                      className="w-full h-full rounded-lg p-1 bg-purple-300 object-cover transition-opacity duration-500 group-hover:opacity-40"
                      alt="About Me"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h2 className="text-white text-2xl md:text-4xl font-bold">Forex Trading</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER SECTIONS */}
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <Footer />
        </>
      )}
    </>
  );
}
