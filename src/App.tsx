import CurrentWeather from "./components/layouts/CurrentWeather";
import Forecast from "./components/layouts/Forecast";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const { weatherData } = useWeatherData();
  console.log(weatherData);
  return (
    <main className="flex h-screen w-screen flex-col lg:flex-row">
      <CurrentWeather weatherData={weatherData} />
      <Forecast weatherData={weatherData} />
    </main>
  );
}

export default App;
