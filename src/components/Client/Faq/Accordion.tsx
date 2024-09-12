import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

const accordionData: AccordionItem[] = [
  {
    question: "How to contact with Customer Service?",
    answer:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact: Email and Chat. We try to reply quickly, so you need not to wait too long for a response!",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Please check your system settings and ensure all requirements are met. Try reinstalling the app after updating.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "Ensure your internet connection is stable and try clearing your browser cache. If the problem persists, contact support.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button on the top right corner and fill in your details to create a new account.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "Ensure your internet connection is stable and try clearing your browser cache. If the problem persists, contact support.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-5">
      {accordionData.map((item, index) => (
        <div key={index} className="shadow-md">
          <button
            className="flex justify-between items-center w-full p-4 text-left text-gray-800  focus:outline-none  text-2xl font-medium  mx-auto bg-white  aos-init aos-animate"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="text-2xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div className="text-neutral-500 p-4 text-lg leading-7 font-medium">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
