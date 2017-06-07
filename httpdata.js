// Require the module 
var Forecast = require('forecast');
 
// Initialize 
var forecast = new Forecast({
  service: 'darksky',
  key: '273426f477691b3057a726fc2c9f72ee',
  units: 'celcius',
  cache: true,      // Cache API requests 
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
    minutes: 27,
    seconds: 45
  }
});
 
// Retrieve weather information from coordinates (Lagos, Nigeri)
forecast.get([6.465422, 3.406448], function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather);
});
 
// Retrieve weather information, ignoring the cache 
forecast.get([6.465422, 3.406448], true, function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather);
});