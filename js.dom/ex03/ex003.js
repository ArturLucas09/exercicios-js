


const numeroaleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;}

const verificar = () => {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
  
    // Gera o número aleatório apenas uma vez e armazena em uma variável
    const numeroAleatorioGerado = numeroaleatorio();
  
    if (numero == numeroAleatorioGerado) {
      resultado.innerText = `Parabéns, vc acertou o número era ${numeroAleatorioGerado}`;
    } else if (numero < numeroAleatorioGerado) {
      resultado.innerText = `Tente novamente, o numero escolhido foi menor`;
    } else {
      resultado.innerText = `Tente novamente, o numero escolhido foi maior`;
    }
  };