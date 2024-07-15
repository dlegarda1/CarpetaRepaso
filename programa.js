

function mostrarCampo(tipo) {
    
    console.log(tipo);
    if (tipo === 'empresa') {
        campoEmpresa.classList.remove('hidden');
    } else {
        campoEmpresa.classList.add('hidden');
    }
}


