"use client"
import { useState } from "react";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <h6 className="text-2xl font-bold text-blue-600 tracking-wide">Job Portal</h6>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2">Home</button>
          {/* <button className="text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2">Jobs</button>
          <button className="text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2">Companies</button> */}
          <button className="text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2">Sign In</button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 transition duration-300 hover:bg-blue-700 shadow-md">Post a Job</button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md p-2 flex items-center">
        
            <span className="ml-2">Menu</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      <div
        className={`md:hidden bg-gray-50 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="p-4"> {/* Padding added for spacing */}
          <button className="block text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2 mb-2 w-full">Home</button>
        
          <button className="block text-gray-700 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2 mb-2 w-full">Sign In</button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-3 transition duration-300 hover:bg-blue-700 shadow-md w-full">
            Post a Job
          </button>
        </div>
      </div>
    </div>
  );
  
  
};

export default Header;
