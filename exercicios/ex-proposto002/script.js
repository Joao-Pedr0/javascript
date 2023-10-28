function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 10 ){
                img.setAttribute('src', 'imagens/homem-criança.png')
            }else if (idade < 21 ){
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }else if ( idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else{
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade < 10 ){
                img.setAttribute('src', 'imagens/mulher-criança.png')
            }else if (idade < 21 ){
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if ( idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }else{
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img)
    }

}