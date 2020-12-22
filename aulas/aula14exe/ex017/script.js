function gerar() {
    let num = document.getElementById('txtn')
    let val = document.getElementById('txtv')
    let res = document.getElementById('res')
    let n = Number(num.value)
    let v = Number(num.value)
    let a = 0
    res.innerHTML = ''
    if (n == 0 || v == 0) {
        window.alert('[ERRO] digíte um número')
    } else {
        for (c = a; c <= 10; c += 1) {
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
        }
        
    }
}

/*n = 5
a = 0
for (c = a; c <= 10; c += 1 ) {
    console.log(`${n} x ${c} = ${n*c}`)
}*/
