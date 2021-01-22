function gerar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] digíte um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }  
    }
}

/*n = 5
a = 0
for (c = a; c <= 10; c += 1 ) {
    console.log(`${n} x ${c} = ${n*c}`)
}*/
