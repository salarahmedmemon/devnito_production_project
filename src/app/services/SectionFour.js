import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const barsRef = useRef([]);

    useEffect(() => {
        // Content div (from left)
        gsap.fromTo(
            contentRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
            }
        );

        // Image div (from right)
        gsap.fromTo(
            imageRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                },
            }
        );

        // Progress bars animation
        barsRef.current.forEach((bar) => {
            const finalWidth = bar.getAttribute("data-width");

            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width: finalWidth,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-[#EEEEEE] relative overflow-hidden">
            {/* Background circles */}
            <div className="hidden sm:flex w-[30vw] h-[30vw] rounded-full p-1 bg-[#BFD6EF] absolute top-[-12vw] right-[-12vw] items-center justify-center">
                <div className="w-full h-full bg-[#E8EBEE] rounded-full"></div>
            </div>
            <div className="hidden sm:flex w-[40vw] h-[40vw] rounded-full p-1 bg-[#FFFFFF] absolute bottom-[-10vw] left-[-12vw] items-center justify-center">
                <div className="w-full h-full bg-[#E8EBEE] rounded-full"></div>
            </div>

            {/* Left Content */}
            <div
                ref={contentRef}
                className="z-1000 w-[100%] sm:w-[75%] md:w-[60%] h-[53vh] sm:h-[65vh] md:h-[100vh] pt-0 p-4 sm:pt-6 md:p-20 text-center md:text-start"
            >
                <h3 className="text-[4.5vw] sm:text-[3vw] md:text-lg">About Our Services</h3>
                <h1 className="text-[#4C4886] text-[6vw] sm:text-[4vw] md:text-[2.6vw] font-semibold">
                    Providing Your Business With A Quality IT Service Is Our Passion
                </h1>
                <p className="text-gray-500 mt-[3vw] sm:mt-[2vw] text-[5vw] sm:text-lg w-[95%]">
                    lorem ipsum is simply dummy text of the printing and typesetting
                    industry. lorem ipsum has been the industry's standard dummy text
                    over since the 1500s.
                </p>

                {/* Progress Bar 1 */}
                <div className="w-[100%] md:w-[35vw] mt-[3vw] sm:mt-[2vw] mx-auto md:mx-0">
                    <div className="flex items-center justify-between">
                        <span>consulting</span>
                        <span>90%</span>
                    </div>
                    <div className="w-[100%] h-[2vh] bg-[#AAAAAA] mt-2 rounded-full overflow-hidden">
                        <div
                            ref={(el) => (barsRef.current[0] = el)}
                            data-width="90%"
                            className="h-full bg-[#4C4886] rounded-full"
                        ></div>
                    </div>
                </div>

                {/* Progress Bar 2 */}
                <div className="w-[100%] md:w-[35vw] mt-[1vw] mx-auto md:mx-0">
                    <div className="flex items-center justify-between">
                        <span>cloud solution</span>
                        <span>75%</span>
                    </div>
                    <div className="w-[100%] h-[2vh] bg-[#AAAAAA] mt-2 rounded-full overflow-hidden">
                        <div
                            ref={(el) => (barsRef.current[1] = el)}
                            data-width="75%"
                            className="h-full bg-[#4C4886] rounded-full"
                        ></div>
                    </div>
                </div>

                {/* Progress Bar 3 */}
                <div className="w-[100%] md:w-[35vw] mt-[1vw] mx-auto md:mx-0">
                    <div className="flex items-center justify-between">
                        <span>it service</span>
                        <span>100%</span>
                    </div>
                    <div className="w-[100%] h-[2vh] bg-[#AAAAAA] mt-2 rounded-full overflow-hidden">
                        <div
                            ref={(el) => (barsRef.current[2] = el)}
                            data-width="100%"
                            className="h-full bg-[#4C4886] rounded-full"
                        ></div>
                    </div>
                </div>

                <button className="bg-[#4C4886] text-white mt-10 w-[100%] md:w-[20%] px-5 py-[.6vw] rounded">
                    learn more
                </button>
            </div>

            {/* Right Content (Image with Overlay) */}
            <div
                ref={imageRef}
                className="z-1000 w-[100%] md:w-[40%] h-[30vh] md:h-[100vh] flex items-center justify-center"
            >
                <div className="w-[70%] sm:w-[40%] md:w-[70%] relative rounded-lg overflow-hidden group">
                    <img
                        src="/img/ServicesPage/SectionFour/image01.jpeg"
                        className="w-full h-full rounded-lg object-cover"
                        alt="Service"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-xl sm:text-2xl font-semibold">
                            Web Developer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
