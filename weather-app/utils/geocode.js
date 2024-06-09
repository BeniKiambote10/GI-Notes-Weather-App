// Import the request module
const request = require('request');

// Define the geocode function which takes an address and a callback function as arguments
const geocode = (address, callback) => {
    // Construct the URL for the geocoding API with the provided address
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiYmVuaWtpYW0wMSIsImEiOiJjbHg2YWZsODkxbXRmMmxxMWZ4eWp3a2NmIn0.qBeoWfNErmUpET2d09lf1A&limit=1';

    // Make a request to the geocoding API
    request({ url, json: true }, (error, { body }) => {
        // Handle network or connection errors
        if (error) {
            callback('Unable to connect to location services', undefined);
        // If no results are found for the provided address
        } else if (body.features.length === 0) {
            callback('Unable to find location, try another search', undefined);
        // If results are found, take the latitude, longitude, and location information
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].properties.full_address
            });
        }
    });
}

// Export the geocode function for use in other files
module.exports = geocode;
