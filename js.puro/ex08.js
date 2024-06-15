/**8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:

A primeira nota do aluno é: …
A segunda nota do aluno é: …
A terceira nota do aluno é: …
A média do aluno é: …
O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7). */

var aluno =  {
    notas: [8.2, 7.8, 9],
}

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) /aluno.notas.length;



console.log(`A primeira nota do aluno é ${aluno.notas[0]}.`);   
console.log(`A segunda nota do aluno é ${aluno.notas[1]}.`);	
console.log(`A terceira nota do aluno é ${aluno.notas[2]}.`);
console.log(`A média do aluno é ${media.toFixed(2)}.`);

if (media >= 7) {
    console.log(`O aluno está: APROVADO.`)
} else {
    console.log(`O aluno está: REPROVADO.`)
}

