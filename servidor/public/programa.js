// funcion para sumar
function sumar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('resultado').value = resultado;
}


function mostrarCampo(tipo) {
    
    console.log(tipo);
    if (tipo === 'empresa') {
        campoEmpresa.classList.remove('hidden');
    } else {
        campoEmpresa.classList.add('hidden');
    }
}

const bienvenida = document.getElementById('bienvenida')
bienvenida.style.color='red'

