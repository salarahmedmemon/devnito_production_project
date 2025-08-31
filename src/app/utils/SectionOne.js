import Header from "../components/Header";

const SectionOne = ({ name, btnText, heading, paragraph, secondBtnText, rightImage, missileImage, astronoutImage }) => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full h-[55vh] md:min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url('/img/${name}/image.png')` }}>
                <Header />
                <div className="w-full h-[75vh] md:h-screen pt-[22vw] sm:pt-[9vw] md:pt-[8vw] relative overflow-hidden">
                    <img src={astronoutImage} className="hidden sm:block w-[15vw] md:w-[12vw] left-[30vw] top-[6vw] absolute" />
                    <img src={missileImage} className="hidden sm:block w-[6vw] absolute rotate-[26deg] right-[40vw] top-[12vw] z-0" />
                    <div className="w-full h-[50vh] md:h-[80vh] flex flex-col-reverse items-center justify-center sm:flex-row">
                        <div className="w-[100%] sm:w-[50%] h-[200%] sm:h-full text-white sm:ps-[7.4vw] pt-[8vw]">
                            <button className="px-3 py-[.2vw] mx-[26vw] sm:mx-0 bg-white text-[#4C4886] text-[8vw] sm:text-[4vw] md:text-[3vw] font-semibold rounded sm:rounded-lg">{btnText}</button>
                            <h1 className="font-bold text-center sm:text-start text-[18vw] sm:text-[8.5vw] md:text-[6vw] mt-[6vw] sm:mt-[2vw] md:mt-[.8vw] leading-[6vw]">{heading}</h1>
                            <p className="px-6 sm:px-0 text-[4vw] text-center sm:text-start sm:text-[2vw] md:text-[1.5vw] mt-[8vw] sm:mt-[3.6vw] md:mt-[2vw]">{paragraph}</p>
                            <button className="px-3 py-[.7vw] md:py-[.4vw] bg-white text-[#4C4886] text-[5vw] mx-[20vw] sm:mx-0 sm:text-[2.6vw] md:text-[1.6vw] font-semibold rounded mt-[4vw] sm:mt-[3vw]">{secondBtnText}</button>
                        </div>
                        <div className="w-[100%] sm:w-[50%] h-full flex items-center justify-center">
                            <img src={`${rightImage}`} className="w-[60vw] sm:w-[37vw] z-1000"/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SectionOne;