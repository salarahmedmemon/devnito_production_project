"use client";

import { useState } from "react";
import Image from "next/image";

const SectionThree = () => {
  // state to track active service image
  const [activeImage, setActiveImage] = useState("/img/ServicesPage/SectionThree/mobileapp.png");

  // Map service names to images
  const serviceImages = {
    "Mobile App Development": "/img/ServicesPage/SectionThree/mobileapp.png",
    "IT Resource": "/img/ServicesPage/SectionThree/itresource.png",
    "E-Commerce Web Development": "/img/ServicesPage/SectionThree/ecommerce.png",
    "UI/UX Development": "/img/ServicesPage/SectionThree/uiux.jpeg",
    "Emerging Tech Development": "/img/ServicesPage/SectionThree/emerging.jpeg",
    "Digital Branding & Communication": "/img/ServicesPage/SectionThree/dbc.jpeg",
    "Web Development": "/img/ServicesPage/SectionThree/webdevelopment.jpeg",
    "Video Animation": "/img/ServicesPage/SectionThree/video.jpeg",
    "Digital Marketing": "/img/ServicesPage/SectionThree/marketing.jpeg",
  };

  // reusable box component
  const ServiceBox = ({ title, position }) => (
    <div
      className={`w-[20vw] sm:w-[20vw] md:w-[10vw] h-[20vh] absolute text-[3vw] sm:text-[2.4vw] md:text-[1.4vw] ${position}`}
      onMouseEnter={() => setActiveImage(serviceImages[title])}
      onMouseLeave={() => setActiveImage("/img/ServicesPage/SectionThree/mobileapp.png")}
    >
      <div className="w-[16vw] sm:w-[10vw] md:w-[5vw] h-[5vh] sm:h-[9vh] md:h-[11vh] border-2 border-[#2A4560] mx-auto rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
        <div className="w-[2.5vw] h-[2.5vw] bg-[#2A4560] rounded-full"></div>
      </div>
      <span className="text-center block text-[#2A4560] font-semibold mt-2">
        {title}
      </span>
    </div>
  );

  return (
    <div className="w-full h-[100vh] sm:h-[110vh] md:h-[250vh] bg-[#0a131c] overflow-hidden flex items-center justify-center">
      <div className="w-[50%] h-[80vh] relative">
        {/* iPhone Frame */}
        <div className="w-[24vw] h-[90vh] absolute top-[8vw] left-[13vw] flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* iPhone frame (PNG with transparent screen) */}
            {/* <Image
             src="/img/ServicesPage/SectionThree/mobileapp.png"
              alt="iPhone Frame"
              fill
              className="object-contain pointer-events-none"
            /> */} 
            {/* Dynamic screen content */}
            <div className="z-1000 absolute top-[12%] left-[-22vw] sm:left-[-4.5vw] md:left-[12%] w-[67vw] sm:w-[140%] md:w-[80%] h-[50%] sm:h-[65%] md:h-[94%] overflow-hidden rounded-[2rem] bg-[#4ab6ff]">
              <Image
                src={activeImage}
                alt="iPhone Screen"
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            <div className="hidden md:block w-[40vw] h-[40vw] bg-[#35628e] absolute bottom-[-28vw] left-[-8vw] rounded-full"></div>
          </div>
        </div>

        {/* Service Boxes */}
        <ServiceBox title="Mobile App Development" position="top-[-5vw] left-[16vw] md:left-[20vw]" />
        <ServiceBox title="IT Resource" position="top-[-22vw] sm:top-[2vw] md:top-[-9vw] left-[-14vw] sm:left-[-10vw] md:left-[-2vw]" /> 
        <ServiceBox title="E-Commerce Web Development" position="top-[6vw] sm:top-[24vw] md:top-[3vw] left-[-14vw] sm:left-[-18vw] md:left-[-16vw]" />
        <ServiceBox title="UI/UX Development" position="top-[-22vw] sm:top-[2vw] md:top-[-9vw] right-[-14vw] sm:right-[-10vw] md:right-[-2vw]" />
        <ServiceBox title="Emerging Tech Development" position="top-[6vw] sm:top-[24vw] md:top-[3vw] right-[-14vw] sm:right-[-18vw] md:right-[-16vw]" />
        <ServiceBox title="Digital Branding & Communication" position="top-[174vw] sm:top-[53vw] md:top-[18vw] left-[-14vw] sm:left-[-18vw] md:left-[-16vw]" />
        <ServiceBox title="Web Development" position="top-[174vw] sm:top-[53vw] md:top-[18vw] right-[-14vw] sm:right-[-18vw] md:right-[-16vw]" />
        <ServiceBox title="Video Animation" position="top-[215vw] sm:top-[84vw] md:top-[32vw] left-[0vw] sm:left-[-10vw] md:left-[-2vw]" />
        <ServiceBox title="Digital Marketing" position="top-[215vw] sm:top-[84vw] md:top-[32vw] right-[0vw] sm:right-[-10vw] md:right-[-2vw]" /> 
      </div>
    </div>
  );
};

export default SectionThree;
