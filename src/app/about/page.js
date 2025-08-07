import Header from "../components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-page w-full h-[60vh] sm:h-[80vh] md:h-screen relative">
      <Header />
      <div className="w-full h-[50vh] sm:h-[77vh] md:h-[83.6vh] bg-yellow-300 absolute bottom-0">
        {/* FOR SMALL SCREEN */}
        <div className="w-[100%] h-[15vh] sm:h-[25vh] md:hidden bg-amber-400 flex gap-5 p-4 sm:ps-8 sm:pe-8 items-center justify-center mt-6 sm:mt-10">
          <div className="w-[50%] h-[100%] bg-red-500">
            <img 
              src="/img/AboutPage/MainPageImages/firstimage.jpeg"
              className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
              alt="About Me"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl md:text-4xl font-bold">Web Developer</h2>
            </div>
          </div>
          <div className="w-[50%] h-[100%] bg-red-500">
            <img 
              src="/img/AboutPage/MainPageImages/secondimage.jpeg"
              className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
              alt="About Me"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl md:text-4xl font-bold">Forex Trading</h2>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[30vh] bg-yellow-400 mt-4 md:hidden flex flex-col items-center justify-center">
          <button className="text-[7vw] sm:text-[3vw] px-[10vw] sm:px-[7vw] py-[.6vh] rounded bg-white text-purple-800 font-bold cursor-pointer">About</button>
          <h1 className="text-[14vw] sm:text-[8vw] text-white font-bold">Devnito</h1>
          <p className="text-[3vw] sm:text-[2.4vw] text-center text-white">DevNito is a leading provider of IT export services, offering custom software and SaaS
            solutions to businesses worldwide. With a focus an tailored excellence, transparent.
          </p>
          <button className="text-[7vw] sm:text-[3vw] px-[8vw] sm:px-[6vw] py-[.6vh] rounded bg-white text-purple-800 font-bold mt-4 cursor-pointer">Contact Us</button>
        </div>

        {/* FOR LARGE SCREEN */}
        <div className="w-full h-full bg-red-500 hidden md:flex items-center justify-between gap-4 ps-[7.5vw] pt-[5vw] pe-[6.5vw]">
          <div className="w-[50%] h-[100%] bg-amber-400 pt-12">
            <button className="px-[3vw] py-[.8vw] bg-white text-purple-900 font-bold text-[2vw] rounded-lg">About</button>
            <h1 className="text-[6vw] text-white font-bold">Devnito</h1>
            <p className="text-white w-[95%]">DevNito is a leading provider of IT export services, offering custom software and SaaS
              solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration,
              and client-centiricity, we aim to elevate your business to new heights.
            </p>
            <button className="px-[3vw] py-[.8vw] bg-white text-purple-800 rounded-lg font-bold mt-5">CONTACT US</button>
          </div>
          <div className="w-[50%] h-[100%] bg-amber-400 flex items-center justify-center relative">
              <div className="w-[50%] h-[40%] absolute top-[3.5vw] left-0 bg-red-500">
                <img 
                  src="/img/AboutPage/MainPageImages/firstimage.jpeg"
                  className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                  alt="About Me"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">Web Developer</h2>
                </div>
              </div>
               <div className="w-[5vw] h-[10vh] border-4 border-dashed border-white"></div>
               <div className="w-[50%] h-[40%] bg-red-500 absolute bottom-[3vw] right-0">
                <img 
                  src="/img/AboutPage/MainPageImages/secondimage.jpeg"
                  className="w-full p-1 bg-purple-300 h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
                  alt="About Me"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-white text-2xl md:text-4xl font-bold">Forex Trading</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
