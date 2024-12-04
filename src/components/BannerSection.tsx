import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0 mt-4">
      <div className="bg-[#c38c9f] min-h-[300px] rounded-2xl p-6 md:p-12 overflow-hidden text-white flex flex-col relative justify-end">
        <div className="w-2/3 mt-auto h-full relative z-2 ">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-medium  ">
            Grab Upto 50% Off On Selected Clothes
          </h2>
          <Link href="#category">
            <button className="bg-white py-2 px-5 rounded-full text-black mt-4">Shop Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
