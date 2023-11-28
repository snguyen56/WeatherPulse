import CurrentWeather from "./components/layouts/CurrentWeather";
import Forecast from "./components/layouts/Forecast";
function App() {
  return (
    <main className="flex h-screen w-screen flex-col lg:flex-row">
      <CurrentWeather />
      <Forecast />
    </main>
  );
}

export default App;
