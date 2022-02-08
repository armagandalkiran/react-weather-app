import { useWeather } from "../../context/WeatherContext";
import React from "react";
import "./style.css";

const Weather = () => {
  const { data } = useWeather();

  const getDay = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString("en-US", { weekday: "long" })
  }

  console.log("Weather.js rendered !");
  return <div className="container--weather">
    {data.list !== undefined && data.list.map((item, index) => {
      return (
        <ul className="weather--items" key={index}>
          <li className="weather--item">{parseInt(item.main.temp_min)}° <span>{parseInt(item.main.temp_max)}°</span></li>
          <img className="weather--item" alt={index + " icon"} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
          <li className="weather--item">{item.dt_txt.substring(10,19)}</li>
          <li className="weather--item">{getDay(item.dt_txt.substring(0, 10))}</li>
        </ul>
      )
    })}
  </div>;
};

export default React.memo(Weather);
