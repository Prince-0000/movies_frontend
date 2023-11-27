import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const [search,setSearch] = useState("");
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between sticky top-0 z-50 bg-black items-center h-24 max-w-full mx-auto px-4">
      <h1>
        <a
          href="/"
          alt="Home"
          className="w-full md:text-3xl sm:text-2xl text-xl font-bold text-[#00df9a]"
        >
            WAHEGURU
        </a>
      </h1>
      <input
        type="text"
        placeholder="Search items"
        className="h-[35px] p-4 placeholder:pl-placeholder:text-base md:placeholder:text-lg text:border rounded-md text:border-solid block w-6/12 text-base text-slate-500"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        // onKeyDown={handleSearch}
      ></input>
      <ul className="hidden md:flex">
      

        <li className="p-4 mr-5 font-bold">
          <a href="#home">Home</a>
        </li>
       
      </ul>
      <div onClick={handleNav} className="cursor-pointer md:hidden block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full md:text-3xl text-2xl font-bold text-[#00df9a] m-4">
          PORTFOLIO
        </h1>
        <ul className="uppercase p-4">
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#home">Home</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#about">About</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#project">Projects</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;