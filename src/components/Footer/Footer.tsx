import { getCollection } from "@/lib/providers/collections";
import FooterHypece from "./FooterHypece";
import ShopFooterSection from "./ShopFooterSection";
import SupportFooter from "./SupportFooter";
import CompanyFooter from "./CompanyFooter";

const Footer = async () => {
  const { collections } = await getCollection();
  return (
    <footer className="mt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <FooterHypece />
          <ShopFooterSection collections={collections} />
          <SupportFooter />
          <CompanyFooter />
        </div>
        <div className="mt-12 text-center ">
          <span className="text-sm tracking-wide text-gray-600 ">© hyperce 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
