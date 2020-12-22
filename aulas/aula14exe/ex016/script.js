function contar() {
    let ini = document.querySelector('input#txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.querySelector('input#txtpasso')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = 'Contando...'
    }     
}
