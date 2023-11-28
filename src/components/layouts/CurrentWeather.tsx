import Logo from "../../assets/logo.svg";
import Card from "../Card";
export default function CurrentWeather() {
  return (
    <section className="flex h-1/4 flex-col p-5 lg:h-screen lg:w-1/4">
      <div className="flex h-[100px] w-full justify-center overflow-hidden">
        <img className="w-full" src={Logo} alt="WeatherPulse Logo" />
      </div>
      <div className="text-center">
        <p>50</p>
        <p>clear</p>
        <div className="flex justify-around">
          <p>H:50</p>
          <p>L:50</p>
        </div>
      </div>
      <Card className="mb-5 flex justify-around bg-slate-300 p-5">
        <p>Sunrise</p>
        <p>Sunset</p>
      </Card>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Card className="h-36 bg-slate-300">Humidity</Card>
        <Card className="bg-slate-300">Humidity</Card>
        <Card className="bg-slate-300">Humidity</Card>
        <Card className="bg-slate-300">Humidity</Card>
      </div>
    </section>
  );
}
