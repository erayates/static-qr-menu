import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Search({
  onSearch,
}: {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event);
  };

  return (
    <input
      placeholder="Ürün ara..."
      className="w-full bg-transparent text-muted outline-none font-semibold placeholder:text-slate-600 placeholder:font-semibold rounded-lg px-4 py-3 my-4"
      style={{ boxShadow: "0 8px 12px hsla(0,0%,59%,.15)" }}
      onChange={(event) => handleChange(event)}
    ></input>
  );
}
