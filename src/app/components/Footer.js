import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // 1. states/hook variables
  const footerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll animation for footer elements
      gsap.from(footerRef.current.querySelectorAll(".fade-in-up"), {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Hover rotation for icons
      iconRefs.current.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { rotate: "+=360", duration: 0.6, ease: "power2.inOut" });
        });
      });
    }, footerRef);

    return () => ctx.revert();
    
  }, []);

  // bg-[#000C1B] text-white

  return (
    <div ref={footerRef} className="w-full py-1 bg-[#000C1B] relative">
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[30%] left-[0%] bg-[#FA1AC2] blur-circle'></div>
    
      <div className="w-full h-full mt-5 flex items-center justify-center flex-col pb-10">

        {/* Logo */}
        <img
          src="/img/SectionSixImages/footerLogo.png"
          className="fade-in-up w-20 sm:w-30 md:w-50"
          alt="logo"
        />

        {/* Navigation */}
        <ul className="fade-in-up text-white flex items-center justify-center text-[3vw] md:text-[1.2vw] gap-2 md:gap-6 text-center p-2 sm:mt-2">
          <li><a>IT Resource</a></li>
          <li><a>UI/UX Design</a></li>
          <li><a>Web Animation</a></li>
          <li><a>Digital Marketing</a></li>
          <li><a>Video Animation</a></li>
        </ul>

        {/* Social Icons */}
        <div className="fade-in-up mt-2 sm:mt-3">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {[
              { src: "/img/SectionSixImages/twitter.png", alt: "twitter" },
              { src: "/img/SectionSixImages/facebook.png", alt: "facebook" },
              { src: "/img/SectionSixImages/linkedin.png", alt: "linkedin" }
            ].map((icon, idx) => (
              <div
                key={idx}
                ref={(el) => (iconRefs.current[idx] = el)}
                className="w-6 sm:w-8 h-6 sm:h-8 rounded bg-amber-50 flex items-center justify-center social-icon overflow-hidden cursor-pointer"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-[70%] h-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="fade-in-up w-full h-[.2vh] bg-white mt-6"></div>

        {/* Footer Bottom */}
        <div className="fade-in-up text-white text-[3.2vw] sm:text-[2vw] md:text-[1.2vw] flex items-center justify-center gap-2 mt-4 sm:mt-7 md:mt-8">
          <span>&copy; Copyright Reserved 2025</span>
          <span>|</span>
          <span>Terms &amp; Services</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
