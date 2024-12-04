"use client";
import { HamburgerIcon } from "@/assets/icons/HamburgerIcon";
import { CollectionsQuery } from "@/generated/graphql";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CollectionSideBar from "./CollectionSideBar";

type Props = {
  collections: CollectionsQuery["collections"];
};

const Hamburger = ({ collections }: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClose = () => {
    setHamburgerOpen(false);
  };

  return (
    <div>
      <button className="mt-2 w-5 transition duration-300" onClick={() => setHamburgerOpen(true)}>
        <HamburgerIcon />
      </button>

      <AnimatePresence>
        {hamburgerOpen && (
          <motion.div
            className="absolute -top-5 -right-5 z-50   bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative">
              <CollectionSideBar collections={collections} handleClose={handleClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;
