/**5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function.
 *  Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}.
 *  Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]". */

var carreira1 = "Engenheiro de Software";
var carreira2 = "Arquiteto de Software";
function objetivo(carreira) {
  return `Meu objetivo de carreira é me tornar um ${carreira}`
}

const objetivo2 = (carreira) => {
  return `Meu objetivo de carreira é me tornar um ${carreira}`
};

console.log(objetivo(carreira1));
console.log(objetivo2(carreira2));
