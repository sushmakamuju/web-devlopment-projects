import express from "express";
import dotenv from "dotenv";

import {
  getCoordinates,
  getCurrentWeather,
  getForecast
} from "./services/weatherService.js";

import { getQuote } from "./utils/quotes.js";
import { weatherData } from "./utils/weatherData.js";
import { duration } from "./utils/duration.js";
import { f } from "./utils/time.js";

dotenv.config();

const app = express();
const port = 3001;

/* ---------------- middleware ---------------- */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

/* ---------------- routes ---------------- */

// home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// weather result
app.post("/placeName", async (req, res) => {
  try {
    // 1️⃣ get coordinates
    const { latitude, longitude } = await getCoordinates(req);

    // 2️⃣ fetch weather data
    const currentRes = await getCurrentWeather(latitude, longitude);
    const forecastRes = await getForecast(latitude, longitude);

    // 3️⃣ icon
    const weatherIcon = `https://openweathermap.org/img/wn/${currentRes.data.weather[0].icon}@2x.png`;

    // 4️⃣ render
    res.render("index1.ejs", {
      weatherRightNow: weatherData(currentRes.data),
      weatherIcon,
      weather5Days: forecastRes.data,
      time: f(),
      quote: getQuote(),
      duration: duration(
        currentRes.data.sys.sunrise,
        currentRes.data.sys.sunset
      )
    });
  } catch (err) {
    console.error("Error processing weather request:", err.message);
    res.status(500).send("Something went wrong");
  }
});

/* ---------------- server ---------------- */
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
