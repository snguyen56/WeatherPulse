import { useState, useEffect } from "react";

export type location = {
  city: string;
  latitude: number;
  longitude: number;
};

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState();
  const [locationData, setLocationData] = useState<location>({
    city: "Berlin",
    latitude: 52.52,
    longitude: 13.41,
  });

  useEffect(() => {
    function checkLocalStorage() {
      const data = localStorage.getItem("location");
      if (data) {
        setLocationData(JSON.parse(data));
      }
    }
    checkLocalStorage();
    window.addEventListener("storage", checkLocalStorage);

    return () => {
      window.removeEventListener("storage", checkLocalStorage);
    };
  }, []);

  useEffect(() => {
    let active = true;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${locationData?.latitude}&longitude=${locationData?.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`,
    )
      .then((data) => data.json())
      .then((data) => {
        if (active) {
          setWeatherData(data);
        }

        // console.log(
        //   `https://api.open-meteo.com/v1/forecast?latitude=${locationData?.latitude}&longitude=${locationData?.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`,
        // );
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      active = false;
    };
  }, [locationData]);

  return { weatherData, locationData, setLocationData };
}
