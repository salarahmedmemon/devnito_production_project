'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SectionFour = () => {
    // 1. states/hook variables
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let ctx = gsap.context(() => {
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
        }, containerRef);



        return () => ctx.revert();
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div ref={containerRef} className="w-full h-[34vh] sm:h-[50vh] md:h-[90vh] bg-[#EEEEEE] overflow-hidden relative">
            
            {/* Right Circle */}
            <div className='w-[25vw] h-[25vw] rounded-full bg-[#B7D2EF] absolute top-[-8vw] right-[-10vw] p-[.1vw]'>
                <div className='w-full h-full bg-gradient-to-b from-[#E7EBEE] to-[#EAECEE] rounded-full'></div>
            </div>
            {/* Left Circle */}
            <div className='w-[45vw] h-[45vw] rounded-full bg-[#FFF] absolute bottom-[-17vw] left-[-10vw] p-[.2vw]'>
                <div className='w-full h-full bg-gradient-to-b from-[#F3F4F5] to-[#F0F0F0] rounded-full'></div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center justify-center pt-7 sm:pt-[7vw] relative">
                <div className="line w-28 sm:w-32 md:w-42 h-[.4vw] sm:h-[.2vw] bg-[#4C4886]"></div>
                <h1 ref={h1Ref} className="text-xl sm:text-2xl md:text-3xl md:font-semibold text-black">Our Clients</h1>
                <p ref={h2Ref} className="text-titghter text-center font-semibold text-[#444444] p-5 sm:-0 text-[3.4vw] sm:text-[2vw] md:text-[1.4vw] pt-3">We are ready to uplift your brand like many others in the past!</p>
            </div>

            <div className="w-[75%] mx-auto mt-[2vw] sm:mt-[8vw] md:mt-[5vw] overflow-hidden">
                {/* animate-slide */}
                <div className='w-full h-[30vw] sm:h-[14vw] md:h-[12vw] flex items-center'>
                    <div className="flex items-center gap-5 w-max animate-slide">
                    
                        {/* client1 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center 
                        '>
                            <img src='/img/SectionFour/accor.png' className='w-[40%]' />
                        </div>

                        {/* client2 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center 
                        '>
                            <img src='/img/SectionFour/naugespa.png' className='w-[40%]' />
                        </div>

                        {/* client3 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/jb.png' className='w-[40%]' />
                        </div>
                        
                        {/* client4 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/medisan.png' className='w-[40%]' />
                        </div>

                        {/* client5 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/ghol.png' className='w-[40%]' />
                        </div>

                        {/* client6 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[10vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/crosstex.png' className='w-[40%]' />
                        </div>

                        {/* client1 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/accor.png' className='w-[40%]' />
                        </div>

                        {/* client2 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/naugespa.png' className='w-[40%]' />
                        </div>

                        {/* client3 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/jb.png' className='w-[40%]' />
                        </div>
                        
                        {/* client4 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/medisan.png' className='w-[40%]' />
                        </div>

                        {/* client5 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/ghol.png' className='w-[40%]' />
                        </div>

                        {/* client6 */}
                        <div className='w-[40vw] bg-[#F5F5F5] sm:w-[20vw] md:w-[12vw] h-[8vh] sm:h-[15vh] md:h-[20vh] flex items-center justify-center '>
                            <img src='/img/SectionFour/crosstex.png' className='w-[40%]' />
                        </div>
                    </div>
                </div>
            </div>

            <button ref={btnRef} className='w-[34vw] sm:w-[20vw] md:w-[15vw] h-[4vh] sm:h-[5vh] md:h-[8vh] bg-[#4C4886] text-white rounded mt-[4vw] block mx-auto cursor-pointer text-[4vw] sm:text-[1.8vw] md:text-[1.4vw]'>Read More</button>
        </div>
    )
};

export default SectionFour;