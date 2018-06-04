const request = require('request');

var getWeather = (latitude, longitude) => {

    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/447876805b328e72e3d0c3bd56566d45/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            if (response.statusCode === 200) {
                resolve(body.currently.temperature);
            }
            else {
                reject('was not able to get the temperature');
            }

        })
    });
};

module.exports = {
    getWeather
}

