function operar(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, ingresa ambos números.';
    } else {
        switch (operacion) {
            case 'sumar':
                resultado = num1 + num2;
                break;
            case 'restar':
                resultado = num1 - num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            case 'dividir':
                resultado = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre cero';
                break;
            default:
                resultado = 'Operación no válida.';
        }
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
