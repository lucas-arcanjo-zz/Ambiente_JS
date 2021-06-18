const betterDeveloper = 'Lucas'

function whoIsBetterCallback() {
    return new Promise((resolve, reject) => {
        if (betterDeveloper != 'Lucas') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        }
    })
};

whoIsBetterCallback()
    .then((result) => {
    console.log(result.name + '? Yeeah! ' + result.message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})