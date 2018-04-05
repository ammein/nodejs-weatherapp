const yargs = require('yargs');
const request = require('request');
const argv = yargs.options({
    // using 'a' for any object parent name you want
    a : {
        demand : false,
        alias : 'address',
        describe : 'Address to fetch weather for',
        string : true // This always tells yargs to add string onto the value
    }
})
.help()
.alias('help' , 'h') // for shortcut run --help or -h
.argv;
// console.log("argv",argv);
// console.log(argv.a);
// console.log(api.WEATHER_API_KEY);
// request take two argument , object and callback
// in callbacks , it has default params
var requestURL = () => {
    if(argv.a){
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.a)}` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`,
            json: true // this is gonna be request to confirm that it is a json data
        }, (error, response, body) => {
            // JSON.stringify(body , no value here and just put undefined , this is where you can put number of space you want)
            // console.log(JSON.stringify(body , undefined , 2));
            console.log(`\n\nAddress : ${body.results[0].formatted_address}`);
            console.log("--------------------------------------");
            console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            console.log("--------------------------------------");
            
            console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
            console.log("--------------------------------------");
            
            console.log("\n\nYour address data\n\n", JSON.stringify(body.results[0], undefined , 2));
            
        });
    }
    else{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`,
            json: true // this is gonna be request to confirm that it is a json data
        }, (error, response, body) => {
            // JSON.stringify(body , no value here and just put undefined , this is where you can put number of space you want)
            // console.log(JSON.stringify(body , undefined , 2));
            console.log(`Address : ${body.results[0].formatted_address}`);
            console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        });
    }
}
requestURL();