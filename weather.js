const request = require('request');

var getWeather = (latitude, longitude) => {
    request({
        url: `https://api.darksky.net/forecast/447876805b328e72e3d0c3bd56566d45/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        console.log(body.timezone, body.currently.temperature);
    })
};

module.exports = {
    getWeather
}

