const SectionTwo = (props) => {
    // 1. states/hook variables
    const { topTitle, mainTitle, mainImage, sectionTitle, description, highlightText, boxes } = props;

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full bg-[#EEEEEE] pb-10">
            <div className="text-center w-[65vw] sm:w-[34vw] md:w-[18vw] mx-auto pt-[4vw]">
                <h1 className="text-[9vw] sm:text-[5vw] md:text-[2.4vw] border-t-3 border-t-[#4C4886]">{topTitle}</h1>
                <h2 className="text-[8.9vw] sm:text-[4.9vw] md:text-[2.3vw] leading-[6vw] sm:leading-[4vw] md:leading-[3vw] text-[#4C4886] font-semibold">{mainTitle}</h2>
            </div>
            <div className="w-full h-[70vh] mt-[30vw] sm:mt-[7vw] md:mt-[2vw] flex flex-col md:flex-row items-center justify-center">
                <div className="w-full sm:w-[50%] h-full flex items-center justify-center mt-[9vw] sm:mt-[20vw] md:mt-0">
                    <img src={mainImage} className="w-[90vw] sm:w-[45vw]" />
                </div>
                <div className="w-[80%] md:w-[50%] h-full p-[2vw]">
                    <h3 className="text-[8vw] sm:text-[4vw] md:text-[2vw] border-l-3 border-l-[#4C4886] ps-[1.8vw] sm:ps-[1vw] md:ps-[.6vw]">{sectionTitle}</h3>
                    <p className="mt-[1.8vw] md:mt-[1vw] text-[4.6vw] sm:text-[2vw] md:text-[1vw]">{description}
                    </p>
                    <p className="text-[#4C4886] font-extrabold sm:font-bold text-[5vw] sm:text-[2.4vw] md:text-[1vw] my-[3vw] sm:my-[1.8vw] md:my-[1vw]">{highlightText}</p>
                    <div className="w-full h-[40vh] flex items-center justify-center gap-4">
                        {
                            boxes.map((box, idx) => {
                               return (
                                <div key={idx} className="w-[35%] h-full">
                                    <h3 className="text-[#4C4886] font-bold">{box.title}</h3>
                                    <p className="text-[3.4vw] sm:text-[2vw] md:text-[1vw]">{box.text}</p>
                                </div> 
                               )
                            })
                        }
                        
                        {/* <div className="w-[35%] h-full">
                            <h3 className="text-[#4C4886] font-bold">.Problem Statement</h3>
                            <p className="text-[3.4vw] sm:text-[2vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="w-[35%] h-full">
                            <h3 className="text-[#4C4886] font-bold">.Possible Solution</h3>
                            <p className="text-[3.4vw] sm:text-[2vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="w-[35%] h-full">
                            <h3 className="text-[#4C4886] font-bold">.Design Process</h3>
                            <p className="text-[3.4vw] sm:text-[2vw] md:text-[1vw]">Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;