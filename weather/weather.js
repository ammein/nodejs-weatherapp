const request = require('request');
var getWeather = (lat , lng , callbacks) => {
    request({
        url: `https://api.darksky.net/forecast/6cdc3b3fc66b8e676da68497bbca52f6/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callbacks("Unable to fetch weather");
        }else if(response.statusCode === 400){
            console.log("You may be typo. Check the code");
        }
         else {
            callbacks(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports = {
    getWeather
}