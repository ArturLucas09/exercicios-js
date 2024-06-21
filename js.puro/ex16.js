/**16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array.
 *  Imprima o resultado. */

var array = [1, 2, 3, 4, 5, 6, 4, 7, 4, 1]

let soma = 0
let i = 0
while (i < array.length) {
    soma += array[i]
    i++
}
console.log(`A soma dos números é: ${soma}`)