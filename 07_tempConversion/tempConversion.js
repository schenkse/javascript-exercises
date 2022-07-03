const ftoc = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return round(celsius, 1);
};

const ctof = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  return round(fahrenheit, 1);
};

const round = function(number, decimalPlaces) {
  const factorOfTen = Math.pow(10, decimalPlaces);
  return Math.round(number * factorOfTen) / factorOfTen;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
