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
      <Card className="flex gap-1 bg-primary p-2"></Card>
      <h2 className="mb-4 text-4xl font-bold ">Daily Forecast</h2>
      <Card className="bg-primary p-2">
        <IconContext.Provider value={{ size: "50" }}>
          <table className="w-full table-auto text-xl">
            <thead>
              <tr className="text-left">
                <th>Weekday</th>
                <th>Weather</th>
                <th>Rain Probability</th>
                <th>High</th>
                <th>Low</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-black">
                <td>Monday</td>
                <td>{WeatherCodes.find(({ code }) => code === 0)?.dayIcon}</td>
                <td>50%</td>
                <td>50°</td>
                <td>50°</td>
              </tr>
            </tbody>
          </table>
        </IconContext.Provider>
      </Card>
    </section>
  );
}
