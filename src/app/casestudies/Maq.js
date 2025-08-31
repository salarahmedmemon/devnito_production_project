"use client";

import { useState } from "react";

const Maq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      q: "Are You Sure Service is easy to use ?",
      a: "Yes, our service is designed with simplicity in mind so anyone can use it without technical knowledge."
    },
    {
      q: "Is customer support available 24/7?",
      a: "Absolutely! Our support team is available around the clock to assist you."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel at any time with no hidden charges."
    },
    {
      q: "Is my data safe with this service?",
      a: "We use the latest encryption and security standards to keep your data protected."
    }
  ];

  return (
    <div className="w-full sm:w-[150%] md:w-[100%] text-white mt-10">
      <h1 className="font-semibold text-[6vw] sm:text-[4vw] md:text-[2.4vw]">Most Asked Questions</h1>

      <div className="w-full mt-5 flex flex-col gap-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="w-full border border-[#77CCF3] text-[#77CCF3] rounded-lg p-4"
          >
            {/* Question header */}
            <div
              className="flex items-center justify-between text-[4vw] sm:text-[2.4vw] md:text-[1.5vw] cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <p>{item.q}</p>
              <span className="text-[7vw] sm:text-[3vw] md:text-[2.6vw] font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[4vw] sm:text-[1.6vw] md:text-[1.2vw] text-gray-300">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maq;
