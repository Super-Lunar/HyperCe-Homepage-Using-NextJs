import { CollectionsQuery } from "@/generated/graphql";

type Props = {
  collections: CollectionsQuery["collections"];
};

const ShopFooterSection = ({ collections }: Props) => {
  return (
    <div className="mt-12 md:mt-0">
      <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Shop</h3>
      {collections.items?.map((collection) => (
        <ul role="list" className="mt-4 space-y-2">
          <li>
            <p className="text-base text-gray-700 hover:text-black cursor-pointer">
              {collection.name}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ShopFooterSection;
