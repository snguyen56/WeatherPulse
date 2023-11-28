import { useState, useEffect } from "react";

export default function useWeatherData() {
  const [weatherData, setWeatherData]: any = useState();

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto",
    )
      .then((data) => data.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);

  return { weatherData };
}
