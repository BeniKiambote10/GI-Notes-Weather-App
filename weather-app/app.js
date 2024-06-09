// Import the geocode and forecast modules from the utils directory
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Retrieve the address from the command line arguments
const address = process.argv[2];

// Check if an address was provided
if (!address) {
    console.log('Please Provide An Address!');
} else {
    // Call the geocode function with the provided address
    // The geocode function will get the latitude, longitude, and location
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            // If there is an error in the geocode function, log the error
            return console.log(error);
        }
        
        // Call the forecast function with the latitude and longitude obtained from geocode
        // The forecast function will get the weather forecast data
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                // If there is an error in the forecast function, log the error
                return console.log(error);
            }

            // Log the location and the forecast data
            console.log(location);
            console.log(forecastData);
        });
    });
}




// const url = 'http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query=37.8267,-122.4233&units=f'

// // http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query= // Broken Url to test else if in error handling 



