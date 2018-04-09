const yargs = require('yargs');
const request = require('request');
const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');
const argv = yargs.options({
    a : {
        demand : false,
        alias : 'address',
        describe : 'Address to fetch weather for',
        string : true
    }
})
.help()
.alias('help' , 'h')
.argv;
geocode.geocodeAddress(argv.address , (errorMessage , results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`\n\nIt's currently ${weatherResults.temperature} fahrenheit. It feels like ${weatherResults.apparentTemperature} fahrenheit.`);
            }
        });
    }
});
// LOLLLLLLLLLLLLL
// TESTTTTTTTTTTTTTTT