// Criando Promise
let promise = new Promise((resolve, reject) => {
    result = 1 + 17
    if (result === 2) {
        resolve('Success');
    } else {
        reject('Failed')
    }
});

// Chamando Promise
promise.then((message) => {
    console.log('This is in the then', message)
}).catch((err) => {
    console.log('this is the catch', err)
});