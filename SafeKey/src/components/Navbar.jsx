import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-purple-200">
      <div className="mycontainer mx-auto flex  px-4 sm:px-6 lg:px-8 justify-between items-center h-14 py-4">
        <div className="logo font-bold text-white text-xl">
          <span className="text-green-700">&lt;</span>
          Safe
          <span className="text-green-700">Key&gt;</span>
        </div>
        <button className="text-white bg-green-700 my-5 rounded-md flex justify-between items-center ring-white ring-1">
          <img className="invert w-10 p-1" src="icons/github.png" alt="github" />
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
