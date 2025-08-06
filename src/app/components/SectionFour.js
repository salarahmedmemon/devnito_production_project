'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SectionFour = () => {
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

    const btnRef = useRef(null);

    useEffect(() => {
        gsap.from(btnRef.current, {
        x: 200, // start 200px to the right
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: btnRef.current,
            start: 'top 80%', // when button enters viewport
        },
        });
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full h-[45vh] sm:h-[50vh] md:h-[90vh] bg-[#EEEEEE] overflow-hidden">
            <div className="flex flex-col items-center justify-center pt-10 sm:pt-14 relative">
                <img src='/img/SectionFour/rightCircleImage.png' className='w-[30vw] sm:w-[20vw] md:w-[16vw] absolute top-[-20%] sm:top-[-30%] md:top-[-50%] right-0' />
                <img src='/img/SectionFour/leftCircleImage.png' className='w-[40vw] md:w-[35vw] absolute bottom-[-200%] sm:bottom-[-280%] md:bottom-[-500%] left-0' />
                
                <div className="line w-20 sm:w-25 md:w-42 h-1 bg-[#09278b]"></div>
                <h1 ref={h1Ref} className="text-lg sm:text-xl md:text-3xl md:font-bold text-black">Our Clients</h1>
                <p ref={h2Ref} className="text-titghter text-center pt-5">We are ready to uplift your brand like many others in the past!</p>
            </div>

            <div className="w-full overflow-hidden mt-8">
                 <div className="flex items-center gap-5 animate-slide w-max">
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh]  bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw] h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                    <div className='w-[40vw] sm:w-[20vw] md:w-[16vw]s h-[10vh] sm:h-[15vh] md:h-[20vh] bg-red-600'></div>
                 </div>
            </div>

            <button ref={btnRef} className='w-[34vw] sm:w-[20vw] md:w-[15vw] h-[5vh] md:h-[8vh] bg-[#4C4886] text-white rounded mt-6 block mx-auto cursor-pointer'>Read More</button>
        </div>
    )
};

export default SectionFour;