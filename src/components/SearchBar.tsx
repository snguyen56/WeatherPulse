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
        {/* <li>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </li> */}
      </ul>
    </form>
  );
}
