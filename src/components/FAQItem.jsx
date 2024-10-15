import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa'; 

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <li className="px-80">
      <div
        onClick={toggleFAQ}
        className="flex justify-between items-center p-4 bg-[#777777] text-xl font-semibold cursor-pointer text-white"
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? <FaTimes /> : <FaPlus />}</span>
      </div>
    
      <div
        className={`bg-[#777777] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 p-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white text-xl">{answer}</p>
      </div>
    </li>
  );
};

export default FAQItem;
