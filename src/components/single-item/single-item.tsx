import Image from "next/image";
import PriceRibbon from "../price-ribbon/ribbon";
import "./style.scss";

export default function SingleItem({ item }: { item: any }) {
  return (
    <div
      className="bg-[#1a1a1a] h-[250px] p-4 rounded-xl col-span-1 flex relative flex-col single-item"
      style={{ boxShadow: "0 8px 12px hsla(0,0%,59%,.15)" }}
    >
      <div className="rounded-lg w-full h-full relative">
        <Image
          src={item.image}
          alt="Classic Waffle"
          fill
          className="object-cover rounded-lg"
        />

        <div className="description">{item.description}</div>
      </div>
      <div className="mt-2">
        <h3 className="text-[14px] font-semibold">{item.name}</h3>
      </div>

      <PriceRibbon price={item.price} />
    </div>
  );
}
