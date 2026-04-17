// Esperamos a que el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const elementosAAnimar = document.querySelectorAll('section, h1, p, img');

    // 2. Les añadimos la clase inicial de CSS para que estén ocultos
    elementosAAnimar.forEach(e => e.classList.add('revelar'));

    // 3. Configuramos el Observador
    const opciones = {
        root: null, // usa el viewport del navegador
        threshold: 0.15, // el efecto se dispara cuando el 15% del elemento es visible
        rootMargin: "0px"
    };
 
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            // Si el elemento entra en el área visible...
            if (entrada.isIntersecting) {
                // Añadimos la clase que activa la animación
                entrada.target.classList.add('activo');
                // Dejamos de observar este elemento para mejorar el rendimiento
                observador.unobserve(entrada.target);
            }
        });
    }, opciones);

    // 4. Decimos al observador que vigile cada uno de nuestros elementos
    elementosAAnimar.forEach(e => {
        observador.observe(e);
    });
});