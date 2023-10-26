function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#F3E0D2'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#EC7B40'
    } else{
        //Boa Noite
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#213B6A'
    }
}