'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    // 1. states/hook variables
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);

    useEffect(() => {
    // Animate h1 (from right)
    gsap.from(h1Ref.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: h1Ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Animate h2 (from left)
    gsap.from(h2Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: h2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
        });
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="section-three w-full sm:h-[70vh] md:h-[130vh] bg-[#0A131C]">
            <div className="flex flex-col items-center justify-center pt-20 sm:pt-14">
                <div className="line w-20 md:w-42 h-1 bg-[#77CCF3]"></div>
                <h1 ref={h1Ref} className="text-lg md:text-2xl md:font-bold text-white">Our Work</h1>
                <h2 ref={h2Ref} className="md:text-3xl text-[#77CCF3] text-2xl font-bold md:font-extrabold">
                Portfolio
                </h2>
            </div>

            <div className='flex items-center justify-center flex-wrap sm:relative'>
                <div className='w-[80vw] sm:w-[24vw] md:w-[18vw] h-[20vh] sm:h-[30vh] md:h-[60vh] bg-amber-300 mt-3 overflow-hidden sm:absolute sm:top-0 sm:left-[6vw] cursor-pointer project-one'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image01.jpeg' alt='project one' />
                    <div className='overlay opacity-0 text-white flex flex-col items-end text-[.6vw]'>
                        <span className='pt-14 font-bold text-[.9vw] pe-[2.5vw]'>Printing Media</span>
                        <p className='pe-[1vw] text-green-400'>Short Detail Here</p>
                        <p className='w-[80%] pt-6'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                            been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
                <div className='w-[80vw] sm:w-[28vw] h-[20vh] sm:h-[16vh] md:h-[35vh] bg-amber-300 mt-3 sm:absolute sm:top-0 sm:left-[31%] md:left-[25.5%] cursor-pointer project-two'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image02.webp' alt='project two' />
                    <div className='overlay opacity-0'></div>
                </div>
                <div className='w-[80vw] sm:w-[34vw] md:w-[38.5vw] h-[20vh] sm:h-[30vh] md:h-[60vh] bg-amber-300 mt-3 sm:absolute sm:top-0 sm:right-[6vw] cursor-pointer project-three'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image03.webp' alt='project three' />
                    <div className='overlay opacity-0'></div>
                </div>
                <div className='w-[80vw] sm:w-[24vw] md:w-[18vw] h-[20vh] sm:h-[16vh] md:h-[36vh] bg-amber-300 mt-3 sm:absolute sm:top-[31vh] md:top-[62vh] sm:left-[6vw] cursor-pointer project-four'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image04.jpeg' alt='project four' />
                    <div className='overlay opacity-0'></div>
                </div>
                <div className='w-[80vw] sm:w-[28vw] h-[30vh] md:h-[61vh] bg-amber-300 mt-3 sm:absolute sm:top-[17vh] md:top-[37vh] sm:left-[31%] md:left-[25.5%] cursor-pointer project-five'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image05.webp' alt='project five' />
                    <div className='overlay opacity-0'></div>
                </div>
                <div className='w-[80vw] sm:w-[34vw] md:w-[38.5vw] h-[20vh] sm:h-[16vh] md:h-[36vh] bg-amber-300 mt-3 mb-3 sm:absolute sm:top-[31vh] md:top-[62vh] sm:right-[6vw] cursor-pointer project-six'>
                    <img className='w-[100%] h-[100%] object-cover' src='/img/SectionThree/image06.webp' alt='project six' />
                    <div className='overlay opacity-0'></div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;