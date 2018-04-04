const request = require('request');
// request take two argument , object and callback
// in callbacks , it has default params
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA',
    json: true // this is gonna be request to confirm that it is a json data
} , (error , response , body) => {
    // JSON.stringify(body , no value here and just put undefined , this is where you can put number of space you want)
    console.log(JSON.stringify(body , undefined , 2));
});