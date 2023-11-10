function Contar(){
    var inicio = window.document.querySelector('input#iinicio')
    var fim = window.document.querySelector('input#ifim')
    var passo = window.document.querySelector('input#ipasso')
    var res = window.document.querySelector('div#res')
    var c = 0

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO]Faltam dados')
   } else{
    res.innerHTML = "Contando: "
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0){
        p = 1
        window.alert('[ERRO] Passo invalido, atribuido passo 1')
    }

    if(i < f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }else 
        for (let c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1F449}`
    }
   }
   res.innerHTML += `\u{1F3C1}`
}