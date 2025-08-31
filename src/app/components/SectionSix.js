'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    q: 'Is NoCode the future of the web ?',
    a1: 'NoCode tools are growing fast and democratizing app building for non-developers.',
    a2: 'They are great for prototypes and MVPs but traditional dev still needed for complex systems.',
  },
  {
    id: 2,
    q: 'How secure is NoCode?',
    a1: 'Security depends on the platform — always check provider guarantees and best practices.',
    a2: 'For sensitive systems consider custom development or audited NoCode platforms.',
  },
  {
    id: 3,
    q: 'Can NoCode scale for businesses?',
    a1: 'Many NoCode platforms can scale for small-to-medium needs, but architecture matters.',
    a2: 'For very large or highly-custom use-cases, hybrid or custom solutions are often used.',
  },
  {
    id: 4,
    q: 'How fast can I build with NoCode?',
    a1: 'You can iterate and launch prototypes in days or weeks instead of months.',
    a2: 'Time-to-market is one of the biggest benefits of NoCode for startups and teams.',
  },
  {
    id: 5,
    q: 'Will NoCode replace developers?',
    a1: 'No. It lowers the barrier for many use-cases but developers remain crucial for complex logic.',
    a2: 'Developers and NoCode together enable faster, more maintainable solutions.',
  },
  {
    id: 6,
    q: 'Can NoCode scale for businesses?',
    a1: 'Many NoCode platforms can scale for small-to-medium needs, but architecture matters.',
    a2: 'For very large or highly-custom use-cases, hybrid or custom solutions are often used.',
  },
];

function FAQItem({ q, a1, a2, id }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  // Set initial hidden state on mount
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    content.style.height = '0px';
    content.style.opacity = '0';
    content.style.visibility = 'hidden';
  }, []);

  const toggle = () => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    if (!open) {
      // OPEN
      content.style.visibility = 'visible';
      content.style.height = 'auto';
      const fullHeight = content.scrollHeight;
      content.style.height = '0px';

      gsap.to(content, {
        height: fullHeight,
        opacity: 1,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          content.style.height = 'auto';
        },
      });

      // icon rotate then change to minus
      gsap.to(icon, { rotate: 90, duration: 0.18, ease: 'power2.out' });
      setTimeout(() => {
        icon.textContent = '−';
        gsap.to(icon, { rotate: 0, duration: 0.18, ease: 'power2.out' });
      }, 160);
    } else {
      // CLOSE
      const currentHeight = content.getBoundingClientRect().height;
      content.style.height = `${currentHeight}px`; // freeze height for animation

      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.38,
        ease: 'power2.in',
        onComplete: () => {
          content.style.visibility = 'hidden';
        },
      });

      gsap.to(icon, { rotate: -10, duration: 0.14, ease: 'power2.in' });
      setTimeout(() => {
        icon.textContent = '+';
        gsap.to(icon, { rotate: 0, duration: 0.18, ease: 'power2.out' });
      }, 140);
    }

    setOpen((s) => !s);
  };

  return (
    <div className="w-full gradient-border sm:w-[45%] p-[.4vw] sm:p-[.2vw] md:p-[.1vw] mt-[2vw] rounded-lg">
      <div className="w-full bg-[#1C2B3B] rounded-lg text-white px-8 md:px-14 py-3 md:py-6 flex flex-col justify-center transition-all duration-300">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[4.2vw] sm:text-[1rem] md:text-[1.4rem]">{q}</p>
          <button
            onClick={toggle}
            aria-expanded={open}
            aria-controls={`faq-content-${id}`}
            className="w-7 h-7 md:w-8 md:h-8 bg-white text-[#767C9E] text-[2rem] pb-2 flex items-center justify-center rounded cursor-pointer"
          >
            <span ref={iconRef}>+</span>
          </button>
        </div>

        {/* Hidden Content inside same box */}
        <div
          id={`faq-content-${id}`}
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0, visibility: 'hidden' }}
        >
          <p className="mt-3 text-sm">{a1}</p>
          <p className="mt-2 text-sm">{a2}</p>
        </div>
      </div>
    </div>
  );
}

const SectionSix = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const iconsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h1 (from right)
      if (h1Ref.current) {
        gsap.from(h1Ref.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: h1Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Animate h2 (from left)
      if (h2Ref.current) {
        gsap.from(h2Ref.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Icons rotate in when the section is reached
      if (iconsRef.current) {
        const icons = iconsRef.current.querySelectorAll('.social-icon');

        gsap.fromTo(
          icons,
          { rotation: 360, scale: 0, opacity: 0 },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Add hover animation (plays once each hover)
        const handlers = [];
        icons.forEach((icon) => {
          const handler = () => {
            // animate a single spin + small scale pop, then settle back
            gsap.killTweensOf(icon); // ensure no conflicting tweens
            gsap.fromTo(
              icon,
              { rotation: 0, scale: 1 },
              {
                rotation: 360,
                scale: 1.12,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                  gsap.to(icon, { scale: 1, duration: 0.15, ease: 'power2.out' });
                },
              }
            );
          };
          icon.addEventListener('mouseenter', handler);
          handlers.push({ icon, handler });
        });

        // store handlers on the DOM node so we can clean up later via ctx cleanup
        iconsRef.current.__hoverHandlers = handlers;
      }
    }, sectionRef);

    return () => {
      // cleanup
      // remove added event listeners
      const handlers = iconsRef.current?.__hoverHandlers;
      if (handlers && Array.isArray(handlers)) {
        handlers.forEach(({ icon, handler }) => {
          try {
            icon.removeEventListener('mouseenter', handler);
          } catch (e) {
            /* ignore */
          }
        });
      }
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#000C1B] section-six">
      <div className="w-full h-[12vh] md:h-[18vh] bg-white">
        <div className="flex flex-col items-center sm:items-start sm:ps-5 md:ps-[6vw] justify-center pt-4">
          <div className="line w-12 sm:w-12 md:w-22 h-[.8vw] sm:h-[.2vw] bg-[#4C4886]"></div>
          <h1 ref={h1Ref} className="text-lg md:text-[2vw] leading-[8vw] sm:leading-[3vw] font-semibold">FAQ's</h1>
          <h2 ref={h2Ref} className="text-[#4C4886] sm:text-lg md:text-3xl font-bold md:font-bold">Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="w-full p-5">
        <div className="flex items-center justify-center sm:gap-4 flex-wrap mt-[6vw] mb-[3vw]">
          {faqs.map((f) => (
            <FAQItem key={f.id} id={f.id} q={f.q} a1={f.a1} a2={f.a2} />
          ))}
        </div>
      </div>

      <div className="w-full h-[.4vw] sm:h-[.1vw] gradient-border mt-6"></div>

      <Footer />
    </section>
  );
};

export default SectionSix;
