import { createContext, useState, useContext } from "react";

const weatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [data,setData] = useState({});

    const values = {data,setData}

    return <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
}

export const useWeather = () => useContext(weatherContext);