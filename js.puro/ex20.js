/**20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array. */

var number = [55, 42, 74, 58, 21, 6, 4, 69, 77, 23]  

const mediaNumeros = (numeros) => {
    let soma = 0
    let i = 0
    for (const numero of numeros) {
        soma += numero; 
        i++
    }
    return soma / number.length
}

console.log(mediaNumeros(number))