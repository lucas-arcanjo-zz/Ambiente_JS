function sumNumbers() {
    let result = 1 + 1;

    if (result === 2) {
        successCallBack();
    } else {
        errorCallBack();
    }
};

function successCallBack() {
    console.log('Success, number 2 !');
}

function errorCallBack() {
    console.log('Oops, Something wrong');
}

sumNumbers();