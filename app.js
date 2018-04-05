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
            if(error){
                // If error exist
                console.log('Unable to connect to Google Servers');
            }else if(body.status === "ZERO_RESULTS"){
                console.log(`\nUnable to define your address : \n \"${argv.a}\"`);
            } else if (body.status === 'OK'){
                console.log(`\n\nEncode Search URI : \n${response.request.uri.search}\n\n`);
                console.log(`\n\nAddress : ${body.results[0].formatted_address}`);
                console.log("--------------------------------------");
                console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
                console.log("--------------------------------------");

                console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
                console.log("--------------------------------------");

                console.log("\n\nYour address data\n\n", JSON.stringify(body.results[0], undefined, 2));
            }
        });
    }
    else{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`,
            json: true // this is gonna be request to confirm that it is a json data
        }, (error, response, body) => {
            if (error) {
                // If error exist
                console.log('Unable to connect to Google Servers');
            } else if (body.status === "OK") {
                console.log(`Address : ${body.results[0].formatted_address}`);
                console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
                console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
            }
        });
    }
}
requestURL();