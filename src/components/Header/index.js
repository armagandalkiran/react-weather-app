import { useWeather } from "../../context/WeatherContext";
import CityDatas from "../CityDatas";
import React, { useState } from "react";
import "./style.css";

const Header = () => {

  const [city, setCity] = useState("");
  const { setData } = useWeather();

  const handleClick = async () => {
    const result = await CityDatas(city);
    setData(result);
  }

  return <div className="header--container">
    <input className="header--input" type="text" value={city} onChange={({ target }) => setCity(target.value)} placeholder="Bir şehir ismi giriniz" />
    <button className="header--button" onClick={handleClick}>Hava durumunu göster</button>
  </div>;
};

export default React.memo(Header);