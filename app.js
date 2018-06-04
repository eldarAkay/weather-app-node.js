const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options('a', {
    alias: 'address',
    demandOption: true,
    describe: 'location you want to know the weather for'
})
    .help()
    .alias('help', 'h')
    .argv;

const googleApiKey = 'AIzaSyA0a95P6HkQdh2oTr2IvZpPqImRZnawVnk';
const foreCastApiKey = '447876805b328e72e3d0c3bd56566d45';

const encodedAddress = encodeURIComponent(argv.address);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleApiKey}`)
    .then((response) => {
        const {lat, lng} = response.data.results[0].geometry.location;
        return axios.get(`https://api.darksky.net/forecast/${foreCastApiKey}/${lat},${lng}`)
    })
    .then((response) => {
        const {data: {currently: {temperature}}} = response;
        console.log(temperature);
    })
    .catch((error) => {
        console.log(error)
    });