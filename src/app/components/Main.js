import Header from "./Header";
import SectionOne from "./SectionOne";

const Main = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        // <div className="main w-full h-[37vh] sm:h-[50vh] md:h-screen relative">
        //     <Header />
        //     <SectionOne />
        // </div>
        <div className="w-full h-[37vh] sm:h-[50vh] md:h-screen relative">
            <Header />
            <div className="w-full h-full pt-[30vw] sm:pt-[14vw]">
                <SectionOne />
            </div>
        </div>
    );
};

export default Main;