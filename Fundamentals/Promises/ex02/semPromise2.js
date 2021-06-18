const betterDeveloper = 'pedrinho'

function whoIsBetterCallback(callback, errorCallBack) {
    if (betterDeveloper != 'Lucas') {
        errorCallBack({
            name: 'This is wrong',
            message: betterDeveloper + '? Really'
        })
    } else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best!'
        })
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + '? Yeeah! ' + result.message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})