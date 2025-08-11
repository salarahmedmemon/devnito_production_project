"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import gsap from "gsap";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Footer from "../components/Footer";

export default function AboutPage() {
  // 1. states/hook variables

  // FOR LARGE SCREEN ANIMATION
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".missile", {
      top: "60%",
      left: "30%",
      duration: 1  
    })
    .from(".astronaut", {
      top: "-70%",
      right: "80%",
      duration: 1
    })
    .from(".right-section", {
      right: "-100%",
      duration: 1
    }, "first")
    .from(".left-section", {
      x: "-200%",
      duration: 1
    }, "first")
  }, []);

  // FOR MOBILE SCREEN ANIMATION
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".first-image", {
      x: "-200%",
      duration: 1
    }, "first")
    .from(".second-image", {
      x: "200%",
      duration: 1
    }, "first")
    .from(".about-btn", {
      x: "300%",
      duration: .5
    })
    .from(".first-heading", {
      x: "-300%",
      duration: 0.9
    })
    .from(".para", {
      x: "200%",
      duration: 0.9
    })
    .from(".contact-btn", {
      x: "-300%",
      duration: 0.9
    })
  }, []);

  // 2. function/methods

  // 3. return statement/jsx
  return (
    <>
      <div className="about-page w-full h-[60vh] sm:h-[80vh] md:h-screen relative">
        <Header />
        <div className="w-full h-[50vh] sm:h-[77vh] md:h-[83.6vh] absolute bottom-0">
          {/* FOR SMALL SCREEN */}
          <div className="w-[100%] h-[15vh] sm:h-[25vh] md:hidden flex gap-5 p-4 sm:ps-8 sm:pe-8 items-center justify-center mt-6 sm:mt-10">
    
            {/* First Image with Overlay */}
            <div className="first-image w-[50%] h-[100%] relative group overflow-hidden cursor-pointer">
              <img 
                src="/img/AboutPage/MainPageImages/firstimage.jpeg"
                className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                alt="About Me"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-lg sm:text-xl font-bold">Web Developer</h2>
              </div>
            </div>

            {/* Second Image with Overlay */}
            <div className="second-image w-[50%] h-[100%] relative group overflow-hidden cursor-pointer">
              <img 
                src="/img/AboutPage/MainPageImages/secondimage.jpeg"
                className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                alt="About Me"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-lg sm:text-xl font-bold">Forex Trading</h2>
              </div>
            </div>

          </div>


          <div className="w-[100%] h-[30vh] mt-4 md:hidden flex flex-col items-center justify-center">
            <button className="about-btn text-[7vw] sm:text-[3vw] px-[10vw] sm:px-[7vw] py-[.6vh] rounded bg-white text-purple-800 font-bold cursor-pointer">About</button>
            <h1 className="first-heading text-[14vw] sm:text-[8vw] text-white font-bold">Devnito</h1>
            <p className="para text-[3vw] sm:text-[2.4vw] text-center text-white">DevNito is a leading provider of IT export services, offering custom software and SaaS
              solutions to businesses worldwide. With a focus an tailored excellence, transparent.
            </p>
            <button className="contact-btn text-[7vw] sm:text-[3vw] px-[8vw] sm:px-[6vw] py-[.6vh] rounded bg-white text-purple-800 font-bold mt-4 cursor-pointer">Contact Us</button>
          </div>

          {/* FOR LARGE SCREEN */}
          <div className="w-full h-full hidden md:flex items-center justify-between relative gap-4 ps-[7.5vw] pt-[5vw] pe-[6.5vw] overflow-hidden">
            <img src="/img/AboutPage/MainPageImages/astronautImage.jpeg" className="astronaut w-[10vw] absolute top-[-5vw] right-[60vw]" />
            <img src="/img/AboutPage/MainPageImages/missileImage.png" className="missile w-[10vw] absolute top-14 right-[18vw]" />
            <div className="left-section w-[50%] h-[100%] pt-12">
              <button className="px-[3vw] py-[.8vw] bg-white text-purple-900 font-bold text-[2vw] rounded-lg">About</button>
              <h1 className="text-[6vw] text-white font-bold">Devnito</h1>
              <p className="text-white w-[95%]">DevNito is a leading provider of IT export services, offering custom software and SaaS
                solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration,
                and client-centiricity, we aim to elevate your business to new heights.
              </p>
              <button className="px-[3vw] py-[.8vw] bg-white text-purple-800 rounded-lg font-bold mt-5">CONTACT US</button>
            </div>
            <div className="right-section w-[50%] h-[100%] flex items-center justify-center relative">
                <div className="w-[50%] h-[40%] top-[3.5vw] rounded-lg left-0 absolute group overflow-hidden cursor-pointer">
                  <img 
                    src="/img/AboutPage/MainPageImages/firstimage.jpeg"
                    className="w-full rounded-lg p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                    alt="About Me"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">Web Developer</h2>
                  </div>
                </div>
                <div className="w-[5vw] h-[10vh] border-4 border-dashed border-white"></div>
                <div className="w-[50%] h-[40%] absolute rounded-lg bottom-[3vw] right-0 group overflow-hidden group-hover cursor-pointer">
                    <img 
                      src="/img/AboutPage/MainPageImages/secondimage.jpeg"
                      className="w-full rounded-lg p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
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
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}
