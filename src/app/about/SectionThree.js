import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  // 1. states/hook variables
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title animation
    gsap.from(".section-three-title", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section-three-title",
        start: "top 80%",
      },
    });

    // Projects animation alternating left/right
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -150 : 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
    }, sectionRef);

    return () => ctx.revert();
  },[]);

  // useEffect(() => {
  //   gsap.from(".section-three-title", {
  //     y: -100,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".section-three-title",
  //       start: "top 80%",
  //     },
  //   });

  //   gsap.utils.toArray(".project-card").forEach((card, i) => {
  //     gsap.from(card, {
  //       x: i % 2 === 0 ? -150 : 150,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: card,
  //         start: "top 85%",
  //       },
  //     });
  //   });
  // }, []);

  const projects = [
    { img: "/img/AboutPage/SectionThree/image.png", name: "Junaid Qureshi", subname: "Founded & CEO" },
    { img: "/img/AboutPage/SectionThree/image02.png", name: "Maroof Qureshi", subname: "Frontend Developer Intern" },
    { img: "/img/AboutPage/SectionThree/image03.png", name: "Abdullah Al Tayeh", submenu: "Sales Executive - UAE" },
    { img: "/img/AboutPage/SectionThree/image04.png", name: "Zulfiqar Ali Abro", subname: "Sales Executive - UAE" },
    { img: "/img/AboutPage/SectionThree/image05.png", name: "Adnan Qurban", subname: "Sales Executive - UAE" },
    { img: "/img/AboutPage/SectionThree/image06.png", name: "Iqra Qureshi", subname: "UI/UX Desginer | Graphic Designer Intern" },
  ];

  return (
    <div ref={sectionRef} className="w-full sm:min-h-[70vh] md:min-h-screen bg-[#0A131C] p-5 md:p-20 overflow-hidden">
      <div className="w-full h-full section-three-bgImage pt-2 sm:pt-4 md:pt-6">
        {/* TITLE */}
        <div className="relative section-three-title">
          <div className="w-[59vw] sm:w-[40vw] md:w-[20vw] h-1 bg-[#71C1E6] absolute left-[15.7%] sm:left-[28.5%] md:left-[38.5%] top-[5vw] sm:top-[20%] md:top-[18%]"></div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pt-4 sm:pt-6 text-white">
            Meet The Best
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
            Team Ever
          </h2>
        </div>

        {/* PROJECTS */}
        <div className="relative w-full h-full mt-4 sm:mt-6 md:mt-10 p-6 flex flex-col sm:flex-row justify-between flex-wrap gap-4 sm:gap-10">
          <img
            src="/img/AboutPage/SectionThree/rightLogo.png"
            className="absolute top-[-42vw] sm:top-[-24vw] md:top-[-16vw] right-[-2.5vw] w-[15vw] sm:w-[10vw] md:w-[6vw]"
          />
          <img
            src="/img/AboutPage/SectionThree/leftLogo.png"
            className="w-[15vw] sm:w-[10vw] md:w-[7.4vw] absolute bottom-[-2.3vw] left-[-2.8vw]"
          />

          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group w-[100%] sm:w-[40vw] md:w-[23vw] h-[60vw] sm:h-[30vw] md:h-[22vw] gradient-border rounded-lg relative overflow-hidden flex items-center justify-center p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={project.img}
                className="rounded-lg w-full h-full object-cover transition-all duration-500 group-hover:opacity-30"
              />
              {/* OVERLAY TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {project.name}
                </span>
                <span className="text-white text-center text-[3vw] sm:text-lg font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {project.subname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
