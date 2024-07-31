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

  return (
    <div className="my-8 px-4 sm:px-8 md:px-12">
      <h1 className="text-2xl font-bold text-center">
        Search to find Similar Movies
      </h1>
      <div className="flex justify-center items-center mt-8">
        <input
          type="text"
          aria-label="Enter movie to search"
          placeholder="Enter movie to search"
          autoComplete="off"
          className="w-full md:w-5/6 p-2 sm:p-3 md:p-4 rounded-lg border border-gray-300 outline-none"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default Home;
