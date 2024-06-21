/**19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array.
 *  Utilize a função Math.min() para encontrar o menor número. */

const numeros = [55, 42, 74, 58, 21, 6, 4, 69, 77, 23]
 
function menorNumero(numeros) {
    let numeral = Math.min(...numeros)
    return numeral
}

console.log(`O menor número é`,menorNumero(numeros))