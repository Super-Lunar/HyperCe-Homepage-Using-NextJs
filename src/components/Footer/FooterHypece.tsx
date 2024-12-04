import Link from "next/link";
//
import { Logo } from "@/assets/icons/Logo";
import LinkCardsFooter from "./LinkCardsFooter";

const FooterHypece = () => {
  return (
    <section className="col-span-2 md:col-span-3 xl:col-span-1">
      <Link className="flex items-center space-x-2" href="/">
        <Logo />
        <p className="text-xl lg:text-2xl font-semibold ml-1">Hyperce</p>
      </Link>
      <p className="text-sm text-gray-600 mt-4">
        Unlock Your Business Potential with Customized Solutions
      </p>
      <div className="mt-4">
        <Link href="https://hyperce.io/request-a-quote" className="group whitespace-nowrap">
          Request a quote today
          <span className="group-hover:pl-2 transition-all ml-2">➜</span>
        </Link>
      </div>
      <LinkCardsFooter />
    </section>
  );
};

export default FooterHypece;
