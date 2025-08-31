"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for page fully loaded
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.set(sectionRef.current, { opacity: 0 }); // hide before animation
    gsap.to(sectionRef.current, { opacity: 1, duration: 0.5 }); // fade in wrapper

    // Heading from top
    gsap.from(headingRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    // Image & Text simultaneously
    gsap.from(imgRef.current, {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });

    gsap.from(textRef.current, {
      x: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });
  }, [isLoaded]);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-[#EEEEEE] pt-10 overflow-hidden relative"
      style={{ opacity: 0 }} // hide until loaded
    >
      <img
        src="/img/ServicesPage/SectionTwo/rightCircle.png"
        className="absolute top-[-15vw] sm:top-[-30vw] md:top-[-14vw] right-[-4vw] w-[30vw] sm:w-[35vw] md:w-[16vw] sm:right-[-10vw] md:right-0"
      />
      <div className="hidden md:block bg-white w-[50vw] h-[50vw] rounded-full p-1 absolute bottom-[-14vw] left-[-10vw]">
        <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
      </div>

      {/* Heading */}
      <div className="h-[10vh] mx-auto" ref={headingRef}>
        <div className="w-[60%] sm:w-[40%] md:w-[24%] mx-auto border-t-4 border-[#4C4886]">
          <h1 className="text-[6vw] sm:text-[4vw] md:text-[2.4vw] text-center">
            Services We Offering
          </h1>
        </div>
        <h2 className="text-[7vw] sm:text-[5vw] md:text-[3vw] text-center text-[#4C4886] font-semibold">
          Certified of Excellence
        </h2>
      </div>

      {/* Main content */}
      <div className="w-full mt-2 sm:mt-10 md:mt-20 flex flex-col md:flex-row items-center">
        {/* Left image */}
        <div
          className="z-10 w-full md:w-[40%] h-full flex items-center justify-center"
          ref={imgRef}
        >
          <img
            src="/img/ServicesPage/SectionTwo/image.png"
            className="w-[80vw] sm:w-[60vw] md:w-[30vw]"
          />
        </div>

        {/* Right text */}
        <div
          className="w-[60%] h-full pt-10 md:ps-7 flex flex-col items-center md:items-start"
          ref={textRef}
        >
          <div className="w-[120%] sm:w-[45%] md:w-[24%] border-l-4 border-[#4C4886]">
            <h1 className="text-[10vw] sm:text-[4vw] md:text-[2.4vw] text-center">
              our services
            </h1>
          </div>
          <p className="text-gray-500 text-center md:text-start mt-4 w-[95vw] sm:w-[90vw] md:w-[50vw] text-[4.2vw] sm:text-[2.4vw] md:text-[1.2vw]">
            when you land on a sample webpage or open an email template and see
            content beginning with "lorem ipsum", the page creator placed that
            apparent gibberish there on purpose. Page layout looks artists use
            lorem ipsum, also known as placeholder copy.
          </p>
          <p className="text-[#4C4886] font-semibold mt-4 text-center md:text-start w-[90vw] text-[4.2vw] sm:text-[2.4vw] md:text-[1.4vw]">
            Cost-effective and Comprehensive IT Outsourcing Services:
          </p>
          <div className="w-[90vw] md:w-full flex flex-col sm:flex-row mt-4 items-center md:items-start justify-between gap-4 md:gap-0 p-4 text-[3.4vw] sm:text-[1.7vw] md:text-[1vw]">
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                <a href="#">Hire Mobile App Developer</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Scrum Master in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire AWS Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire QA Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Node.js Developer in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Azure Developer in Dubai</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                <a href="#">Hire Mobile App Developer</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Scrum Master in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire AWS Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire QA Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Node.js Developer in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Azure Developer in Dubai</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="list-disc">
                <a href="#">Hire Mobile App Developer</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Scrum Master in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire AWS Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire QA Resources in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Node.js Developer in Dubai</a>
              </li>
              <li className="list-disc">
                <a href="#">Hire Azure Developer in Dubai</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
