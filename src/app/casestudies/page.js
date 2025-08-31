"use client";
import { useState, useRef, useEffect } from "react";
import SectionOne from '../utils/SectionOne';
import SectionTwo from '../utils/SectionTwo';
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "../components/Footer";

export default function DetailsPage() {
    // 1. states/hook variables
    const [isLoaded, setIsLoaded] = useState(true);
    const containerRef = useRef(null);

    // 2. functions/methods
    useEffect(() => {
        const timer = setTimeout(() => { setIsLoaded(false) }, 500);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (isLoaded || !containerRef.current) return;

        let ctx = gsap.context(() => {}, containerRef);
        return () => ctx.revert(timer);
    }, [isLoaded]);

    // 3. return statement/jsx
    return (
        <>
        {
            isLoaded ? (
                // loader
                <div className="w-full h-[72vh] sm:h-[80vh] lg:h-screen bg-blue-950 flex items-center justify-center">
                <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
                </div>
            ) : (
                <>
                    <SectionOne name="caseStudiesPage" btnText="OUR CASE"
                      heading="STUDIES" paragraph="We have made quality our habbit. It's not something that we just strive
                                    for - we live by this principle every day."
                      secondBtnText="TALK TO OUR EXPERT" rightImage="img/CaseStudiesPage/image2.png"
                      astronoutImage="/img/ServicesPage/SectionOne/image02.png"
                      missileImage="/img/ServicesPage/SectionOne/image03.png"
                    />
                    <SectionTwo
                        topTitle="Our Company"
                        mainTitle="Case Studies"
                        mainImage="/img/CaseStudiesPage/SectionTwoPage/image.png"
                        sectionTitle="Case Studies"
                        description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem ipsum has been the industry's standard dummy text since the 1500s. 
                            It has survived not only five centuries but also the leap into electronic typesetting. 
                            Remaining essentially unchanged."
                        highlightText="Cost-effective and Comprehensive IT Outsourcing Services:"
                        boxes={[
                            {
                            title: ".Problem Statement",
                            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
                            },
                            {
                            title: ".Possible Solution",
                            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
                            },
                            {
                            title: ".Design Process",
                            text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
                            }
                        ]}
                    />
                    <SectionThree />
                    <SectionFour />
                    <Footer />
                </>
            )
        }
        </>
    );
}