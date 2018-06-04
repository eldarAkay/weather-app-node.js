const request = require('request');
const weather = require('./weather');


var get = (address) => {
    const encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA0a95P6HkQdh2oTr2IvZpPqImRZnawVnk`,
            json: true
        }, (error, response, body) => {
            const {status} = body;
            if (status === 'ZERO_RESULTS') {
                reject('UNKNOWN_ADDRESS');

            } else if (status === 'OK') {
                const address = body.results[0].formatted_address;
                const latitude = body.results[0].geometry.location.lat;
                const longitude = body.results[0].geometry.location.lng;
                resolve({latitude, longitude});
            } else {
                reject('could not get your location');
            }
        });
    });
};

module.exports = {
    get
};

// nodemon  --inspect-brk app.js -a=Kiev

