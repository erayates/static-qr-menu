import { Dispatch, SetStateAction, useRef } from "react";
import CategoryItem from "./category-item/category-item";

export default function CategoryList({
  setFilteredItems,
}: {
  setFilteredItems: Dispatch<SetStateAction<any[]>>;
}) {
  return (
    <div className="mt-5 flex space-x-4 overflow-x-auto category-list">
      <CategoryItem
        name="Tümü"
        value="all"
        setFilteredItems={setFilteredItems}
      />
      <CategoryItem
        name="Waffle"
        icon={"🧇"}
        value="waffle"
        setFilteredItems={setFilteredItems}
      />
      <CategoryItem
        name="Dondurmalar"
        icon={"🍦"}
        value="ice-cream"
        setFilteredItems={setFilteredItems}
      />
    </div>
  );
}
