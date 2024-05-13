"use client";

import NoData from "./no-data";
import SingleItem from "./single-item/single-item";

export default function ItemList({ filteredItems }: { filteredItems: any }) {
  if (filteredItems.length === 0) {
    return <NoData />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
      {filteredItems.map((item: any, idx: number) => (
        <SingleItem key={idx} item={item} />
      ))}
    </div>
  );
}
