/**18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. 
 * Utilize a função Math.max() para encontrar o maior número. */

const numeros = [55, 42, 74, 58, 21, 6, 4, 69, 77, 23]
 
function maiorNumero(numeros) {
    let numeral = Math.max(...numeros)
    return numeral
}

console.log(`O maior número é`,maiorNumero(numeros))    