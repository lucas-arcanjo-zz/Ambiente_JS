var inicio = document.getElementById('txtinicio')
var fim = document.querySelector('div#txtfim')
var res = document.querySelector('div#res')
function contar() {
    for (inicio = 1; c <= 10; c += 2) {
        console.log(`${c}x`)
        res.innerHTML = `a soma de ${inicio} é essa`
    }
}