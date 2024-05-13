import { Dispatch, SetStateAction, useRef, useState } from "react";
import items from "@/mock/items.json";
import "./style.scss";

export default function CategoryItem({
  name,
  icon,
  value,
  setFilteredItems,
}: {
  name: string;
  icon?: string;
  value: string;
  setFilteredItems: Dispatch<SetStateAction<any[]>>;
}) {
  const categoryRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(false);

  const onCategoryClick = (e: React.MouseEvent) => {
    // İlk önce önceki seçilen elemanın arka plan rengini sıfırla
    const previouslySelected = document.querySelector(".selected");
    if (previouslySelected) {
      previouslySelected.classList.remove("selected");
    }

    // Şu anki elemanı seç ve arka plan rengini ayarla
    categoryRef.current?.classList.add("selected");

    if (value === "all") {
      setFilteredItems(items);
      return;
    }

    const filteredItems = items.filter((item) => item.category === value);
    setFilteredItems(filteredItems);
  };

  return (
    <div
      className={`bg-[#1a1a1a] px-8 py-4 rounded-lg text-[14px] flex gap-1 font-semibold cursor-pointer ${
        selected ? "selected" : ""
      }`}
      onClick={onCategoryClick}
      ref={categoryRef}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}
