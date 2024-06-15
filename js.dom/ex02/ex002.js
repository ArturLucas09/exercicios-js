const verificar = () => {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }    
    if (divisores == 2) {
        resultado.innerText = `O número ${numero} é primo.`;
    } else {
        resultado.innerText = `O número ${numero} não é primo.`;
    }
}                                           