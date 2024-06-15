/** Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:

var nomeAluno;
let curso;
const matricula;
As variáveis nomeAluno e matricula devem estar em um escopo global.
 A variável curso deve estar dentro de uma função. 
 A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}. */

 var nomeAluno = 'Artur Lucas';
 const matricula = '222-444'

 function exibirAluno() {
    let curso = 'Engenharia de Software'
    console.log(`O aluno ${nomeAluno} do curso ${curso} sua matrícula é ${matricula}.`)
 }
exibirAluno()