const SectionTwo = () => {
    // 1. states/hook variables

    // 2. functions/methods

    // 3. return statement/jsx
    return(
        <div className="w-full min-h-screen bg-[#EEEEEE] pt-10">
            <div className="h-[10vh] mx-auto">
                <div className="w-[24%] mx-auto border-t-4 border-purple-500">
                    <h1 className="text-[2.4vw] text-center">Services We Offering</h1>
                </div>
                <h2 className="text-[3vw] text-center text-purple-800 font-semibold">Certified of Excellence</h2>
            </div>

            <div className="w-full h-[75vh] bg-teal-800 mt-12 flex">
                <div className="w-[40%] h-full"></div>
                <div className="bg-amber-800 w-[60%] h-full pt-10 ps-7">
                    <div className="w-[24%] border-l-4 border-purple-500">
                        <h1 className="text-[2.4vw] text-center">our services</h1>
                    </div>
                    <p className="text-gray-500">when you land on a sample webpage or open an email template and see 
                        content beginning with "lorem ipsum", the page creator placed that 
                        apparent gibberish there on purpose. Page layout looks artists use lorem 
                        ipsum, also known as placeholder copy.
                    </p>
                    <p className="text-purple-800 font-semibold mt-4">Cost-effective and Comprehensive IT Outsourcing Services:</p>
                    <div className="w-full flex mt-4 justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <a href="#">Hire Mobile App Developer</a>
                          <a href="#">Hire Scrum Master in Dubai</a>
                          <a href="#">Hire AWS Resources in Dubai</a>
                          <a href="#">Hire QA Resources in Dubai</a>
                          <a href="#">Hire Node.js Developer in Dubai</a>
                          <a href="#">Hire Azure Developer in Dubai</a>
                        </div>
                        <div className="flex flex-col gap-2">
                          <a href="#">Hire Mobile App Developer</a>
                          <a href="#">Hire Scrum Master in Dubai</a>
                          <a href="#">Hire AWS Resources in Dubai</a>
                          <a href="#">Hire QA Resources in Dubai</a>
                          <a href="#">Hire Node.js Developer in Dubai</a>
                          <a href="#">Hire Azure Developer in Dubai</a>
                        </div>
                        <div className="flex flex-col gap-2">
                          <a href="#">Hire Mobile App Developer</a>
                          <a href="#">Hire Scrum Master in Dubai</a>
                          <a href="#">Hire AWS Resources in Dubai</a>
                          <a href="#">Hire QA Resources in Dubai</a>
                          <a href="#">Hire Node.js Developer in Dubai</a>
                          <a href="#">Hire Azure Developer in Dubai</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;