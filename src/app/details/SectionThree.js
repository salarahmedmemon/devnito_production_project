import Link from "next/link";
import Maq from "./Maq";

const SectionThree = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full h-[440vh] sm:h-[280vh] md:h-[340vh] bg-[#0A131C] relative">
            <div className="image w-full sm:w-[60vw] h-[40vh] absolute top-[10vw] p-4 sm:p-0 left-0 sm:left-[5vw] text-white">
                <img src="/img/CaseStudies/SectionThree/image01.png" className="border-1 border-[#423D4C] rounded-lg" />
                <h1 className="text-[#77CCF3] text-[2rem] sm:text-[2.2rem] font-semibold">Information Security Services We Offer</h1>
                <p className="w-[100%] sm:w-[90%] mt-2">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially uncharged. It was popularized in the 1960s with the release of
                    Letraset sheets containing lorem ipsum passages, and more recently with desktop publishing
                    software like aldus pagemaker including version of Lorem ipsum. 
                </p>

                <p className="w-[90%] mt-5">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. 
                </p>

                <div className="w-full sm:w-[92%] mt-5 sm:flex gap-5">
                    <img src="/img/CaseStudies/SectionThree/image02.png" className="w-full sm:w-[50%] border-1 border-[#423D4C] rounded" />
                    <img src="/img/CaseStudies/SectionThree/image03.png" className="w-full mt-2 sm:mt-0 sm:w-[50%] border-1 border-[#423D4C] rounded-lg" />
                </div>

                <p className="w-[90%] mt-5">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. 
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. 
                </p>

                <p className="w-[90%] mt-5">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    ipsum has been the industry's standard text ever since the 1500s. When an unknown
                    printer took a gallery of type and scrambled it to make a type specimen book. 
                </p>

                <div className="w-[120%] md:w-[85%] mt-8 flex flex-wrap items-center justify-between gap-2">
                    <div className="w-[90%] sm:w-[49%] md:w-[48%] text-[#77CCF3] flex items-center justify-between gap-5">
                        <span className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] flex font-semibold">01 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] font-semibold">Latest Technologies</h1>
                            <p className="text-white text-[4vw] sm:text-[1.6vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] sm:w-[49%] md:w-[48%] text-[#77CCF3] flex items-center justify-between gap-5">
                        <span className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] flex font-semibold">02 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] font-semibold">Unique Solutions</h1>
                            <p className="text-white text-[4vw] sm:text-[1.6vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] sm:w-[49%] md:w-[48%] text-[#77CCF3] flex items-center justify-between gap-5">
                        <span className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] flex font-semibold">03 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] font-semibold">Powerful Strategies</h1>
                            <p className="text-white text-[4vw] sm:text-[1.6vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] sm:w-[49%] md:w-[48%] text-[#77CCF3] flex items-center justify-between gap-5">
                        <span className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] flex font-semibold">04 <b className="text-white" >.</b> </span>
                        <div className="flex flex-col">
                            <h1 className="text-[6vw] sm:text-[3vw] md:text-[1.6vw] font-semibold">Deliver Just On Time</h1>
                            <p className="text-white text-[4vw] sm:text-[1.6vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting
                                indutsry.
                            </p>
                        </div>
                    </div>
                </div>

                <Maq />
                
            </div>

            <div className="ListOfServices w-[90%] sm:w-[28vw] md:w-[32vw] border-1 border-[#423D4C] absolute top-[84%] sm:top-[10vw] left-[5vw] sm:right-[5vw] p-4 rounded-lg">
                <h1 className="text-white text-[1.4rem]">List of Services</h1>
                <div className="w-[100%] h-[10%] bg-[#042A48] mt-8 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/wd.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">Web Development</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/dm.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">Digital Marketing</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/ma.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">Mobile App</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/uiux.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">UI/UX Designing</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/ecommerce.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">Ecommerce</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/db.png" className="h-[4vw] md:h-[2vw] md:w-[8%]" />
                    <span className="text-white">Digital Branding</span>
                </div>
            </div>

            <div className="ListOfServices text-white w-[90%] sm:w-[28vw] md:w-[32vw] border-1 border-[#423D4C] absolute top-[98%] sm:top-[90vw] md:top-[46vw] left-[5vw] sm:right-[5vw] p-4 rounded-lg">
                <h1 className="text-[1.2rem] md:text-[1.4rem]">Download Assets</h1>
                <p className="text-[.7rem] md:text-[.8rem] mt-2">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem ipsum has been the industry's standard dummy text ever since the
                    1500s.
                </p>
                <div className="w-[100%] h-[10%] bg-[#042A48] mt-8 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/servicerepo.png" className="w-[4vw] md:w-[8%]" />
                    <span className="text-white">Service Report</span>
                </div>

                <div className="w-[100%] h-[10%] bg-[#042A48] mt-4 rounded p-2 flex items-center gap-5">
                    <img src="/img/CaseStudies/SectionThree/servicerepo.png" className="w-[4vw] md:w-[8%]" />
                    <span className="text-white">All Services</span>
                </div>
            </div>
{/* 
            <div className="ListOfServices text-white w-[28vw] md:w-[32vw] border-1 border-[#423D4C] absolute top-[142vw] md:top-[70vw] right-[5vw] p-4 rounded-lg">
                <h1 className="text-[1.4rem]">Follow Us On</h1>
                <div className="w-[100%] mt-2 md:mt-8 rounded flex flex-wrap items-center justify-between gap-2 md:gap-5">
                    <img src="/img/CaseStudies/SectionThree/facebook.png" className="w-[3.6vw] md:w-[5vw]" />
                    <img src="/img/CaseStudies/SectionThree/youtube.png" className="w-[3.6vw] md:w-[5vw]" />
                    <img src="/img/CaseStudies/SectionThree/instagram.png" className="w-[3.6vw] md:w-[5vw]" />
                    <img src="/img/CaseStudies/SectionThree/twitter.png" className="w-[3.6vw] md:w-[5vw]" />
                </div>
            </div> */}
        </div>
    );
};

export default SectionThree;