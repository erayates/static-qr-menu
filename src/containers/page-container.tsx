"use client";

import CategoryList from "@/components/category-list";
import ItemList from "@/components/item-list";
import Image from "next/image";

import items from "@/mock/items.json";
import { ChangeEvent, useState } from "react";
import Search from "@/components/search";

export default function PageContainer() {
  const [filteredItems, setFilteredItems] = useState<any>(items);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(newFilteredItems);
  };

  return (
    <main className="p-8 md:p-12 container">
      <div className="logo">
        <Image
          src="/assets/images/logo.png"
          width={250}
          height={150}
          alt="Last Summer Logo"
        />
      </div>
      <div className="mt-5">
        <h1 className="menu-title">
          <span>Keşif</span>
          &nbsp;Menu
        </h1>

        <Search onSearch={handleSearch} />

        <CategoryList setFilteredItems={setFilteredItems} />

        <ItemList filteredItems={filteredItems} />
      </div>
    </main>
  );
}
