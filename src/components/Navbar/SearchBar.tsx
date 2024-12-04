"use client";

import { SearchIcon } from "@/assets/icons/SearchIcons";
import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="lg:hidden">
        <button className="relative w-8 h-8 bg-opacity-20 rounded p-1" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

      {isSearch && (
        <motion.div
          className="lg:hidden absolute inset-x-0 top-16 right-2 p-4 bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <form method="get" action="/search" className="flex h-10 w-full group">
            <input
              type="search"
              placeholder="What's on your mind today?"
              className="w-full rounded-l-full border border-r-0 border-gray-300 focus:border-black px-4 text-sm peer focus:border outline-none focus:border-r-0"
            />
            <button
              type="submit"
              className="flex h-10 items-center space-x-3 rounded-r-full border border-gray-300 px-4 peer-focus:border-black focus:ring-0"
            >
              <SearchIcon />
              <div>Search</div>
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
