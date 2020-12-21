function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        foto.src = 'manha.png'
        document.body.style.background = '#e0cec0'
        // BOM DIA
    }
    else if (hora >= 12 && hora <= 18){
        foto.src = 'tarde.png'
        document.body.style.background = '#c55305'
        // BOA TARDE
    }
    else if (hora > 18 && hora < 24) {
        foto.src = 'noite.png'
        document.body.style.background = '#183c4f'
        // BOA NOITE
    }
    else {
        foto.src = 'madrugada.png'
        document.body.style.background = '#374748'
        // BOA MADRUGADA
    }
}