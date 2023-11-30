import {
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDayRainMix,
  WiDayShowers,
  WiDaySleet,
  WiDaySnow,
  WiDaySnowThunderstorm,
  WiDaySprinkle,
  WiDayStormShowers,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayThunderstorm,
  WiMoonWaxingCrescent4,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltShowers,
  WiNightAltSleet,
  WiNightAltSnow,
  WiNightAltSnowThunderstorm,
  WiNightAltSprinkle,
  WiNightAltThunderstorm,
  WiNightFog,
  WiNightRainMix,
  WiNightStormShowers,
} from "react-icons/wi";

export const WeatherCodes = [
  {
    code: 0,
    description: "Clear Sky",
    dayIcon: <WiDaySunny />,
    nightIcon: <WiMoonWaxingCrescent4 />,
  },
  {
    code: 1,
    description: "Mainly Clear",
    dayIcon: <WiDaySunny />,
    nightIcon: <WiMoonWaxingCrescent4 />,
  },
  {
    code: 2,
    description: "Partly Cloudy",
    dayIcon: <WiDaySunnyOvercast />,
    nightIcon: <WiNightAltCloudy />,
  },
  {
    code: 3,
    description: "Overcast",
    dayIcon: <WiDayCloudy />,
    nightIcon: <WiNightAltCloudy />,
  },
  {
    code: 45,
    description: "Fog",
    dayIcon: <WiDayFog />,
    nightIcon: <WiNightFog />,
  },
  {
    code: 48,
    description: "Depositing Rime Fog",
    dayIcon: <WiDayFog />,
    nightIcon: <WiNightFog />,
  },
  {
    code: 51,
    description: "Light Drizzle",
    dayIcon: <WiDaySprinkle />,
    nightIcon: <WiNightAltSprinkle />,
  },
  {
    code: 53,
    description: "Moderate Drizzle",
    dayIcon: <WiDaySprinkle />,
    nightIcon: <WiNightAltSprinkle />,
  },
  {
    code: 55,
    description: "Dense Drizzle",
    dayIcon: <WiDaySprinkle />,
    nightIcon: <WiNightAltSprinkle />,
  },
  {
    code: 56,
    description: "Light Freezing Drizzle",
    dayIcon: <WiDaySprinkle />,
    nightIcon: <WiNightAltSprinkle />,
  },
  {
    code: 57,
    description: "Dense Freezing Drizzle",
    dayIcon: <WiDaySprinkle />,
    nightIcon: <WiNightAltSprinkle />,
  },
  {
    code: 61,
    description: "Slight Rain",
    dayIcon: <WiDayRain />,
    nightIcon: <WiNightAltRain />,
  },
  {
    code: 63,
    description: "Moderate Rain",
    dayIcon: <WiDayRain />,
    nightIcon: <WiNightAltRain />,
  },
  {
    code: 65,
    description: "Heavy Rain",
    dayIcon: <WiDayRain />,
    nightIcon: <WiNightAltRain />,
  },
  {
    code: 66,
    description: "Light Freezing Rain",
    dayIcon: <WiDaySleet />,
    nightIcon: <WiNightAltSleet />,
  },
  {
    code: 67,
    description: "Heavy Freezing Rain",
    dayIcon: <WiDaySleet />,
    nightIcon: <WiNightAltSleet />,
  },
  {
    code: 71,
    description: "Slight Snow Fall",
    dayIcon: <WiDaySnow />,
    nightIcon: <WiNightAltSnow />,
  },
  {
    code: 73,
    description: "Moderate Snow Fall",
    dayIcon: <WiDaySnow />,
    nightIcon: <WiNightAltSnow />,
  },
  {
    code: 75,
    description: "Heavy Snow Fall",
    dayIcon: <WiDaySnow />,
    nightIcon: <WiNightAltSnow />,
  },
  {
    code: 77,
    description: "Snow Grains",
    dayIcon: <WiDaySnow />,
    nightIcon: <WiNightAltSnow />,
  },
  {
    code: 80,
    description: "Slight Rain Showers",
    dayIcon: <WiDayShowers />,
    nightIcon: <WiNightAltShowers />,
  },
  {
    code: 81,
    description: "Moderate Rain Showers",
    dayIcon: <WiDayShowers />,
    nightIcon: <WiNightAltShowers />,
  },
  {
    code: 82,
    description: "Violent Rain Showers",
    dayIcon: <WiDayStormShowers />,
    nightIcon: <WiNightStormShowers />,
  },
  {
    code: 85,
    description: "Slight Snow Showers",
    dayIcon: <WiDayRainMix />,
    nightIcon: <WiNightRainMix />,
  },
  {
    code: 86,
    description: "Heavy Snow Showers",
    dayIcon: <WiDayRainMix />,
    nightIcon: <WiNightRainMix />,
  },
  {
    code: 95,
    description: "Thunderstorm",
    dayIcon: <WiDayThunderstorm />,
    nightIcon: <WiNightAltThunderstorm />,
  },
  {
    code: 96,
    description: "Thunderstorm with Slight Hail",
    dayIcon: <WiDaySnowThunderstorm />,
    nightIcon: <WiNightAltSnowThunderstorm />,
  },
  {
    code: 99,
    description: "Thunderstorm with Heavy Hail",
    dayIcon: <WiDaySnowThunderstorm />,
    nightIcon: <WiNightAltSnowThunderstorm />,
  },
];
