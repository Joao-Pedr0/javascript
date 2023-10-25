var idade = 45
var frase = `Você tem ${idade} anos`
if (idade < 16){
    console.log(`${frase} e não vota`)
} else if (idade < 18 || idade > 65){
    console.log(`${frase} e tem voto opcional`)
} else{
    console.log(`${frase} e tem voto obrigatório`)
}
