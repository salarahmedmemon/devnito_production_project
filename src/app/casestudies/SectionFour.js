const SectionFour = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full bg-[#EEEEEE] relative overflow-hidden flex flex-col sm:flex-row items-center justify-center p-6 pt-[18vw] md:p-20 md:pt-[10vw]">
            <div className="w-[30vw] md:w-[20vw] h-[30vw] md:h-[20vw] rounded-full bg-[#bfd5ef] absolute top-[-6vw] right-[-10vw] md:right-[-7vw] p-[.1vw]">
                <div className="w-full h-full rounded-full bg-[#EAECEE]"></div>
            </div>
            <div className="w-[45vw] md:w-[30vw] h-[45vw] md:h-[30vw] rounded-full bg-[#fff] absolute bottom-[-6vw] left-[-7vw] p-[.4vw]">
                <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
            </div>

            <div className="w-[100%] sm:w-[50%] md:w-[40%] h-full z-1000 flex items-center justify-center">
                <img src="/img/CaseStudiesPage/SectionFour/image01.png" className="w-[100%] mt-10" />
            </div>
            <div className="w-[100%] sm:w-[50%] md:w-[60%] h-full z-1000 p-6">
                <h2 className="mt-4 text-2xl">Discovery Phase</h2>
                <h1 className="text-4xl text-[#4C4886]">Qualitative Research</h1>
                <p className="text-[#ADADAD] mt-6 text-lg">When an unknown printer took a gallery of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries. but also
                    the leap into the electronic typesetting, remaining essentially unchanged
                    it was popularized in the 1960s with the release of letraset sheets containing
                    lorem ipsum passages, and more recently with desktop. 
                </p>
                <button className="px-3 py-2 mt-10 bg-[#4C4886] text-white rounded font-semibold">TALK TO OUR EXPERT</button>
            </div>
        </div>
    )
};

export default SectionFour;