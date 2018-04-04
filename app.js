const request = require('request');
// request take two argument , object and callback
// in callbacks , it has default params
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA',
    json: true // this is gonna be request to confirm that it is a json data
} , (error , response , body) => {
    console.log(body);
});