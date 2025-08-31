'use client';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const links = [
    { href: '#', text: 'Digital Branding & Communication' },
    { href: '#', text: 'Web Development' },
    { href: '#', text: 'Video Animation' },
    { href: '#', text: 'Digital Marketing' },
    { href: '#', text: 'IT Resource' },
    { href: '#', text: 'UI/UX Design' },
    { href: '#', text: 'Mobile App Development' },
    { href: '#', text: 'E-Commerce Web Development' },
    { href: '#', text: 'Emerging Tech Development' },
  ];

  const contentData = [
    {
      title: 'Digital Branding & Communication',
      image: '/img/sectTwo/digitalbranding.png',
      description: `Climb the ladder of success by accumulating more leads and sales with 
      our digital marketing services. We will help you achieve a substaintial ROI in a 
      little time with search engine optimization, social media marketing, and Google Ads with 
      our tried and tested strategies.`,
      listTitle: 'Creating Branding & Communication Agency for Curious Minds:',
      listItems: {
        col1: [
          'Social Media Marketing (SMM)',
          'Search Engine Optimization (SEO)',
          'Content Marketing',
          'Public Relation (PR)'
        ],
        col2: [
          'Social Media Optimization (SMO)',
          'Conversion Rate Optimization (CRO)',
          'Online Reputation Management (ORM)',
          'Online Translation Services'
        ],
        col3: [
          'Pay Per Click (PPC)',
          'Email Marketing',
          'App Store Optimization (ASO)'
        ]
      },
    },
    {
      title: 'Web Development',
      image: '/img/sectTwo/webdevelopment.png',
      description: `Get an edge over your competitors and boost your profitability with magnetic web experiences
      Digital Gravity is the choice of the UAE's leading brands for website design and web 
      development services in Dubai. Whether it's custom web development or Wordpress and
      web development, we make sure you get the best of both worlds in the form of a responsive,
      secure, and high-performance website.`,
      listTitle: 'We provide the following Web Development Services in the UAE:',
      listItems: {
        col1: [
          'Wordpress Development',
          'Sitecore Development',
          'ASP.NET Development',
          'Ibexa DXP',
          'Angular js Development'
        ],
        col2: [
          'SharePoint Development',
          'PHP Development',
          'CMS Development',
          'Laravel Development',
          'Website Maintenance Services',
        ],
        col3: [
          'Enterprise Development',
          'Joomla Development',
          'Drupal Development',
          'Python Web App Development'
        ]
      }
    },
    {
      title: 'Video Animation',
      image: '/img/sectTwo/va.jpeg',
      description: `Create bewitching videos for your brand and enthrall your prospective customers.
      Digital Gravity is the best video production company in Dubai you can choose to make 
      yourself look and sound awesome. We create everything you need from explainer videos to 
      sales videos, product videos, branding videos, and a lot more in exactly the way you
      envisioned them.`,
      listTitle: 'Compelling, Aesthetically Appealing & Immersive Video Animation:',
      listItems: {
        col1: [
          'Explainer Video Production',
          '3D Architectural Walkthrughts',
          'Whiteboard Animation Video'
        ],
        col2: [
          'Product Demo Animation',
          'Medical Animation Studio'
        ],
        col3: [
          'Video Game Trailer',
          'Character Animation Video'
        ]
      }
    },
    {
      title: 'Digital Marketing',
      image: '/img/sectTwo/digitalmarketing.png',
      description: `Climb the ladder of success by accumulating more leads and sales with 
      our digital marketing services. We will help you achieve a substantial ROI in a little 
      time with search engine optimization, social media marketing, and Google ads with our 
      tried and tested strategies.`,
      listTitle: 'Communicable & Captivating Digital Marketing Services in the UAE:',
      listItems: {
        col1: [
          'Social Media Marketing (SMM)',
          'Search Engine Optimization (SEO)',
          'Content Marketing',
          'Public Reaction (PR)'
        ],
        col2: [
          'Social Media Optimization (SMO)',
          'Conversion Rate Optimization (CRO)',
          'Online Reputation Management (ORM)',
          'Online Translation Services'
        ],
        col3: [
          'Pay Per Click (PPC)',
          'Email Marketing',
          'App Store Optimization (ASO)'
        ]
      }
    },
    {
      title: 'IT Resource',
      image: '/img/sectTwo/computer.png',
      description: `We are an IT outsourcing company in Dubai offering an extended range of services including End User Support, Application Investment, Cloud & Infrastructure expertise. Our on-demand IT staff outsourcing solution in Dubai specializes exclusively for digital transformation with Custom Software Development, Software Testing & QA, Cloud Computing, Mobile & Web Development, Maintenance & Support, Blockchain Consulting, Data Science, Internet of Things, UI/UX Design, MVP Development, Nearshore/Offshore Software Development.`,
      listTitle: ' Cost-effective and Comprehensive IT Outsourcing Services:',
      listItems: {
        col1: [
          'Hire Mobile App Developer',
          'Hire Scrum Master in Dubai',
          'Hire AWS Resources in Dubai',
          'Hire QA Resources in Dubai',
          'Hire Node.js Developer in Dubai',
          'Hire Azure Developer in Dubai',
        ],
        col2: [
          'Hire React JS Developers in Dubai',
          'Hire React Native Developers in Dubai',
          'Hire Sharepoint Developers in Dubai',
          'Hire Dynamics 365 Developers in Dubai',
          'Hire Project Managers in Dubai'
        ],
        col3: [
          'Hire Dot Net Developers in Dubai',
          'Hire RPA in Dubai',
          '3D Google Maps Integration',
          'MarTech Consulting',
          'Digital Cloud Transformation Solutions'
        ]
      },
    },
    {
      title: 'UI/UX Design',
      image: '/img/sectTwo/uiuxdesign.png',
      description: `Get bespoke user experience that meet all your design needs. 
      We take pride in crafting stunning user interfaces that make it fun for your 
      audience to intract with your brand and come back in the future for more. Whether 
      it's a mobile app or a website, Digital Gravity's team of UX/UI designers is the best you 
      can hire for UX/UI design services in Dubai.`,
      listTitle: 'A Creative UI/UX Design Agency in Dubai with Business Centric Approach:',
      listItems: {
        col1: [
          'PSD To Responnsive HTML',
          'UX Design Workshop',
          'Responsive Web Design'
        ],
        col2: [
          'UX Design',
          'Landing Page Design',
        ],
        col3: [
          'UX Audit',
          'Graphic Design'
        ]
      }
    },
    {
      title: 'Mobile App Development',
      image: '/img/sectTwo/mobileappdevelopment.png',
      description: `Leverage the power of mobile solutions and create a personalized marketing channel for your audience.
      Digital Gravity offers comprehensive mobile app development services 
      for iOS and Android devices. In the form of native and cross-platform applications, we carve out interfaces that win 
      hearts and accelerate your growth.`,
      listTitle: 'Innovative & Ingenious Mobile App Development Solutions in Dubai:',
      listItems: {
        col1: [
          'Hybrid Apps',
          'Android App Development',
          'IOS App Development'
        ],
        col2: [
          'React Native Apps',
          'Flutter Apps'
        ],
        col3: [
          'Progressive Web Apps',
          'Ruby on Rails (ROR) Development'
        ]
      }
    },
    {
      title: 'E-Commerce Web Development',
      image: '/img/sectTwo/ecommercedevelopment.png',
      description: `Robust, sales-driven, and inituitive eCommerce solutions for online business yearning to scale in a 
      competitive digital landscape. Digital Gravity is recognized as the top eCommerce web development 
      company in Dubai with a team of tech-savvy professionals, who can integrate both simple and complex features into
      your online store.`,
      listTitle: 'You can recieve the following Ecommerce Web Development Services:',
      listItems: {
        col1: [
          'Woo Commerce Development',
          'Big Commerce Development'
        ],
        col2: [
          'Miraki Development',
          'Shopify Ecommerce Development'
        ],
        col3: [
          'Magento Ecommerce Development',
          'Shopify Plus Ecommerce Development'
        ]
      }
    },
    {
      title: 'Emerging Tech Development',
      image: '/img/sectTwo/emergingtechdevelopment.png',
      description: `Emerging technology is a team generally used to describe a new technology, but it may also refer to the
      continuing development of an existing technology; It can have slightly different meaning when used in different areas, such as media, business, science, or education.`,
      listTitle: 'Emerging technology include a variety of technologies such as:',
      listItems: {
        col1: [
          'Educational Technology',
          'Biotechnology',
          'Quantum Computing',
          'Advanced Artificial Intelligence (AAI)'
        ],
        col2: [
          'Information Technology',
          'Robotics',
          'Neurotechnology'
        ],
        col3: [
          'Nanotechnology',
          'Climate Intervention Technologies',
          'Communication'
        ]
      }
    },
  ];

  const [activeIndex, setActiveIndex] = useState(4); // Initially IT Resource
  const [translateX, setTranslateX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isCentering, setIsCentering] = useState(false);
  const navListRef = useRef(null);
  const animationFrameId = useRef(null);
  const animationSpeed = 1;
  const pauseAnimation = () => setAnimating(false);
  const containerRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const currentContent = contentData[activeIndex];
  const secondColRef = useRef(null);
  const thirdColRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    if (!containerRef.current) return;
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, {
        x: 100, opacity: 0, duration: 1,
        scrollTrigger: { trigger: h1Ref.current, start: 'top 80%' }
      });
      gsap.from(h2Ref.current, {
        x: -100, opacity: 0, duration: 1,
        scrollTrigger: { trigger: h2Ref.current, start: 'top 80%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Auto scroll loop
  useEffect(() => {
    if (isCentering || !animating) return;
    const listWidth = navListRef.current?.scrollWidth / 4 || 0;
    const step = () => {
      setTranslateX((prev) => {
        let next = prev - animationSpeed;
        if (Math.abs(next) > listWidth) return 0;
        return next;
      });
      animationFrameId.current = requestAnimationFrame(step);
    };
    animationFrameId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [animating, isCentering]);

  const handleClick = (index) => {
    if (!navListRef.current) return;
    setAnimating(false);
    setIsCentering(true);
    setActiveIndex(index);

    const container = navListRef.current.parentElement;
    const containerWidth = container.offsetWidth;
    const linksElements = navListRef.current.querySelectorAll("li");
    const clickedLink = linksElements[index];
    if (!clickedLink) return;

    const linkCenter = clickedLink.offsetLeft + clickedLink.offsetWidth / 2;
    const targetTranslateX = linkCenter - containerWidth / 2;

    const animationDuration = 800;
    const fps = 60;
    const totalFrames = (animationDuration / 1000) * fps;
    let frame = 0;

    const startTranslateX = translateX;
    const deltaX = -targetTranslateX - startTranslateX;

    const animateToCenter = () => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = easeOutCubic(progress);
      const currentTranslateX = startTranslateX + deltaX * easeProgress;
      setTranslateX(currentTranslateX);
      if (frame < totalFrames) {
        animationFrameId.current = requestAnimationFrame(animateToCenter);
      } else {
        setIsCentering(false);
        setAnimating(false);
      }
    };

    animationFrameId.current = requestAnimationFrame(animateToCenter);
  };

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  // ✅ Initial centering on mount
  useEffect(() => {
    if (!navListRef.current) return;
    const container = navListRef.current.parentElement;
    const containerWidth = container.offsetWidth;
    const linksElements = navListRef.current.querySelectorAll("li");
    const activeLink = linksElements[activeIndex];
    if (!activeLink) return;
    const linkCenter = activeLink.offsetLeft + activeLink.offsetWidth / 2;
    const targetTranslateX = linkCenter - containerWidth / 2;
    setTranslateX(-targetTranslateX);
  }, []);

  // GSAP Scroll animations for content
  useEffect(() => {
    if (secondColRef.current) {
      gsap.fromTo(secondColRef.current, { x: 150, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: secondColRef.current, start: 'top 80%' }
      });
    }
    if (thirdColRef.current) {
      gsap.fromTo(thirdColRef.current, { x: 150, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: thirdColRef.current, start: 'top 80%' }
      });
    }
    return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen overflow-hidden relative bg-[#EEEEEE]">
      {/* right circle */}
      <div className='w-[25vw] h-[25vw] rounded-full bg-[#BAD3EF] absolute p-[.2vw] top-2 right-[-12vw]'>
        <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
      </div>
      {/* left circle */}
      <div className='w-[40vw] h-[40vw] rounded-full bg-[#fff] absolute p-[.2vw] bottom-[-13vw] left-[-5vw]'>
        <div className='w-full h-full rounded-full bg-gradient-to-b from-[#F2F3F5] to-[#F1F2F2]'></div>
      </div>
      
      <div className="flex flex-col items-center justify-center pt-14">
        <div className="line w-35 sm:w-54 md:w-72 h-[.4vw] sm:h-[.3vw] md:h-[.2vw] bg-[#4C4886]"></div>
        <h1 ref={h1Ref} className="text-[5vw] sm:text-[3vw] md:text-[2vw] md:font-semibold">Services We Offering</h1>
        <h2 ref={h2Ref} className="text-[5.5vw] sm:text-[3.5vw] md:text-[2.5vw] leading-[6vw] sm:leading-[4vw] md:leading-[2.6vw] text-[#4C4886] text-lg font-bold">Certified Excellence</h2>
      </div>

      <div className="nav-wrapper w-full mt-2 md:mt-10 overflow-hidden relative h-10">
        <ul
          className="nav-list flex whitespace-nowrap gap-3 pt-3 md:pt-0 text-[4vw] sm:text-[2vw] md:text-[1vw]
            absolute top-0"
          ref={navListRef}
          onMouseEnter={pauseAnimation}
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isCentering ? 'none' : 'transform 0.5s ease',
          }}
        >
          {[...links, ...links].map((link, i) => (
            <li
              key={i}
              className={`nav-item inline-block cursor-pointer ${i % links.length === activeIndex
                  ? 'font-semibold text-[#000] text-[4.5vw] sm:text-[2.4vw] md:text-[1.3vw]'
                  : 'text-[#ADADAD] opacity-70'
                }`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (!isCentering) handleClick(i % links.length);
                }}
                className="px-2 py-1 whitespace-nowrap inline-block"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {currentContent && (
        <div className="w-full h-full flex p-2 sm:p-10 pt-0 gap-4 flex-col md:flex-row">
          {/* first column for image */}
          <div className="flex justify-center items-center md:rounded-lg rounded-full z-1000">
            <img className="w-[71vw] mt-[5vw]"
              src={currentContent.image}
              alt={currentContent.title}
            />
          </div>
              {/* second column from content */}
          <div ref={secondColRef} className="flex flex-col w-full md:w-300 pt-[4vw] p-4 py-0">
            <h2 className="text-lg md:text-[1.6vw] font-semibold mb-2 border-l-3 ps-[1.2vw] sm:ps-[.6vw] border-[#4C4886]"> {currentContent.title}</h2>
            <p className="text-sm md:text-[1vw] text-[#666666] w-[100%] sm:w-[90%]">{currentContent.description}</p>
            <span className="text-[#071652] font-semibold text-sm md:text-[1vw] my-4">{currentContent.listTitle}</span>

            <ul className="list-disc list-inside mt-2 flex flex-wrap gap-2 sm:gap-0">
              {Array.isArray(currentContent.listItems)
                ? currentContent.listItems.map((item, i) => (
                    <li key={i} className="mt-1 text-[3vw] sm:text-[2vw] md:text-[.7vw] text-[#666666] font-semibold">{item}</li>
                  ))
                : Object.entries(currentContent.listItems).map(([colKey, colItems], colIndex) => (
                    <div key={colIndex} className="w-[30%]">
                      <ul className="list-disc ps-2 text-[3vw] sm:text-[1.4vw] md:text-[.7vw] text-[#666666] font-semibold">
                        {colItems.map((item, i) => (
                          <li key={i} className="mt-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))
              }
            </ul>
          </div>
              {/* third column for navigation */}
          <div ref={thirdColRef} className="h-[1vw] md:h-[12vw] w-[70vw] sm:w-[40vw] md:w-[2.5vw] flex flex-row md:flex-col border p-2 rounded-2xl mx-auto md:mx-0 justify-center items-center mt-6 md:mt-[12vw] space-x-2 sm:space-x-4 md:space-x-0 md:space-y-2">
            {contentData.map((_, idx) => (
              <div key={idx} className={`w-[2vw] sm:w-[1vw] md:w-[.6vw] h-[2vw] sm:h-[1vw] md:h-[.6vw] rounded-full ${idx === activeIndex ? 'bg-blue-950' : 'bg-transparent border'}`}></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionTwo;
