import { CollectionsQuery } from "@/generated/graphql";

type Props = {
  collections: CollectionsQuery["collections"];
};

const CollectionDropdown = ({ collections }: Props) => {
  return (
    <div>
      {collections.items?.map((collection) => (
        <ul key={collection.id} className="p-1">
          <li className="relative rounded-md text-sm hover:bg-cyan-50">
            <p className="font-semibold text-gray-900 block  px-2 py-2">{collection.name}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CollectionDropdown;
