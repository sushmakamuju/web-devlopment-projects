function weatherData(x) {
  x.sys.sunrise = convertUnixToIST(x.sys.sunrise);
  x.sys.sunset = convertUnixToIST(x.sys.sunset);
  return x;
}

function convertUnixToIST(unixTimestamp) {
  let date = new Date(unixTimestamp * 1000);

  let utcHours = date.getUTCHours();
  let utcMinutes = date.getUTCMinutes();
  let utcSeconds = date.getUTCSeconds();

  let istHours = utcHours + 5;
  let istMinutes = utcMinutes + 30;

  if (istMinutes >= 60) {
    istHours++;
    istMinutes -= 60;
  }
  if (istHours >= 24) istHours -= 24;

  return `${String(istHours).padStart(2, '0')}:${String(istMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')} IST`;
}

export { weatherData };
