import Card from "../Card";
import SearchBar from "../SearchBar";
import { WeatherCodes } from "../../util/WeatherCodes";
import { IconContext } from "react-icons";
import { location, weatherData } from "../../hooks/useWeatherData";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  weatherData: weatherData;
  setLocationData: React.Dispatch<React.SetStateAction<location>>;
};

export default function Forecast({ weatherData, setLocationData }: Props) {
  const dragRef = useRef<HTMLDivElement>(null);
  return (
    <section className="rounded-t-xl bg-background px-10 py-8 lg:w-3/4 lg:rounded-none">
      <SearchBar setLocationData={setLocationData} />
      <h2 className="mb-4 mt-20 text-4xl font-bold">Hourly Forecast</h2>

      <Card
        className="flex cursor-grab overflow-hidden bg-primary text-lg"
        reference={dragRef}
      >
        <IconContext.Provider value={{ size: "50" }}>
          <motion.div
            className="flex gap-10 p-2 px-8"
            drag="x"
            dragConstraints={dragRef}
            whileTap={{ cursor: "grabbing" }}
          >
            {weatherData.hourly.time
              .slice(0, 25)
              .map((time: string, index: number) => (
                <div
                  className="flex min-w-max flex-col gap-1 text-center"
                  key={time}
                >
                  <h3 className="mb-2 font-bold">
                    {new Date(time).toLocaleTimeString([], { hour: "2-digit" })}
                  </h3>
                  {
                    WeatherCodes.find(
                      ({ code }) =>
                        code === weatherData.hourly.weather_code[index],
                    )?.dayIcon
                  }
                  <p>{weatherData.hourly.temperature_2m[index]}°</p>
                </div>
              ))}
          </motion.div>
        </IconContext.Provider>
      </Card>
      <h2 className="mb-4 mt-8 text-4xl font-bold ">7-Day Forecast</h2>
      <Card className="bg-primary p-4">
        <IconContext.Provider value={{ size: "50" }}>
          <table className="w-full table-auto text-xl">
            <thead>
              <tr className="text-left">
                <th>Weekday</th>
                <th>Weather</th>
                <th>Rain</th>
                <th>Low</th>
                <th>High</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.daily.time.map((day: string, index: number) => (
                <tr className="border-t border-black" key={day}>
                  <td>
                    {new Intl.DateTimeFormat([], {
                      weekday: "long",
                    }).format(new Date(`${day}T00:00`))}
                  </td>
                  <td>
                    {
                      WeatherCodes.find(
                        ({ code }) =>
                          code === weatherData.daily.weather_code[index],
                      )?.dayIcon
                    }
                  </td>
                  <td>
                    {weatherData.daily.precipitation_probability_max[index]}%
                  </td>
                  <td>{weatherData.daily.temperature_2m_min[index]}°</td>
                  <td>{weatherData.daily.temperature_2m_max[index]}°</td>
                </tr>
              ))}
            </tbody>
          </table>
        </IconContext.Provider>
      </Card>
    </section>
  );
}
