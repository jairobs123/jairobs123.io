function ordenar() {
    let num1 = parseFloat(document.getElementById('txtUno').value);
    let num2 = parseFloat(document.getElementById('txtDos').value);
    let num3 = parseFloat(document.getElementById('txtTres').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert('Por favor, ingrese tres números válidos.');
        return;
    }

    let numeros = [num1, num2, num3];

    numeros.sort(function(a, b) {
        return b - a;
    });

    document.getElementById('txtMayor').value = numeros[0];
    document.getElementById('txtMedio').value = numeros[1];
    document.getElementById('txtMenor').value = numeros[2];
}


