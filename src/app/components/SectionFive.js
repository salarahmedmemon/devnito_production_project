'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const counters = [
  { id: 'clients', label: 'Total Clients', value: 2000, suffix: '+' },
  { id: 'revenue', label: 'Total Revenue', value: 2000, suffix: '+' },
  { id: 'orders', label: 'Total Orders', value: 25000, suffix: '+' },
  { id: 'artists', label: 'Artists', value: 12000, suffix: '+' },
  { id: 'eth', label: 'ETH', value: 3.5, decimals: 1, suffix: '' }, // 3.5 ETH
];

export default function SectionFive() {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const counterRefs = useRef({});

  // small helper to format numbers:
  const formatNumber = (num, decimals = 0) => {
    if (decimals > 0) {
      return Number(num).toFixed(decimals);
    }
    // show integer with commas
    return Math.floor(num).toLocaleString();
  };

  useEffect(() => {
    // use gsap.context for scoped selectors & cleanup
    const ctx = gsap.context(() => {
      // Animate H1 from right when the section enters viewport
      gsap.from(h1Ref.current, {
        x: 100,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // when top of section hits 80% of viewport
          toggleActions: 'play none none none',
        },
      });

      // Animate counters when the section enters viewport
      counters.forEach((c) => {
        const el = counterRefs.current[c.id];
        if (!el) return;

        // starting object for gsap
        const obj = { value: 0 };

        gsap.to(obj, {
          value: c.value,
          duration: 1.6,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true, // run once
          },
          onUpdate: () => {
            // Render with decimals if requested, otherwise integer with commas
            const decimals = c.decimals ?? 0;
            el.textContent = formatNumber(obj.value, decimals) + (c.suffix || '');
          },
          onComplete: () => {
            // ensure final exact value
            const decimals = c.decimals ?? 0;
            el.textContent = formatNumber(c.value, decimals) + (c.suffix || '');
          },
        });
      });
    }, sectionRef);

    // Cleanup on unmount
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative bg-[#0A1119] py-10 sm:py-16 overflow-hidden">
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[-30%] sm:top-[-14%] left-[0%] sm:left-[38%] md:left-[42%] bg-[#FA1AC2] blur-circle'></div>
      <div className="flex flex-col items-center justify-center">
        <div className="line w-[55vw] sm:w-[34vw] md:w-80 h-[.4vw] sm:h-[.2vw] md:h-[.1vw] bg-white"></div>
        <h1 ref={h1Ref} className="text-[5vw] sm:text-[3vw] md:text-[2vw] md:font-semibold text-white">Progress &amp; its Indicators</h1>
      </div>

      <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-8 px-4">
        {counters.map((c) => (
          <div
            key={c.id}
            className="gradient-border p-[.4vw] sm:p-[.2vw] md:p-[.1vw] text-white w-[40vw] sm:w-[20vw] md:w-[10vw] h-[8vh] md:h-[12vh] flex flex-col items-center justify-center rounded-lg"
          >
            <div className='bg-[#0A121A] w-[100%] h-[100%] flex flex-col items-center justify-center rounded-lg'>
                <span className="text-xs sm:text-sm">{c.label}</span>
                <span
                ref={(el) => (counterRefs.current[c.id] = el)}
                className="font-bold text-lg"
                aria-live="polite"
                >
                {c.decimals ? c.value.toFixed(c.decimals) : Math.floor(c.value).toLocaleString()}
                {c.suffix ?? ''}
                </span>
            </div>
          </div>
        ))}

        {/* Example progress bar for ETH item (optional visual) */}
        <div className="gradient-border text-white w-[40vw] sm:w-[20vw] md:w-[10vw] h-[8vh] md:h-[12vh] rounded-lg p-[.4vw] sm:p-[.2vw] md:p-[.1vw]">
          <div className='w-[100%] h-[100%] bg-[#0A121A] flex flex-col items-center justify-center rounded-lg'>
            <span className="text-xs sm:text-sm">Network</span>
            <div className="w-[18vw] sm:w-[10vw] md:w-[5vw] h-[2vh] rounded" />
                <img src='/img/SectionThree/network.png' className='w-[90%] h-[100%] object-contain' />
            </div>
        </div>
      </div>
    </section>
  );
}
