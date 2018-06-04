const yargs = require('yargs');
const geolocation = require('./geolocation');
const weather = require('./weather');
const request = require('request');

const argv = yargs.options('a', {
    alias: 'address',
    demandOption: true,
    describe: 'location you want to know the weather for'
})
    .help()
    .alias('help', 'h')
    .argv;

geolocation.get(argv.address)
    .then((data) => weather.getWeather(data.latitude, data.longitude))
    .then((data) => console.log(data))
    .catch((errorMsg) => console.log(errorMsg));
