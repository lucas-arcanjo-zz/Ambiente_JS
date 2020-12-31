let cax = document.getElementById('txtn')
let res = document.getElementById('res')
let lista =  document.getElementById('cxn')
let valores = []

function adicionar(){
    if (cax.value <= 0 || cax.value > 100) {
        window.alert('[ERRO] digíte um número de 1 a 100')
    }
}