import Image, { StaticImageData } from "next/image";
//
import { CollectionsQuery } from "@/generated/graphql";
import noImageFound from "@/assets/images/noImageFound.png";

type Props = {
  collections: CollectionsQuery["collections"];
};

const CategoryCard = ({ collections }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-4 lg:mt-5 lg:gap-4 lg:grid-cols-4">
      {collections.items.map((collection) => (
        <div
          key={collection.id}
          className="relative group overflow-hidden rounded flex aspect-square"
        >
          {collection.featuredAsset?.preview ? (
            <ImageWrapper src={collection.featuredAsset?.preview} alt={collection.name} />
          ) : (
            <ImageWrapper src={noImageFound} alt={collection.name} />
          )}
          <div className="absolute left-3 top-3">
            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
              {collection.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

type ImageWrapperProps = {
  src: string | StaticImageData;
  alt: string;
};

const ImageWrapper = ({ src, alt }: ImageWrapperProps) => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="transition-all duration-300 group-hover:scale-125 rounded"
    />
  </div>
);

export default CategoryCard;
