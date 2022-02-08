import axios from "axios";

const CityDatas = async (city_name) => {

    const getCurrentWeather = () => {
        return new Promise(async (resolve, reject) => {
            const { data: weather } = await axios(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&lang=tr&units=metric&appid=4baaa21e13e7efa17a132300e569b937`)
            resolve(weather);
        });
    }


    const result = await (async () => {
        try {
            const weathers = await getCurrentWeather();
            return weathers;
        } catch (e) {
            console.log("hata")
        }
    })();

    return result;
}

export default CityDatas;