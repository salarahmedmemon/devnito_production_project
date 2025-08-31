'use client';

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef();
  const menuRef = useRef();

  // Refs for all link list items
  const desktopLinkRefs = useRef([]);
  const mobileLinkRefs = useRef([]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/casestudies", label: "Case Studies" },
    { href: "/careers", label: "Careers Blog" },
    { href: "/details", label: "Details" },
    { href: "/faq", label: "FAQ'S" },
  ];

  // Animate underlines on hover
  useLayoutEffect(() => {
    const allRefs = [...desktopLinkRefs.current, ...mobileLinkRefs.current];

    allRefs.forEach((el) => {
      if (!el) return;
      const underline = el.querySelector(".underline");

      el.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: "0%",
          duration: 0.4,
          ease: "power2.in",
        });
      });
    });
  }, []);

  // Animate header on load
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Animate mobile menu toggle
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        x: -15,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-120%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={headerRef}
      className="absolute top-0 right-0 w-[95vw] md:w-[85vw] h-12 p-4 md:h-16 bg-white float-end md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 mt-3 md:mt-10 rounded-tl-xl rounded-bl-xl md:rounded-xl flex items-center justify-between z-50"
    >
      {/* Mobile Menu Toggle */}
      <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
        <img className="w-5" src="/img/hamburger.png" alt="Menu" />
        <div
            ref={menuRef}
            className="absolute top-15 left-0 bg-white z-[999] w-[40vw] sm:w-[30vw] sm:left-[-3%] h-[35vh] sm:h-[45vh] shadow-xl"
            style={{ transform: "translateX(-100%)", opacity: 0 }}
          >

          <ul className="flex flex-col items-start gap-3 p-5 text-[4.5vw] sm:text-[2.8vw]">
            {links.map(({ href, label }, index) => (
              <li
                key={href}
                ref={(el) => (mobileLinkRefs.current[index] = el)}
                className="relative cursor-pointer text-gray-700 hover:-translate-y-1 py-1 overflow-visible"
              >
                <Link href={href} className="relative z-10 inline-block">
                  {label}
                </Link>
                <span className="underline absolute left-0 bottom-0 h-[2px] w-0 bg-black z-0 transition-all"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div>
        <img className="w-20 md:w-30 cursor-pointer" src="/img/mobileLogo.png" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }, index) => (
            <li
              key={href}
              ref={(el) => (desktopLinkRefs.current[index] = el)}
              className="relative cursor-pointer text-gray-700 hover:-translate-y-1 py-1 overflow-visible"
            >
              <Link href={href} className="relative z-10 inline-block">
                {label}
              </Link>
              <span className="underline absolute bottom-0 left-0 h-[2px] w-0 bg-black z-0 transition-all"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Buttons */}
      <div className="header-btns flex items-center gap-3">
        <button className="w-8 h-8 bg-[#4C4886] flex items-center justify-center rounded rotate-once cursor-pointer">
          <img className="w-3.5" src="/img/whatsapp.png" alt="WhatsApp" />
        </button>
        <button className="w-8 h-8 bg-[#4C4886] flex items-center justify-center rounded rotate-once cursor-pointer">
          <img className="w-3.5" src="/img/gmail.png" alt="Gmail" />
        </button>
      </div>
    </div>
  );
};

export default Header;
