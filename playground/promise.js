var asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Only Numbers are allowed!')
            }
        }, 2000);
    })
};

asyncAdd(2, '1').then((result) => console.log(result), (error) => console.log(error));
