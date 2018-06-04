const yargs = require('yargs');
const geolocation = require('./geolocation');
const request = require('request');
const weather = require('./weather');

const argv = yargs.options('a', {
    alias: 'address',
    demandOption: true,
    describe: 'location you want to know the weather for'
})
    .help()
    .alias('help', 'h')
    .argv;

geolocation.get(argv.address, (error, result) => {
    if (error) {
        console.log(error)
    } else {
        weather.getWeather(result.latitude, result.longitude, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log(data);
            }
        });
    }
});