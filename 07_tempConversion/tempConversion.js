const convertToCelsius = function(tempreture) {
  if(tempreture == 32)return 0;
  return Math.round((tempreture - 32)*(5/9.0)*10)/10;
};

const convertToFahrenheit = function(tempreture) {
  if(tempreture == 0)return 32;
  return Math.round((tempreture*(9/5.0) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
