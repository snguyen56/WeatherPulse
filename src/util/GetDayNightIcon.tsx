import { WeatherCodes } from "./WeatherCodes";

export default function GetDayNightIcon(isDay: number, weatherCode: number) {
  if (isDay === 1) {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.dayIcon;
  } else {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.nightIcon;
  }
}

export function hourlyDayNightIcons(
  sunrise: string,
  sunset: string,
  time: string,
  weatherCode: number,
) {
  const currentTime = new Date(time).getTime();
  if (
    currentTime > new Date(sunrise).getTime() &&
    new Date(sunset).getTime() > currentTime
  ) {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.dayIcon;
  } else {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.nightIcon;
  }
}
