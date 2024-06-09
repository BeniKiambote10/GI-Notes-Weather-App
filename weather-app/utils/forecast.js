// Import the request module
const request = require('request');

// Define the forecast function which takes latitude, longitude, and a callback function as arguments
const forecast = (latitude, longitude, callback) => {
    // Construct the URL for the weather API with the provided latitude and longitude
    const url = 'http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query=' + latitude + ',' + longitude + '&units=f';

    // Make a request to the weather API
    request({ url, json: true }, (error, { body }) => {
        // Handle network or connection errors
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        // Handle errors returned by the API (e.g., invalid location)
        } else if (body.error) {
            callback('Unable to find location', undefined);
        // If there are no errors, pass the weather data to the callback
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.');
        }
    });
}

// Export the forecast function for use in other files
module.exports = forecast;
