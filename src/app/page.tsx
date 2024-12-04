import BannerSection from "@/components/BannerSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer/Footer";
import Instagram from "@/components/Instagram";
import NavBar from "@/components/Navbar/NavBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <BannerSection />
      <CategorySection />
      <Services />
      <Instagram />
      <Footer />
    </div>
  );
}
