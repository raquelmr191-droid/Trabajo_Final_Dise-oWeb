//(más de 840px)
const esEscritorio = window.matchMedia("(min-width: 841px)");

// 1. Seleccionamos botones y modales
const btnUno = document.querySelector('.uno');
const modalUno = document.getElementById('modal-uno');

const btnDos = document.querySelector('.dos');
const modalDos = document.getElementById('modal-dos');

const btnTres = document.querySelector('.tres');
const modalTres = document.getElementById('modal-tres');

// ==========================================
// 2. LÓGICA PARA "uno"
// ==========================================
// Abrir
btnUno.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalUno.classList.add('activo'); 
    }
});
modalUno.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalUno.classList.add('activo'); 
    }
});

// Cerrar
btnUno.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalUno.classList.remove('activo'); 
    }
});
modalUno.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalUno.classList.remove('activo'); 
    }
});

// ==========================================
// 3. LÓGICA PARA "dos"
// ==========================================
// Abrir
btnDos.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalDos.classList.add('activo'); 
    }
});
modalDos.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalDos.classList.add('activo'); 
    }
});

// Cerrar
btnDos.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalDos.classList.remove('activo'); 
    }
});
modalDos.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalDos.classList.remove('activo'); 
    }
});

// ==========================================
// 4. LÓGICA PARA "tres"
// ==========================================
// Abrir
btnTres.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalTres.classList.add('activo'); 
    }
});
modalTres.addEventListener('mouseenter', () => {
    if (esEscritorio.matches) { 
        modalTres.classList.add('activo'); 
    }
});

// Cerrar
btnTres.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalTres.classList.remove('activo'); 
    }
});
modalTres.addEventListener('mouseleave', () => {
    if (esEscritorio.matches) { 
        modalTres.classList.remove('activo'); 
    }
});

// ========================EFECTO FOTO CUADRADOS====================

if (esEscritorio.matches) { 
        document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const totalCuadros = 20; // Puedes ajustar este número

    for (let i = 0; i < totalCuadros; i++) {
        const box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
    }
});
    }


