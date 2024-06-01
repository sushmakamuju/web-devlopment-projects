import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";
import fs from "fs";
import env from "dotenv";
env.config();
const app=express();
const port=3000;
const APIKey=process.env.API_KEY;
function f()
{
  var result;
  var x= new Date();
  var y=x.getDay();
  switch (y) {
    case 0:
        y = "Sunday";
        break;
    case 1:
        y = "Monday";
        break;
    case 2:
        y = "Tuesday";
        break;
    case 3:
        y = "Wednesday";
        break;
    case 4:
        y = "Thursday";
        break;
    case 5:
        y = "Friday";
        break;
    case 6:
        y = "Saturday";
        break;
    default:
        y = "Invalid day"; // Optional: handle cases where y is not 0-6
        break;
}

  var month=x.getMonth();
  switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
    default:
        month = "Invalid month"; // Optional: handle cases where month is not 0-11
        break;
}
var hours=x.getHours()+1;
if(hours>12)
  {
    hours=hours-12;
    var t="PM";
  }
var minutes=x.getMinutes()+1;
var date=x.getDate();
result=date+" "+month+", "+hours+" : "+minutes;
if(t)
  {
    result=result+t;
  }else{
    result=result+"AM";
  }
  return y+", "+result;
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
// step1:taking name of place from user, then sending it to the api to get latitude and longitude
// step2: should render a form which takes the place from user
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
//step3 send the received country to get the latitude and longitude of the place !will implement later country name to latitude, longitude
app.post("/placeName",async(req,res)=>{
    // all the required variables 
    var placeName,longitude,latitude;
    var response1,response2,lonLat;
    // getting longitude and latitude basing on the location 
    if(req.body.location)
        {
             placeName=req.body.location;
            try{
                lonLat=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&appid=${APIKey}`);
                longitude=lonLat.data[0].lon;
                latitude=lonLat.data[0].lat;
            }catch(err)
            {
                console.error("error occured",err.stack);
            }
        }else
        {
             latitude=req.body.latitude;
             longitude=req.body.longitude;
        }
        // getting current weather details 
    try{
        response1=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`);
     
        }catch(err)
       {
        console.error("error accessing your the weather right now",err.stack);
       }

    //this is the weather icon link (right now)
    var weatherIcon=`https://openweathermap.org/img/wn/${response1.data.weather[0].icon}@2x.png`;

    
    //forecast for 5 days for every 3hours
    try
    {
     response2=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);

    }catch(err)
    {
        console.error("error occured while trying to get 5 day weather forecast",err.message);
    }
    res.render("index1.ejs",
    {
        weatherRightNow:weatherData(response1.data),
        weatherIcon:weatherIcon,
        weather5Days:response2.data,
        time:f(),
        quote:getQuote(),
        duration:duration(response1.data.sys.sunrise,response1.data.sys.sunset)
    }
);
});

app.listen(port,()=>{
    console.log(`running on the port ${port}`);
});
//while maing api call it is important to keep "https://" before it otherwise the connection with that server wont happen
const quotes = [
    "Every storm whispers secrets of resilience.",
    "After every tempest, nature paints a canvas of hope.",
    "In the heart of winter, the promise of spring lies in wait.",
    "Even the darkest night yields to the gentle embrace of dawn.",
    "Laughter, a sunbeam that pierces the clouds of gloom.",
    "Carry your radiance wherever you roam, a beacon in life's shadows.",
    "Rainfall, nature's joyful tears, adorning the earth in celebration.",
    "Within every tempest, serenity finds its refuge.",
    "Life's melody dances in the rhythm of raindrops.",
    "Some find solace in the rain's embrace, while others simply revel in its song.",
    "Sunshine, nature's elixir, imbuing life with warmth and vitality.",
    "Through storms, roots deepen, anchoring life's journey.",
    "The heavens, an artist's palette, painting dreams in hues of azure.",
    "When skies weep, seek solace in the promise of celestial wonders."
];

function getQuote()
{
    return quotes[Math.floor(Math.random()*quotes.length)];
}
// weatherRightNow:response1.data,
// weatherRightNow.sys.sunrise
function weatherData(x)
{
    x.sys.sunrise=convertUnixToIST(x.sys.sunrise);
    x.sys.sunset=convertUnixToIST(x.sys.sunset);
    return x;
}
function convertUnixToIST(unixTimestamp) {
    // Create a new Date object using the Unix timestamp (milliseconds)
    let date = new Date(unixTimestamp * 1000);

    // Get the UTC hours, minutes, and seconds
    let utcHours = date.getUTCHours();
    let utcMinutes = date.getUTCMinutes();
    let utcSeconds = date.getUTCSeconds();

    // Convert to IST (UTC + 5:30)
    let istHours = utcHours + 5;
    let istMinutes = utcMinutes + 30;

    // Handle minute overflow
    if (istMinutes >= 60) {
        istHours++;
        istMinutes -= 60;
    }

    // Handle hour overflow
    if (istHours >= 24) {
        istHours -= 24;
    }

    // Format the time for better readability
    let formattedTime = `${String(istHours).padStart(2, '0')}:${String(istMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')} IST`;
    
    return formattedTime;
}
// function to calculate day and night lengths 
function duration(x,y)
{
    console.log(x);
    console.log(y);
    var x1 = parseInt(x.substring(6, 8), 10);
  
    var y1 = parseInt(y.substring(6, 8), 10);

    var x2 = parseInt(x.substring(3, 5), 10);
    var y2 = parseInt(y.substring(3, 5), 10);
    var x3 = parseInt(x.substring(0, 2), 10);
    var y3 = parseInt(y.substring(0, 2), 10);
    console.log(y3);
    console.log(x3);
    var sec;
    var min;
    var hour;
    if((y1-x1)<0)
    {
         sec=60+y1-x1;
         y2--;
    }else
    {
        sec=y1-x1;
    }
    if((y2-x2)<0)
    {
        min=60+y2-x2;
        y3--;
    }else
    {
        min=y2-x2;
    }
    hour=y3-x3;
    var day=`${hour} hour ${min} minutes ${sec} seconds`;
    console.log(day);
    if((0-sec)<0)
        {
            sec=60-sec;
            
        }else
        {
            sec=0;
        }
    if((-1-min)<0)
        {
            min=60+(-1-min);

        }else
        {
            min=0;
        }
        if(min==0){
            
            hour=24-hour;
        }else
        {
            hour=23-hour;
        }
        var night=`${hour} hour ${min} minutes ${sec} seconds`;
return {x:day,y:night};
}

