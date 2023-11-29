import {
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiMoonWaxingCrescent4,
  WiNightAltCloudy,
  WiNightFog,
} from "react-icons/wi";

// template
// {
//     code: ,
//     description: "",
//     dayIcon: ,
//     nightIcon: ,
//   },

export const WeatherCodes = [
  {
    code: 0,
    description: "Clear Sky",
    dayIcon: <WiDaySunny />,
    nightIcon: <WiMoonWaxingCrescent4 />,
  },
  {
    code: 1,
    description: " 	Mainly Clear",
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
    description: "depositing rime fog",
    dayIcon: <WiDayFog />,
    nightIcon: <WiNightFog />,
  },
];
