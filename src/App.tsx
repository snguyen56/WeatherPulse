import CurrentWeather from "./components/layouts/CurrentWeather";
import Forecast from "./components/layouts/Forecast";
import useWeatherData from "./hooks/useWeatherData";

function App() {
  const { weatherData, locationData, setLocationData } = useWeatherData();
  return (
    <main className="flex h-screen w-screen flex-col antialiased lg:flex-row">
      <h1 className="sr-only">Weather Forecast</h1>
      {weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} city={locationData?.city} />
          <Forecast
            weatherData={weatherData}
            setLocationData={setLocationData}
          />
        </>
      )}
    </main>
  );
}

export default App;
