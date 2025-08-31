'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.context for scoping
    const ctx = gsap.context(() => {
      // Animate h1 (from right → left)
      gsap.fromTo(
        h1Ref.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: h1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate h2 (from left → right)
      gsap.fromTo(
        h2Ref.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: h2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Random circle animation
      let activeIndex = null;
      const animateRandomCircle = () => {
        // hide previous
        if (activeIndex !== null && circleRefs.current[activeIndex]) {
          gsap.to(circleRefs.current[activeIndex], {
            scale: 0,
            opacity: 0,
            duration: 0.4,
          });
        }

        // pick new random index
        const allCircles = circleRefs.current.filter(Boolean);
        const randomIndex = Math.floor(Math.random() * allCircles.length);
        activeIndex = randomIndex;

        // animate new circle
        if (circleRefs.current[randomIndex]) {
          gsap.fromTo(
            circleRefs.current[randomIndex],
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'back.out(1.7)',
            }
          );
        }
      };

      const interval = setInterval(animateRandomCircle, 2500);
      return () => clearInterval(interval);
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="section-three w-full sm:h-[70vh] md:h-[130vh] bg-[#0A131C]"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center pt-20 sm:pt-14">
        <div className="line w-20 md:w-42 h-1 bg-[#77CCF3]"></div>
        <h1
          ref={h1Ref}
          className="text-lg md:text-2xl md:font-bold text-white opacity-0"
        >
          Our Work
        </h1>
        <h2
          ref={h2Ref}
          className="md:text-3xl text-[#77CCF3] text-2xl font-bold md:font-extrabold opacity-0"
        >
          Portfolio
        </h2>
      </div>

      {/* Projects grid */}
      <div className="flex items-center justify-center flex-wrap relative">
        {/* project-one */}
        <div className="w-[80vw] sm:w-[24vw] md:w-[18vw] h-[20vh] sm:h-[30vh] md:h-[60vh] mt-3 overflow-hidden sm:absolute sm:top-0 sm:left-[6vw] cursor-pointer project-one">
          <div
            ref={(el) => (circleRefs.current[0] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image01.jpeg"
            alt="project one"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[10vh] font-bold text-[1vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[.7vw]">
              Short Detail Here
            </p>
            <p className="w-[80%] pt-[4vh] ms-[.8vw] text-[.7vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.7vw] mt-[7vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* project-two */}
        <div className="w-[80vw] sm:w-[28vw] h-[20vh] sm:h-[16vh] md:h-[35vh] mt-3 sm:absolute sm:top-0 sm:left-[31%] md:left-[25.5%] cursor-pointer project-two">
          <div
            ref={(el) => (circleRefs.current[1] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image02.webp"
            alt="project two"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[10vh] font-bold text-[1vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[.7vw]">
              Short Detail Here
            </p>
            <p className="w-[80%] pt-[4vh] me-[1vw] text-[.7vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.7vw] mt-[.6vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* project-three */}
        <div className="w-[80vw] sm:w-[34vw] md:w-[38.5vw] h-[20vh] sm:h-[30vh] md:h-[60vh] mt-3 sm:absolute sm:top-0 sm:right-[6vw] cursor-pointer project-three">
          <div
            ref={(el) => (circleRefs.current[2] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image03.webp"
            alt="project three"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[10vh] font-bold text-[2vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[1.2vw]">
              Short Detail Here
            </p>
            <p className="w-[80%] pt-[4vh] me-[1vw] text-[1vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.9vw] mt-[3vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* project-four */}
        <div className="w-[80vw] sm:w-[24vw] md:w-[18vw] h-[20vh] sm:h-[16vh] md:h-[36vh] mt-3 sm:absolute sm:top-[31vh] md:top-[62vh] sm:left-[6vw] cursor-pointer project-four">
          <div
            ref={(el) => (circleRefs.current[3] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image04.jpeg"
            alt="project four"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[5vh] font-bold text-[1vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[.7vw]">
              Short Detail Here
            </p>
            <p className="w-[80%] pt-[2vh] text-[.7vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.7vw] mt-[1vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* project-five */}
        <div className="w-[80vw] sm:w-[28vw] h-[30vh] md:h-[61vh] mt-3 sm:absolute sm:top-[17vh] md:top-[37vh] sm:left-[31%] md:left-[25.5%] cursor-pointer project-five">
          <div
            ref={(el) => (circleRefs.current[4] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image05.webp"
            alt="project five"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[10vh] font-bold text-[2vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[1.2vw]">
              Short Detail Here
            </p>
            <p className="w-[80%] pt-[4vh] me-[1vw] text-[1vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.9vw] mt-[3vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* project-six */}
        <div className="w-[80vw] sm:w-[34vw] md:w-[38.5vw] h-[20vh] sm:h-[16vh] md:h-[36vh] mt-3 mb-3 sm:absolute sm:top-[31vh] md:top-[62vh] sm:right-[6vw] cursor-pointer project-six">
          <div
            ref={(el) => (circleRefs.current[5] = el)}
            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
          >
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
          
          <img
            className="w-[100%] h-[100%] object-cover"
            src="/img/SectionThree/image06.webp"
            alt="project six"
          />
          <div className="overlay opacity-0 text-white flex flex-col items-end text-[.6vw]">
            <span className="mt-[4vh] font-bold text-[1vw] pe-[2.5vw]">
              Printing Media
            </span>
            <p className="pe-[1vw] text-green-400 text-[.7vw]">
              Short Detail Here
            </p>
            <p className="w-[75%] pt-[3vh] ms-[1vw] text-[.7vw]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="w-[100%] flex items-center justify-between text-[.7vw] mt-[2vh] p-[1vw]">
              <a href="#" className="float-left">
                Visit Main Link
              </a>
              <a href="#" className="float-right">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
