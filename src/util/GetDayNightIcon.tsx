import { WeatherCodes } from "./WeatherCodes";

export default function GetDayNightIcon(isDay: number, weatherCode: number) {
  if (isDay === 1) {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.dayIcon;
  } else {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.nightIcon;
  }
}

export function hourlyDayNightIcons(
  sunset: string,
  time: string,
  weatherCode: number,
) {
  if (new Date(sunset).getTime() > new Date(time).getTime()) {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.dayIcon;
  } else {
    return WeatherCodes.find(({ code }) => code === weatherCode)?.nightIcon;
  }
}
