let numA, numB, resultado;

function obtenerValores() {
    document.getElementById('advertencia').style.display = "none";
    numA = parseFloat(document.getElementById('operandoA').value);
    console.log(numA);
    numB = parseFloat(document.getElementById('operandoB').value);
    console.log(numB);
}
function sumar(A, B) {
    let res;
    res = A + B;
    return res;
}
function restar(A, B) {
    let res;
    res = A - B;
    return res;
}

function multiplicar(A, B) {
    let res;
    res = A * B;
    return res;
}

function dividir(A, B) {
    let res;
    res = A / B;
    return res;
}

function desplegarResultado(valor) {
    document.getElementById('resultado').value = valor;
};


function operarSuma() {
    obtenerValores();
    resultado = sumar(numA, numB);
    desplegarResultado(resultado);
}

function operarResta() {
    obtenerValores();
    resultado = restar(numA, numB);
    desplegarResultado(resultado);
}

function operarMultiplicar() {
    obtenerValores();
    resultado = multiplicar(numA, numB);
    desplegarResultado(resultado);
}

function operarDividir() {
    obtenerValores();
    if (numB == 0) {
        desplegarResultado('Error');
        document.getElementById('advertencia').style.display = "block";
        document.getElementById('advertencia').innerHTML = "Operando B no puede ser cero";
        alert('no se puede dividir entre cero');
    }
    else {
        resultado = dividir(numA, numB);
        desplegarResultado(resultado);
    }

}
document.getElementById('botonSumar').addEventListener('click', operarSuma);
document.getElementById('botonRestar').addEventListener('click', operarResta);
document.getElementById('botonMultiplicar').addEventListener('click', operarMultiplicar);
document.getElementById('botonDividir').addEventListener('click', operarDividir);

//*************************************** */
//Selector de Operaciones

function operar() {
    let operacion = document.getElementById('selectorOperacion').value;
    console.log(operacion)
    obtenerValores();

    if (operacion == "sumar") {
        resultado = sumar(numA, numB);
    }
    else if (operacion == "restar") {
        resultado = restar(numA, numB);
    }
    else if (operacion == "multiplicar") {
        resultado = multiplicar(numA, numB);
    }
    else if (operacion == "dividir") {
        resultado = dividir(numA, numB);
    }
    else {
        resultado = "Operacion no valida";
    }
    desplegarResultado(resultado);
}




//***************************************************************** */
//      ESTRUCTURA SWITCH

function operar2() {
    let operacion = document.getElementById('selectorOperacion').value;
    console.log(operacion);
    obtenerValores();
    switch (operacion) {
        case "sumar":
            resultado = sumar(numA, numB);
            break;
        case "restar":
            resultado = restar(numA, numB);
            break;
        case "multiplicar":
            resultado = multiplicar(numA, numB);
            break;
        case "dividirr":
            resultado = dividir(numA, numB);
            break;
        default:
            resultado = "operacion no valida";
    }

    desplegarResultado(resultado);
}
//**************************************************** */
//tercera opcion operar

function operar3() {
    let operacion = document.getElementById('selectorOperacion').value;
    switch (operacion) {
        case "sumar":
            operarSuma();
            break;
        case "restar":
            operarResta();
            break;
        case "multiplicar":
            operarMultiplicar();
            break;
        case "dividir":
            operarDividir();
            break;
        default:
            resultado = "operacion no valida";
    }
    desplegarResultado(resultado);
}
document.getElementById('botonOperar').addEventListener('click', operar3);
//vamos a hacer una operacion de factorizacion
//vamos a hacer una operacion de factorizacion
// esta seria la funcion de factorizacion
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
