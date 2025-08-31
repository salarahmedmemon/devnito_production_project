import { useEffect, useState } from "react";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

export default function CaseStudiesPage() {
    // 1. states/hook variables
    const detailsPage = useRef(null);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        let ctx = gsap.context(() => {

        }, detailsPage)

        return () => ctx.revert();
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <>
            {
                isLoaded ? (
                     // loader
                    <div className="w-full h-screen bg-blue-950 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold animate-pulse">Loading...</h1>
                    </div>
                ) : (
                    <div ref={detailsPage}>
                        <SectionOne />
                        <SectionTwo />
                        <SectionThree />
                    </div>
                )
            }
        </>
    );
}