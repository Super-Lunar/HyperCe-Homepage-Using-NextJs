import { HyperCeLogo } from "@/assets/icons/HyperCeLogo";
import { SearchIcon } from "@/assets/icons/SearchIcons";
import { ShoppingCard } from "@/assets/icons/ShoppingCard";
import CollectionNavBar from "./CollectionNavBar";
import { getCollection } from "@/lib/providers/collections";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";

const NavBar = async () => {
  const { collections } = await getCollection();
  return (
    <nav className=" top-0 animate-dropIn transform bg-white z-40 sticky lg:mx-24">
      <div className="shadow-sm relative bg-white">
        <div className="max-w-8xl mx-auto p-4 flex items-center space-x-4 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center space-x-2 relative">
            <p className="absolute -bottom-2 right-0 bg-slate-500 text-xs rounded-full px-1 py-0 text-white">
              demo
            </p>
            <HyperCeLogo size={35} className="relative" />
            <h3 className="ml-1 text-xl font-bold lg:text-2xl relative -top-1">Hyperce</h3>
          </Link>
          <CollectionNavBar collections={collections} />
          <div className="bg-[#BABEC3] h-6 lg:block hidden w-[1px]"></div>

          <section className="flex-1 md:pr-8 lg:block hidden">
            <form method="get" action="/search" className="flex h-10 w-full group ">
              <input
                type="search"
                placeholder="What's on your mind today?"
                className="w-full rounded-l-full border border-r-0 border-gray-300 focus:border-black  px-4 text-sm peer focus:border outline-none focus:border-r-0"
              />
              <button
                type="submit"
                className="flex h-10 items-center space-x-3 rounded-r-full border border-gray-300 px-4 peer-focus:border-black focus:ring-0 "
              >
                <SearchIcon />
                <div>Search</div>
              </button>
            </form>
          </section>

          <div className="flex items-center space-x-4">
            <SearchBar />
            <div className="lg-hidden">
              <button className="relative w-8 h-8 bg-opacity-20 rounded p-1">
                <ShoppingCard />
              </button>
            </div>
            <div className="cursor-pointer">
              <ShoppingCard />
            </div>

            <div className="bg-[#BABEC3] h-6 sm:block hidden w-[1px]"></div>

            <div className="space-x-4 hidden  sm:flex ">
              <p className="text-sm leading-none hover:underline active:underline cursor-pointer">
                Sign In
              </p>
              <p className="text-sm leading-none hover:underline active:underline cursor-pointer">
                Sign Up
              </p>
            </div>

            <div className="relative flex items-center lg:hidden">
              <Hamburger collections={collections} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
