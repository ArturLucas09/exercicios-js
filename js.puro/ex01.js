/*1 - Crie um script que tenha três variáveis:
var nome;
let sobreNome;
const cpf;
nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função.
 A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. 
 Outra linha com uma mensagem concatenando os valores.*/

var nome = "Artur";
const cpf = "555.444.333-22";

function exibirdados() {
  let sobrenome = "Santos";
  console.log(`${nome}\n${sobrenome}\n${cpf}`);
  console.log(`Meu nome é ${nome} e sobrenome ${sobrenome} portador do cpf ${cpf}.`);
}
exibirdados();
