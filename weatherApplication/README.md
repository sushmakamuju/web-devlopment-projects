# 🌦️ Weather Application

A full-stack Node.js and Express-based weather application that allows users to search for any location and view real-time weather information along with a 5-day weather forecast. The project demonstrates API integration, backend processing, and server-side rendering using EJS.

---

## 📌 Project Overview

This Weather Application allows users to enter a place name and instantly view weather details for that location. 
1) The application converts the place name into geographic coordinates, 
2) fetches weather data from an external API,
3) processes the data on the server, 
4) and renders the results dynamically on the web page.
---

## ✨ Features

- 🌍 Search weather by city or place name  
- ☁️ Display real-time weather information  
- 📅 Show 5-day / 3-hour weather forecast  
- 🌅 Convert sunrise and sunset time to IST  
- ⏱️ Calculate day and night duration  
- 🖼️ Display weather icons dynamically  
- 💬 Show random weather-based motivational quotes  
- 🖥️ Server-side rendered user interface using EJS  

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- EJS (Embedded JavaScript Templates)
- HTML
- CSS

### Libraries & Tools
- Axios – for making HTTP requests to external APIs  
- dotenv – for managing environment variables  
- body-parser – for handling form submissions  

### External API
- OpenWeatherMap API


## 📁 Project Structure
```
weather-application/
├── index.js                     # App entry point (Express server)
├── package.json
├── package-lock.json
├── .env                         # Environment variables
├── .gitignore
│
├── views/                       # EJS templates
│   ├── home.ejs                 # Home page (location input)
│   ├── weather.ejs              # Main weather dashboard
│   └── partials/                # Reusable UI components
│       ├── weatherExtras.ejs    # Rain / snow conditions
│       ├── currentStats.ejs     # Temp, pressure, humidity, wind, clouds
│       ├── dayNight.ejs         # Sunrise, sunset, day & night duration
│       └── Forecast.ejs   # Hourly chart (Chart.js)
│
├── public/                      # Static assets
│   ├── css/                     # Stylesheets
│   └── images/                  # Images & icons
│
├── services/                    # External API logic
│   └── weatherService.js        # OpenWeather API calls
│
├── utils/                       # Pure helper / formatting logic
│   ├── time.js                  # Date & time formatting
│   ├── quotes.js                # Random quotes
│   ├── weatherData.js           # Weather data transformation
│   └── duration.js              # Day & night duration logic


```
---

## ⚙️ How the Application Works

1. The user opens the application and enters a location name on the home page.
2. The form submits the location to the `/placeName` route using a POST request.
3. The server calls the OpenWeather "Geocoding API" to convert the place name into latitude and longitude.
4. Using the obtained coordinates, the application’s backend sends API requests to:
   - Current weather data
   - 5-day weather forecast data
5. The received weather data is processed on the server:
   - Sunrise and sunset times are converted from Unix format to IST
   - Day and night duration is calculated
   - Current date and time are generated
   - A random motivational quote is selected
6. All processed data is passed to the EJS template and rendered dynamically on the results page.


---

## 🔑 Environment Setup

This project uses environment variables to keep sensitive information secure.

Create a `.env` file in the root directory and add the following:

(inside .env file)
API_KEY=your_openweathermap_api_key

You can obtain the API key from:
https://openweathermap.org/api

## 🌐 APIs Used

This project uses the OpenWeatherMap API suite to fetch location and weather-related data.

Geocoding API is used to convert a place name entered by the user into latitude and longitude coordinates.  
http://api.openweathermap.org/geo/1.0/direct

Current Weather API is used to fetch real-time weather details such as temperature, weather conditions, sunrise, and sunset timings for a given location.  
https://api.openweathermap.org/data/2.5/weather

5-Day Forecast API is used to retrieve weather forecast data for the next five days at three-hour intervals, which is displayed on the results page.  
https://api.openweathermap.org/data/2.5/forecast


## ▶️ How to Run the Project Locally

Clone the repository or download the source code to your local machine. Navigate to the project directory and install all required dependencies using:

npm install

Create a `.env` file in the root directory and add your OpenWeatherMap API key as shown below:

API_KEY=your_openweathermap_api_key

After setting up the environment variables, start the server using:

node index.js

Once the server is running, open your browser and visit:

http://localhost:3000


## 📌 Important Notes

- The `.env` file is required for the application to run and must contain a valid OpenWeatherMap API key.
- The `.env` file is intentionally excluded from version control using `.gitignore` to protect sensitive information.
- The application runs on port `3000` by default.
- The project uses ES Modules (`"type": "module"` in `package.json`), so `import` syntax is used instead of `require`.
- Make sure Node.js is installed on your system before running the project.

## 🧠 Key Technical Highlights

- Implemented a backend server using Express.js  
- Handled user input via POST requests and server-side routing  
- Integrated third-party APIs using Axios for real-time data retrieval  
- Managed sensitive configuration using environment variables  
- Rendered dynamic views using EJS templates  
- Processed date, time, and timezone data on the server  
- Designed a clear data flow from user input to backend processing and UI rendering  


## 🚀 Future Improvements

- Add user-friendly error handling for invalid locations or API failures  
- Improve UI responsiveness and overall design  
- Add loading indicators while fetching data  
- Implement automatic location detection  
- Add test cases for better reliability  

---

## 👩‍💻 Author
Sushma Kamuju 
Computer Science Graduate | IIT Palakkad,Kerala | Engineer
