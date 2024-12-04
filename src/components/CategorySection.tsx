import { getCollection } from "@/lib/providers/collections";
import CategoryCard from "./CategoryCard";

const CategorySection = async () => {
  const { collections } = await getCollection();
  return (
    <section className="pt-12" id="category">
      <div className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0">
        <h2 className="text-2xl text-gray-900 sm:text-3xl">Shop by Category</h2>
        <CategoryCard collections={collections} />
      </div>
    </section>
  );
};

export default CategorySection;
