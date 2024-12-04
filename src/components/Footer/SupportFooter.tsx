import Link from "next/link";

const SupportFooter = () => {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Support</h3>

      <ul role="list" className="mt-4 space-y-2">
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Help
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Track order
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Shipping
          </Link>
        </li>
        <li>
          <Link href="#" className="text-base text-gray-700 hover:text-black">
            Returns
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SupportFooter;
