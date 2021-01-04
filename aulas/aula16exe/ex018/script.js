let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(num.value) >= 1 && Number(num.value) <= 100) {
    return true
    } else {
        return false
    }
}

function isLista(n, l){
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        window.alert('OK')
    } else {
        window.alert('ERRO')
    }
}