
const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiYmVuaWtpYW0wMSIsImEiOiJjbHg2YWZsODkxbXRmMmxxMWZ4eWp3a2NmIn0.qBeoWfNErmUpET2d09lf1A&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find location, try another search')
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].properties.full_address
            })
        }

    })
}   

module.exports = geocode