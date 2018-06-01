const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Dallas&key=AIzaSyA0a95P6HkQdh2oTr2IvZpPqImRZnawVnk',
    json: true
}, (error, response, body) => {
    console.log(`Address:   ${body.results[0].formatted_address}`);
    console.log(`Latitude    ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude   ${body.results[0].geometry.location.lng}`);
});

// AIzaSyA0a95P6HkQdh2oTr2IvZpPqImRZnawVnk

console.log('Testing ssh');