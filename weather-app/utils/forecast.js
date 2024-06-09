

const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query=' +  latitude + ',' + longitude + '&units=f'

    request({url, json:true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)

        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain')
            
        }

    })

}

module.exports = forecast