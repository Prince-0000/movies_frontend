import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };

  const handleClick = () => {
    navigate(`/search/${search}`);
  };

  return (
    <div className="flex flex-col justify-center items-center md:gap-5 sm:gap-4 gap-3 mt-8 px-4 sm:px-8 md:px-12">
      <div className="mb-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-extrabold text-center text-gray-800">
          Search to find Similar Movies
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center w-full">
        <input
          type="text"
          aria-label="Enter movie to search"
          placeholder="Enter movie to search"
          autoComplete="off"
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 outline-none"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearch}
        />
        <button
          type="button"
          className="ml-4 px-5 py-3 font-medium sm:mt-0 mt-5 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
