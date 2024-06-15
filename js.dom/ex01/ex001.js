/*
Crie uma página que calcule a média de quatro notas inseridas pelo usuário. Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).
*/

const media = () => {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const resultado = (nota1 + nota2 + nota3 + nota4) / 4;
    
    if (resultado < 7) {
        return document.getElementById('resultado').innerText = `Média: ${resultado} (REPROVADO)`;
    } else {
        return document.getElementById('resultado').innerText = `Média: ${resultado} (APROVADO)`;
    }    
}