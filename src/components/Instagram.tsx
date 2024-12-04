import Image from "next/image";
import Link from "next/link";
//
import Insta1 from "@/assets/images/insta1.jpg";
import Insta2 from "@/assets/images/insta2.jpg";
import Insta3 from "@/assets/images/insta3.jpg";
import Insta4 from "@/assets/images/insta4.jpg";
import Insta5 from "@/assets/images/insta5.jpg";

const Instagram = () => {
  const images = [Insta1, Insta2, Insta3, Insta4, Insta5];
  return (
    <section className="px-6 md:px-12 lg:px-6 pt-32 xl:pt-40 2xl:pt-60 mx-auto max-w-7xl 2xl:px-0">
      <div>
        <h2 className="text-3xl md:text-4xl text-center">
          <span className="font-bold">Instagram</span>
          <br />

          <Link href="https://www.instagram.com/hyperce_io" target="_blank">
            @hyperce_io
          </Link>
        </h2>
        <div className="flex overflow-hidden mt-6">
          {images.map((image, index) => (
            <div key={index} className="w-60 h-96 overflow-hidden flex-shrink-0">
              <Image
                src={image}
                width={480}
                height={480}
                className="w-full h-full object-cover"
                alt={`instagram-image-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
