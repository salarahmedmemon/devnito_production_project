"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Title from top
            gsap.from(".section-two-title", {
                y: "-100%",
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-two-title",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            // Image from left
            gsap.from(".section-two-image", {
                x: "-100%",
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-two-image",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            // Text content from right
            gsap.from(".section-two-text", {
                x: "100%",
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-two-text",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full min-h-screen relative overflow-hidden pb-2 md:pt-5 bg-[#EEEEEE]"
        >
            <img
                src="/img/AboutPage/SectionTwo/half-circle.png"
                className="absolute right-0 top-[-2%] sm:top-[-10%] w-[20vw] md:w-[10vw]"
            />

            {/* TITLE */}
            <div className="relative section-two-title">
                <div className="w-[55vw] sm:w-[40vw] md:w-[20vw] h-1 bg-[#4C4886] absolute left-[23%] sm:left-[30%] md:left-[39.5%] top-[5vw] sm:top-[20%] md:top-[18%]"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-4 sm:pt-6">
                    Our Company
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#4C4886] font-bold">
                    Principle
                </h2>
            </div>

            <div className="w-full mt-4 sm:mt-6 flex flex-col md:flex-row items-center md:items-start justify-between md:mt-20">
                {/* IMAGE */}
                <img
                    src="/img/AboutPage/SectionTwo/first-image.png"
                    className="ps-6 section-two-image"
                />

                {/* TEXT CONTENT */}
                <div className="md:w-[55%] h-[100%] section-two-text">
                    <div className="w-[48%] sm:w-[32%] md:w-[28%] md:ms-[2vw] mx-auto md:mx-0 mt-4 flex items-center justify-between gap-2">
                        <div className="w-1 sm:w-[2%] h-6 sm:h-8 bg-[#4C4886]"></div>
                        <h3 className="text-xl sm:text-3xl text-[#4C4886] font-bold">
                            Our Principle
                        </h3>
                    </div>
                    <p className="text-[#AFAFAF] text-center md:text-start md:ms-6 mt-2 sm:mt-4 sm:text-lg">
                        Lorem ipsum is Simply dummy text of the printing and the typesetting
                        industry. Lorem ipsum has been the industry's stencenturies.
                    </p>
                    <span className="text-[#4C4886] ms-3 sm:ms-6 sm:text-lg font-bold mt-4 text-center md:text-start block">
                        Cost-effective and Comprehensive IT Outsourcing Services:
                    </span>

                    <div className="w-full mt-4 md:mt-8 md:flex md:items-center md:justify-between md:gap-2 md:ps-6">
                        <div className="w-[90%] mx-auto text-center md:text-start">
                            <h4 className="text-[#4C4886] font-bold text-lg">Tailored Excellence</h4>
                            <p className="text-[#AFAFAF]">
                                We Deliver Custom Software And SaaS Solutions that are Specially
                                Designed To Meet The Unique needs of your Business.
                            </p>
                        </div>
                        <div className="w-[90%] mx-auto text-center md:text-start mt-4 md:mt-0">
                            <h4 className="text-[#4C4886] font-bold text-lg">Transparent Collaboration</h4>
                            <p className="text-[#AFAFAF]">
                                We Deliver Custom Software And SaaS Solutions that are Specially
                                Designed To Meet The Unique needs of your Business.
                            </p>
                        </div>
                        <div className="w-[90%] mx-auto text-center md:text-start mt-4 md:mt-0">
                            <h4 className="text-[#4C4886] font-bold text-lg">Clients Security</h4>
                            <p className="text-[#AFAFAF]">
                                We Deliver Custom Software And SaaS Solutions that are Specially
                                Designed To Meet The Unique needs of your Business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
