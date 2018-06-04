const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/447876805b328e72e3d0c3bd56566d45/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (response.statusCode === 200) {
            callback(undefined ,body.currently.temperature);
        }
        else {
            callback('error accured while fetching the weather');
        }
    })
};

module.exports = {
    getWeather
}

