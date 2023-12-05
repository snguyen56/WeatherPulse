import { useEffect, useRef, useState } from "react";
import { location } from "../hooks/useWeatherData";

type Props = {
  setLocationData: React.Dispatch<React.SetStateAction<location>>;
};

type geocode = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin3_id: number;
  admin4_id: number;
  timezone: string;
  population: number;
  postcodes: number[];
  country_id: number;
  country: string;
  admin1: string;
  admin3: string;
  admin4: string;
};

export default function SearchBar({ setLocationData }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [search, SetSearch] = useState<string>("");
  const [locations, setLocations] = useState<geocode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const dropdownRef = useRef<HTMLFormElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (search.length > 1) {
        setLoading(true);
        fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`,
        )
          .then((response) => response.json())
          .then((data) => {
            setLocations(data.results);
            setLoading(false);
          })
          .catch((error) => console.error("Error getting locations: ", error));
      }
    }, 300);

    return () => clearTimeout(getData);
  }, [search]);

  function handleClick(city: string, latitude: number, longitude: number) {
    const data = { city: city, latitude: latitude, longitude: longitude };
    localStorage.setItem("location", JSON.stringify(data));
    setLocationData(data);
    SetSearch("");
    setSelectedIndex(0);
    setLocations([]);
  }

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      selectedIndex === 0
        ? setSelectedIndex(locations.length - 1)
        : setSelectedIndex((previousIndex) => previousIndex - 1);
    } else if (event.key === "ArrowDown") {
      selectedIndex === locations.length - 1
        ? setSelectedIndex(0)
        : setSelectedIndex((previousIndex) => previousIndex + 1);
    } else if (event.key === "Escape") {
      searchRef.current?.blur();
      setOpen(false);
    } else if (event.key === "Home") {
      setSelectedIndex(0);
    } else if (event.key === "End") {
      setSelectedIndex(locations.length - 1);
    }
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    handleClick(
      locations[selectedIndex].name,
      locations[selectedIndex].latitude,
      locations[selectedIndex].longitude,
    );
    searchRef.current?.blur();
    setOpen(false);
    setLocations([]);
  }

  return (
    <form className="relative w-full" ref={dropdownRef} onSubmit={handleSubmit}>
      <input
        className="w-full rounded p-2 focus:outline-none focus:ring focus:ring-slate-400"
        type="text"
        value={search}
        placeholder="Search for a location..."
        ref={searchRef}
        onChange={(e) => {
          SetSearch(e.target.value);
          setSelectedIndex(0);
        }}
        onKeyDown={(e) => handleKeydown(e)}
        onFocus={() => setOpen(true)}
        tabIndex={0}
      />
      <ul
        className={`absolute top-11 z-50 w-full divide-y rounded-xl border border-slate-300 bg-white p-2 ${
          open && (locations?.length > 0 || loading) ? "" : "hidden"
        }`}
      >
        {loading ? (
          <li>
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
          </li>
        ) : (
          locations?.map((data, index) => (
            <li
              className={`cursor-pointer p-2 ${
                selectedIndex === index ? "bg-slate-100" : ""
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                handleClick(data.name, data.latitude, data.longitude);
                setOpen(false);
              }}
              key={data.id}
              tabIndex={index + 1}
            >
              <p>{data.name}</p>
              <p className="text-sm text-slate-500">
                {data.admin1} ({data.latitude}°, {data.longitude}°)
              </p>
            </li>
          ))
        )}
      </ul>
    </form>
  );
}
