import { useState, useEffect } from "react";

export type location = {
  city: string;
  latitude: number;
  longitude: number;
};

export type weatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    is_day: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    precipitation_probability_max: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_probability_max: number[];
  };
};

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState<weatherData>();
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
    let ignore = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${locationData?.latitude}&longitude=${locationData?.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`,
    )
      .then((data) => data.json())
      .then((data) => {
        if (!ignore) {
          setWeatherData(data);
        }

        // console.log(
        //   `https://api.open-meteo.com/v1/forecast?latitude=${locationData?.latitude}&longitude=${locationData?.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`,
        //   );
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      ignore = true;
    };
  }, [locationData]);

  return { weatherData, locationData, setLocationData };
}
