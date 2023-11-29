import Logo from "../../assets/logo.svg";
import Card from "../Card";
import {
  WiDaySunny,
  WiHumidity,
  WiRain,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";
import { IconContext } from "react-icons";

type Props = {
  weatherData: any;
};

export default function CurrentWeather({ weatherData }: Props) {
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

  return (
    <IconContext.Provider value={{ size: "50" }}>
      <section className="flex h-1/4 flex-col p-5 lg:h-screen lg:w-1/4">
        <div className="flex h-[100px] w-full justify-center overflow-hidden">
          <img className="w-full" src={Logo} alt="WeatherPulse Logo" />
        </div>
        <div className="mb-5 flex flex-col items-center gap-2 text-center">
          <WiDaySunny size={150} />
          <p className="text-8xl">50°</p>
          <p className="text-4xl">clear</p>
          <div className="flex w-1/2 justify-around">
            <p>H:50</p>
            <p>L:50</p>
          </div>
        </div>
        <Card className="mb-5 flex justify-around bg-slate-300 p-5 text-center">
          <div>
            <h2>Sunrise</h2>
            <div className="flex items-start justify-center gap-2">
              <WiSunrise /> <p className="text-4xl">5:00</p>
            </div>
          </div>
          <div>
            <h2>Sunset</h2>
            <div className="flex items-start justify-center gap-2">
              <WiSunset /> <p className="text-4xl">5:00</p>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {currentData.map((data) => (
            <Card className="relative h-36 bg-slate-300 p-4">
              <h2>{data.title}</h2>
              <div className="mt-4 flex items-start gap-2">
                {data.icon}
                <p className="text-4xl">{data.data}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </IconContext.Provider>
  );
}
