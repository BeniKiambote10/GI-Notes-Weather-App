
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
 
if(!address) {
    console.log('Please Provide An Address!')
} else {
    geocode(address, (error, {latitude, longitude, location} = {} ) => {
        if (error) {
             return console.log(error);
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            } 
    
    
            console.log(location)
            console.log(forecastData)
        });
    
    })
    

}



// const url = 'http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query=37.8267,-122.4233&units=f'

// // http://api.weatherstack.com/current?access_key=e54dae648e65dd6643f3d7d303f4d562&query= // Broken Url to test else if in error handling 



