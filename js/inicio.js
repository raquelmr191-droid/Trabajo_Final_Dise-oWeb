function generarParchesRandom() {
    const cantidadParches = Math.floor(Math.random() * 4) + 1;

    //JS lee variables directamente de CSS
    const rootStyles = getComputedStyle(document.documentElement);
    const maxColumnas = parseInt(rootStyles.getPropertyValue('--columnas'));
    const maxFilas = parseInt(rootStyles.getPropertyValue('--filas'));

    for (let i = 0; i < cantidadParches; i++) {
        const parche = document.createElement('div');
        parche.classList.add('capa-esmerilada');

        // Ahora usa el límite dinámico en lugar de los números fijos
        const columnaAleatoria = Math.floor(Math.random() * maxColumnas) + 1; 
        const filaAleatoria = Math.floor(Math.random() * maxFilas) + 1;    

        parche.style.gridColumn = columnaAleatoria;
        parche.style.gridRow = filaAleatoria;

        document.body.appendChild(parche);

        setTimeout(() => {
            parche.remove();
        }, 3000); 
    }
}

setInterval(generarParchesRandom, 800);
