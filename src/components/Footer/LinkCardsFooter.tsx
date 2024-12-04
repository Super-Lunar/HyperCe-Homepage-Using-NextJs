import Link from "next/link";
//
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { YoutubeIcon } from "@/assets/icons/YoutubeIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";

const LinkCardsFooter = () => {
  return (
    <div className="mt-4 flex items-center space-x-4  flex-wrap">
      {/* facebook */}
      <Link
        href="https://facebook.com/hyperce"
        className="flex group h-8 w-8 items-center justify-center rounded-full border border-gray-300  hover:bg-[#059683]  hover:border-primary transition-colors duration-300"
        target="_blank"
      >
        <FacebookIcon className="group-hover:fill-white fill-gray-500" />
      </Link>
      {/* instagram */}
      <Link
        href="https://instagram.com/hyperce_io"
        className="flex group h-8 w-8 items-center justify-center rounded-full border border-gray-300  hover:bg-[#059683]  hover:border-primary transition-colors duration-300"
        target="_blank"
      >
        <InstagramIcon className="group-hover:fill-white fill-gray-500" />
      </Link>
      {/* twitter */}
      <Link
        href="https://twitter.com/hyperce_io"
        className="flex group h-8 w-8 items-center justify-center rounded-full border border-gray-300  hover:bg-[#059683]  hover:border-primary transition-colors duration-300"
        target="_blank"
      >
        <TwitterIcon className="group-hover:fill-white fill-gray-500" />
      </Link>
      {/* Youtube */}
      <Link
        href="https://youtube.com/@hyperce"
        className="flex group h-8 w-8 items-center justify-center rounded-full border border-gray-300  hover:bg-[#059683]  hover:border-primary transition-colors duration-300"
        target="_blank"
      >
        <YoutubeIcon className="group-hover:fill-white fill-gray-500" />
      </Link>
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/company/hyperce/"
        className="flex group h-8 w-8 items-center justify-center rounded-full border border-gray-300  hover:bg-[#059683]  hover:border-primary transition-colors duration-300"
        target="_blank"
      >
        <LinkedInIcon className="group-hover:fill-white fill-gray-500" />
      </Link>
    </div>
  );
};

export default LinkCardsFooter;
