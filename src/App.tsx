import CurrentWeather from "./components/layouts/CurrentWeather";
import Forecast from "./components/layouts/Forecast";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const { weatherData } = useWeatherData();
  console.log(weatherData);
  return (
    <main className="flex h-screen w-screen flex-col lg:flex-row">
      <h1 className="sr-only">Weather Forecast</h1>
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} />
          <Forecast weatherData={weatherData} />
        </>
      )}
    </main>
  );
}

export default App;
