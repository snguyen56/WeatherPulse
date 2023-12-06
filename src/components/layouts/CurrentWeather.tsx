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
import { WeatherCodes } from "../../util/WeatherCodes";
import { weatherData, location } from "../../hooks/useWeatherData";
import GetDayNightIcon from "../../util/GetDayNightIcon";
import SearchBar from "../SearchBar";

type Props = {
  weatherData: weatherData;
  city: string;
  setLocationData: React.Dispatch<React.SetStateAction<location>>;
};

export default function CurrentWeather({
  weatherData,
  city,
  setLocationData,
}: Props) {
  const currentData = [
    {
      title: "Feels Like",
      icon: <WiThermometer title="apparent temperature" />,
      data: `${weatherData.current.apparent_temperature}°`,
    },
    {
      title: "Humidity",
      icon: <WiHumidity title="humidity" />,
      data: `${weatherData.current.relative_humidity_2m}%`,
    },
    {
      title: "Precipitation",
      icon: <WiRain title="precipitation" />,
      data: `${weatherData.current.precipitation}"`,
    },
    {
      title: "Wind Speed",
      icon: <WiStrongWind title="wind speed" />,
      data: `${weatherData.current.wind_speed_10m}mph`,
    },
  ];

  return (
    <section className="flex h-3/5 flex-col p-5 lg:h-screen lg:w-1/4">
      <div className="flex min-h-[100px] w-full justify-center">
        <img src={Logo} alt="WeatherPulse Logo" />
      </div>
      <div className="mt-4 flex justify-center md:hidden">
        <span className="w-full rounded ring ring-slate-400">
          <SearchBar setLocationData={setLocationData} />
        </span>
      </div>
      <div className="my-4 flex flex-col items-center gap-2 text-center">
        <h2 className="w-full truncate text-4xl font-semibold">{city}</h2>
        <div className="flex items-center">
          <IconContext.Provider value={{ size: "175" }}>
            {GetDayNightIcon(
              weatherData.current.is_day,
              weatherData.current.weather_code,
            )}
          </IconContext.Provider>
          <p className="3xl:text-8xl pb-5 text-7xl lg:text-4xl xl:text-6xl 2xl:text-7xl">
            {weatherData.current.temperature_2m}°
          </p>
        </div>
        <p className="text-4xl">
          {
            WeatherCodes.find(
              ({ code }) => code === weatherData.current.weather_code,
            )?.description
          }
        </p>
        <div className="flex w-1/2 justify-around text-2xl font-medium">
          <p>{`H:${weatherData.daily.temperature_2m_max[0]}°`}</p>
          <p>{`L:${weatherData.daily.temperature_2m_min[0]}°`}</p>
        </div>
      </div>
      <IconContext.Provider value={{ size: "50" }}>
        <Card className="mb-5 hidden justify-around gap-5 bg-slate-300 p-5 text-center lg:flex">
          <div>
            <h2>Sunrise</h2>
            <div className="flex items-start justify-center gap-2">
              <span className="hidden 2xl:block">
                <WiSunrise title="sunrise" />
              </span>
              <p className="3xl:text-3xl pt-1 lg:text-2xl xl:text-3xl 2xl:text-2xl">
                {new Date(weatherData.daily.sunrise[0])
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .replace(/\s+/, "")}
              </p>
            </div>
          </div>
          <div>
            <h2>Sunset</h2>
            <div className="flex items-start justify-center gap-2">
              <span className="hidden 2xl:block">
                <WiSunset title="sunset" />
              </span>
              <p className="3xl:text-3xl pt-1 lg:text-2xl xl:text-3xl 2xl:text-2xl">
                {new Date(weatherData.daily.sunset[0])
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .replace(/\s+/, "")}
              </p>
            </div>
          </div>
        </Card>
        <div className="hidden grid-cols-2 grid-rows-2 gap-4 lg:grid">
          {currentData.map((data) => (
            <Card className="h-36 bg-slate-300 p-4" key={data.title}>
              <h2>{data.title}:</h2>
              <div className="mt-4 flex items-start gap-2">
                <span className="3xl:block hidden">{data.icon}</span>
                <p className="3xl:text-4xl lg:text-2xl xl:text-3xl">
                  {data.data}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </IconContext.Provider>
    </section>
  );
}
