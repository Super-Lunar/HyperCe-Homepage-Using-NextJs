import Link from "next/link";

const CompanyFooter = () => {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Company</h3>

      <ul role="list" className="mt-4 space-y-2">
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Blog
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CompanyFooter;
