import "./style.scss";

export default function PriceRibbon({ price }: { price: number }) {
  return (
    <div className="price rupee">
      <div className="ribbonTop" />
      <div className="ribbonBottom" />
      <span className="text-[14px]">₺ {price}</span>
    </div>
  );
}
