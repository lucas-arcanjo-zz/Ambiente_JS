let cax = document.getElementById('txtn')
let res = document.getElementById('res')
let selcx =  document.getElementById('cxn')

function adicionar() {
    if (cax.value <= 0 || cax.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        //selcx.innerHTML= ''
        let cx = Number(cax.value)
        let item = document.createElement('option')
        item.text = `valor ${cx} adicionado`
        selcx.appendChild(item)
    }
} 

function finalizar() {
    return res.innerHTML = 'ok'
}