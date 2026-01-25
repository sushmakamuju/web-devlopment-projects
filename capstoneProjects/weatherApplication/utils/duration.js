function duration(x, y) {
  var x1 = parseInt(x.substring(6, 8), 10);
  var y1 = parseInt(y.substring(6, 8), 10);

  var x2 = parseInt(x.substring(3, 5), 10);
  var y2 = parseInt(y.substring(3, 5), 10);

  var x3 = parseInt(x.substring(0, 2), 10);
  var y3 = parseInt(y.substring(0, 2), 10);

  var sec, min, hour;

  if ((y1 - x1) < 0) { sec = 60 + y1 - x1; y2--; }
  else sec = y1 - x1;

  if ((y2 - x2) < 0) { min = 60 + y2 - x2; y3--; }
  else min = y2 - x2;

  hour = y3 - x3;

  var day = `${hour} hour ${min} minutes ${sec} seconds`;

  if ((0 - sec) < 0) sec = 60 - sec;
  else sec = 0;

  if ((-1 - min) < 0) min = 60 + (-1 - min);
  else min = 0;

  if (min == 0) hour = 24 - hour;
  else hour = 23 - hour;

  var night = `${hour} hour ${min} minutes ${sec} seconds`;

  return { x: day, y: night };
}

export { duration };
