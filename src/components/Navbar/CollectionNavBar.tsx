"use client";

import { useState } from "react";
//
import { ArrowDown } from "@/assets/icons/ArrowDown";
import { CollectionLogo } from "@/assets/icons/CollectionLogo";

import { CollectionsQuery } from "@/generated/graphql";
import CollectionDropdown from "./CollectionDropDown";

type Props = {
  collections: CollectionsQuery["collections"];
};

const CollectionNavBar = ({ collections }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="hidden lg:flex cursor-pointer items-center space-x-2 rounded-sm px-2 py-3 group relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <CollectionLogo />

      <button className="mr-1 text-sm font-medium text-[#202223] group flex">
        <p className="text-sm">Collections</p>
        <ArrowDown
          className={`transition-transform duration-300 ease-in-out ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 z-50 w-52 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-auto">
          <CollectionDropdown collections={collections} />
        </div>
      )}
    </div>
  );
};

export default CollectionNavBar;
