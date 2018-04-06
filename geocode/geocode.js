const request = require('request');
var geocodeAddress = (address,callback) => {
    if (address) {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`,
            json: true // this is gonna be request to confirm that it is a json data
        }, (error, response, body) => {
            if (error) {
                // If error exist
                callback('Unable to connect to Google Servers');
            } else if (body.status === "ZERO_RESULTS") {
                callback(`\nUnable to define your address : \n \"${address}\"`);
            } else if (body.status === 'OK') {
                callback({
                    search: response.request.uri.search,
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
                    string : "\n\nYour address data \n\n",
                });
                console.log(JSON.stringify(body.results[0], undefined, 2))
            }
        });
    }
    else if (!address) {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA` + `&key=AIzaSyCXPEMdRWN-Uhy_iI5dv1O-p3-NgPBHokk`,
            json: true // this is gonna be request to confirm that it is a json data
        }, (error, response, body) => {
            if (error) {
                // If error exist
                callback('Unable to connect to Google Servers');
            } else if (body.status === "OK") {
                callback({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    }
}


module.exports= {
    geocodeAddress
}