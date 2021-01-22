function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        idade = ano - fano.value
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca_homem.png')
                // Criança
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem_homem.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto_homem.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idoso_homem.png')
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca_mulher.png')
                // Criança
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovem_mulher.png')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta_mulher.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idosa_mulher.png')
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}