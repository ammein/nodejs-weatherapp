const yargs = require('yargs');
const axios = require('axios');
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
// for encoded argv address
var encodedAddress = encodeURIComponent(argv.address);
// for URL
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(encodedAddress)}` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`;
// must have 1 URL and using promise
axios.get(geocodeURL).then((response) => {
    // custom throw error
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/6cdc3b3fc66b8e676da68497bbca52f6/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);   
    // chain promise
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} . It feels like ${apparentTemperature}`);
}).catch((errorMessage)=> {
    // Custom error message by getting the data we had (Using console log errorMessage and see for yourself to customize)
    if(errorMessage.code === "ENOTFOUND"){
        console.log("Unable to connect to API servers");
    }
    else {
        console.log(errorMessage.message);      
    
    }
});