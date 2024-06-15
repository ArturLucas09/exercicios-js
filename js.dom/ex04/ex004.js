const somar = () => {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    resultado.innerText = `A soma dos números de 1 a ${numero} é ${soma}.`;
}
