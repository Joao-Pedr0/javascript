let num = [5, 8, 2, 9, 3]

num.push(6)

console.log(`Nosso vetor é ${num} e tem ${num.length} elementos`)
console.log(`E o primeiro elemento é ${num[0]}`)
/*console.log(`O vetor em ordem crescente é ${num.sort()}`)*/

for (let c = 0; c < num.length; c++){
    console.log(`Conteudo na posição ${c} é ${num[c]}`)
}

console.log(`O numero 8 está na posição ${num.indexOf(8)}`)

/*
Forma mais curta de fazer.

for (let c in num){
    console.log(num[c])
}
*/