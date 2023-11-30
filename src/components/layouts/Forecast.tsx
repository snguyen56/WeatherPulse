import Card from "../Card";
import SearchBar from "../SearchBar";
import { WeatherCodes } from "../../util/WeatherCodes";
import { IconContext } from "react-icons";

type Props = {
  weatherData: any;
};

export default function Forecast({ weatherData }: Props) {
  return (
    <section className="flex-1 bg-background px-10 py-5">
      <SearchBar />
      <h2 className="mb-4 mt-20 text-4xl font-bold">Hourly Forecast</h2>
      <Card className="flex justify-between gap-1 overflow-hidden bg-primary p-2 px-8">
        <IconContext.Provider value={{ size: "50" }}>
          {weatherData.hourly.time
            .slice(0, 15)
            .map((time: string, index: number) => (
              <div className="flex flex-col gap-1 text-center" key={time}>
                <h3 className="mb-2 font-bold">
                  {new Date(time).toLocaleTimeString([], { hour: "2-digit" })}
                </h3>
                {
                  WeatherCodes.find(
                    ({ code }) =>
                      code === weatherData.hourly.weather_code[index],
                  )?.dayIcon
                }
                <p>{weatherData.hourly.temperature_2m[index]}</p>
              </div>
            ))}
        </IconContext.Provider>
      </Card>
      <h2 className="mb-4 mt-8 text-4xl font-bold ">Daily Forecast</h2>
      <Card className="bg-primary p-4">
        <IconContext.Provider value={{ size: "50" }}>
          <table className="w-full table-auto text-xl">
            <thead>
              <tr className="text-left">
                <th>Weekday</th>
                <th>Weather</th>
                <th>Rain</th>
                <th>High</th>
                <th>Low</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.daily.time.map((day: string, index: number) => (
                <tr className="border-t border-black">
                  <td>{day}</td>
                  <td>
                    {
                      WeatherCodes.find(
                        ({ code }) =>
                          code === weatherData.daily.weather_code[index],
                      )?.dayIcon
                    }
                  </td>
                  <td>
                    {weatherData.daily.precipitation_probability_max[index]}
                  </td>
                  <td>{weatherData.daily.temperature_2m_max[index]}</td>
                  <td>{weatherData.daily.temperature_2m_min[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </IconContext.Provider>
      </Card>
    </section>
  );
}
