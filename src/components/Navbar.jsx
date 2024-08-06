import React from 'react';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <div className="text-white flex justify-between sticky top-0 z-50 bg-black items-center h-24 max-w-full mx-auto px-4">
      <h1>
        <a
          href="/"
          alt="Home"
          className="w-full md:text-3xl sm:text-2xl text-xl font-bold text-[#00df9a]"
        >
            FILM FUSION
        </a>
      </h1>
      
      {!isHomeRoute && (
        <ul className="hidden md:flex">
          <li className="p-4 mr-5 font-bold">
            <a href='/'>Home</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;