function f() {
  var result;
  var x = new Date();
  var y = x.getDay();

  switch (y) {
    case 0: y = "Sunday"; break;
    case 1: y = "Monday"; break;
    case 2: y = "Tuesday"; break;
    case 3: y = "Wednesday"; break;
    case 4: y = "Thursday"; break;
    case 5: y = "Friday"; break;
    case 6: y = "Saturday"; break;
    default: y = "Invalid day";
  }

  var month = x.getMonth();
  switch (month) {
    case 0: month = "January"; break;
    case 1: month = "February"; break;
    case 2: month = "March"; break;
    case 3: month = "April"; break;
    case 4: month = "May"; break;
    case 5: month = "June"; break;
    case 6: month = "July"; break;
    case 7: month = "August"; break;
    case 8: month = "September"; break;
    case 9: month = "October"; break;
    case 10: month = "November"; break;
    case 11: month = "December"; break;
    default: month = "Invalid month";
  }

  var hours = x.getHours() + 1;
  if (hours > 12) {
    hours = hours - 12;
    var t = "PM";
  }
  var minutes = x.getMinutes() + 1;
  var date = x.getDate();

  result = date + " " + month + ", " + hours + " : " + minutes;
  if (t) result += t;
  else result += "AM";

  return y + ", " + result;
}

export { f };
