import { useState } from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <form className="relative w-[400px]">
      <input
        className="w-full rounded p-2 focus:outline-none focus:ring focus:ring-slate-400"
        type="text"
        placeholder="Search for a location..."
        onChange={() => setActive(true)}
      />
      <ul
        className={`absolute top-10 w-full rounded-xl border border-slate-300 bg-white p-2 ${
          active ? "" : "hidden"
        }`}
      >
        <li className="hover:bg-slate-100">hello world</li>
        <li className="hover:bg-slate-100">hello world</li>
        <li className="hover:bg-slate-100">hello world</li>
        <li className="hover:bg-slate-100">hello world</li>
      </ul>
    </form>
  );
}
