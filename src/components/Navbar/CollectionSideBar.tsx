import { XIcon } from "@/assets/icons/XIcon";
import { CollectionsQuery } from "@/generated/graphql";

type Props = {
  collections: CollectionsQuery["collections"];
  handleClose: () => void;
};

const CollectionSideBar = ({ collections, handleClose }: Props) => {
  return (
    <div className="relative flex h-screen w-screen max-w-lg flex-col space-y-6 pb-10">
      <header className="flex justify-end items-center px-4 pt-6 absolute top-0 right-0">
        <button onClick={handleClose} className="p-2">
          <XIcon />
        </button>
      </header>

      <div className="px-4 pt-16">
        {" "}
        {/* Added pt-16 to offset the header */}
        <h2 className="text-lg font-semibold">Collections</h2>
        {collections.items?.map((collection) => (
          <ul key={collection.id} className="p-1">
            <li className="relative rounded-md text-sm hover:bg-cyan-50">
              <p className="font-semibold text-gray-900 block px-2 py-2">{collection.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CollectionSideBar;
