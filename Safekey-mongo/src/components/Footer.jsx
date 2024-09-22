import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-300 text-white flex flex-col md:flex-row justify-center md:justify-between items-center w-full p-2">
      <div className="logo font-bold text-xl md:text-2xl">
        <span className="text-green-700">&lt;</span>
        Safe
        <span className="text-green-700">Key&gt;</span>
      </div>
      <div className="text-center mt-2 md:mt-0 md:text-right text-sm md:text-base">
        Created by Abhishek @2k25 || All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
