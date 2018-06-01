console.log('Starting app');

setTimeout(() => {
    console.log('called in the middle 1');
}, 1000);

setTimeout(function () {
    console.log('called in the middle 2');
}, 0);

console.log('Finishing up');