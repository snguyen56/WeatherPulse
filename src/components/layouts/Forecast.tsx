import Card from "../Card";
import SearchBar from "../SearchBar";

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
        <table className="table-auto">
          <thead>
            <tr>
              <th>Weekday</th>
              <th>Weather</th>
              <th>Rain Probability</th>
              <th>High</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td></td>
              <td>50%</td>
              <td>50°</td>
              <td>50°</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </section>
  );
}