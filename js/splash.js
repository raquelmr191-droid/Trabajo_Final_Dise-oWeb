document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash');

    // 1. el splash existe en el HTML?
    if (splashScreen) {
        // 2. Preguntamos si el usuario ya vio la animación
        const splashYaVisto = sessionStorage.getItem('vistoSplash');

        if (splashYaVisto === 'true') {
            // Si ya lo vio, eliminamos el splash 
            splashScreen.remove();
        } else {// de lo contrario: 
            // 3. Guardamos en la memoria que lo está viendo
            sessionStorage.setItem('vistoSplash', 'true');
            // 4. Ejecutamos las animaciones 
            setTimeout(() => {
                splashScreen.classList.add('ocultar-splash');
                setTimeout(() => {
                    splashScreen.remove(); 
                }, 1000);
            }, 3500); 
        }
    } 
});