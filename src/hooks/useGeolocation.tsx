import { useEffect, useState } from "react";

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

export default function useGeolocation(search: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [locations, setLocations] = useState<geocode[]>([]);

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

  return { locations, setLocations, loading };
}
