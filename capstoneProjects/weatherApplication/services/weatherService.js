import axios from "axios";
import env from "dotenv";

env.config();
// const app=express();
// const port=3001;
const APIKey=process.env.API_KEY;

/*getting latitude and logitude */
async function getCoordinates(req) {
    if (req.body.location) {
        const placeName = req.body.location;
        const res = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&appid=${APIKey}`
        );
        return {
            latitude: res.data[0].lat,
            longitude: res.data[0].lon
        };
    }
    return {
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
}

/* get current weather*/
async function getCurrentWeather(latitude, longitude) {
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
    );
    return res;
}

/*get forecast*/
async function getForecast(latitude, longitude) {
    const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
    );
    return res;
}

export {
    getCoordinates,
    getCurrentWeather,
    getForecast
};