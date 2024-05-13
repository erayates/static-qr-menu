"use client";

import CategoryList from "@/components/category-list";
import ItemList from "@/components/item-list";
import Image from "next/image";

import items from "@/mock/items.json";
import { useState } from "react";

export default function PageContainer() {
  const [filteredItems, setFilteredItems] = useState<any>(items);

  return (
    <main className="p-8 md:p-12 container">
      <div className="flex justify-center items-center">
        <Image
          src="/assets/images/logo.png"
          width={250}
          height={150}
          alt="Last Summer Logo"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl">
          <span className="font-medium">Keşif</span>
          &nbsp;Menu
        </h1>

        <CategoryList setFilteredItems={setFilteredItems} />

        <ItemList filteredItems={filteredItems} />
      </div>
    </main>
  );
}
