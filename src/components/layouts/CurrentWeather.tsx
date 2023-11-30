import Logo from "../../assets/logo.svg";
import Card from "../Card";
import {
  WiHumidity,
  WiRain,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { WeatherCodes } from "../../util/WeatherCodes";

type Props = {
  weatherData: any;
};

export default function CurrentWeather({ weatherData }: Props) {
  const [city, setCity] = useState<string>("Atlanta");

  const currentData = [
    {
      title: "Feels Like",
      icon: <WiThermometer />,
      data: weatherData.current.apparent_temperature,
    },
    {
      title: "Humidity",
      icon: <WiHumidity />,
      data: weatherData.current.relative_humidity_2m,
    },
    {
      title: "Precipitation",
      icon: <WiRain />,
      data: weatherData.current.precipitation,
    },
    {
      title: "Wind Speed",
      icon: <WiStrongWind />,
      data: weatherData.current.wind_speed_10m,
    },
  ];

  useEffect(() => {
    function checkLocalStorage() {
      const data = localStorage.getItem("location");

      if (data) {
        setCity(data);
        console.log("City is: ", data);
      }
    }

    window.addEventListener("storage", checkLocalStorage);

    return () => {
      window.removeEventListener("storage", checkLocalStorage);
    };
  }, []);

  return (
    <section className="flex h-2/4 flex-col p-5 lg:h-screen lg:w-1/4">
      <div className="flex min-h-[100px] w-full justify-center">
        <img src={Logo} alt="WeatherPulse Logo" />
      </div>
      <div className="mb-5 flex flex-col items-center gap-2 text-center">
        <h2 className="text-4xl">{city}</h2>
        <div className="flex items-center">
          <IconContext.Provider value={{ size: "175" }}>
            {
              WeatherCodes.find(
                ({ code }) => code === weatherData.current.weather_code,
              )?.dayIcon
            }
          </IconContext.Provider>
          <p className="pb-5 text-9xl">50°</p>
        </div>
        <p className="text-4xl">
          {
            WeatherCodes.find(
              ({ code }) => code === weatherData.current.weather_code,
            )?.description
          }
        </p>
        <div className="flex w-1/2 justify-around">
          <p>H:50</p>
          <p>L:50</p>
        </div>
      </div>
      <IconContext.Provider value={{ size: "50" }}>
        <Card className="mb-5 flex justify-around gap-5 bg-slate-300 p-5 text-center">
          <div>
            <h2>Sunrise</h2>
            <div className="flex items-start justify-center gap-2">
              <WiSunrise /> <p className="text-4xl">5:00 AM</p>
            </div>
          </div>
          <div>
            <h2>Sunset</h2>
            <div className="flex items-start justify-center gap-2">
              <WiSunset /> <p className="text-4xl">5:00 PM</p>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {currentData.map((data) => (
            <Card className="h-36 bg-slate-300 p-4" key={data.title}>
              <h2>{data.title}</h2>
              <div className="mt-4 flex items-start gap-2">
                {data.icon}
                <p className="text-4xl">{data.data}</p>
              </div>
            </Card>
          ))}
        </div>
      </IconContext.Provider>
    </section>
  );
}
