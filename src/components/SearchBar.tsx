import { useState } from "react";
import dummyData from "../data/geocoding.json";
import { location } from "../hooks/useWeatherData";

type Props = {
  setLocationData: React.Dispatch<React.SetStateAction<location>>;
};

export default function SearchBar({ setLocationData }: Props) {
  const [active, setActive] = useState<boolean>(true);

  function handleSubmit(city: string, latitude: number, longitude: number) {
    const data = { city: city, latitude: latitude, longitude: longitude };
    localStorage.setItem("location", JSON.stringify(data));
    setLocationData(data);
  }

  return (
    <form className="relative w-[400px]">
      <input
        className="w-full rounded p-2 focus:outline-none focus:ring focus:ring-slate-400"
        type="text"
        placeholder="Search for a location..."
        onChange={() => setActive(true)}
      />
      <ul
        className={`absolute top-10 w-full divide-y rounded-xl border border-slate-300 bg-white p-2 ${
          active ? "" : "hidden"
        }`}
      >
        {dummyData.results.map((data) => (
          <li
            className="cursor-pointer p-2 hover:bg-slate-100"
            onClick={() =>
              handleSubmit(data.name, data.latitude, data.longitude)
            }
            key={data.id}
          >
            <p>{data.name}</p>
            <p className="text-sm text-slate-500">
              {data.admin1} ({data.latitude}°, {data.longitude}°)
            </p>
          </li>
        ))}
      </ul>
    </form>
  );
}
