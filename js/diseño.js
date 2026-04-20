
// ==================cambio color=================

const btnWhite = document.querySelector(".white")
const btnBlack = document.querySelector(".black")
const textWhite = document.querySelector(".white p")
const textBlack = document.querySelector(".black p")
const front = document.querySelector(".front")
const imgWhiteG = document.querySelector(".background img")
const imgWhiteCascos = document.querySelector(".uno img")
const modalEsmerialdo = document.querySelectorAll(".modal-esmerilado")
const h2 = document.querySelector("h2")

btnWhite.addEventListener("click", () => {
    textBlack.classList.remove("animation");
    textWhite.classList.add("animation");
    front.classList.add("bodyWhite");
    imgWhiteG.setAttribute("src","img/cascoblanco.jpg");
    imgWhiteCascos.setAttribute("src","img/casco_blanco_carcasa.jpg");
    modalEsmerialdo.forEach(modal => {
        modal.classList.add("M-E-white");
    });
    h2.classList.add("h2-White")
});

btnBlack.addEventListener("click", () => {
    textBlack.classList.add("animation");
    textWhite.classList.remove("animation");
    front.classList.remove("bodyWhite")
    imgWhiteG.setAttribute("src", "img/casconegro.avif");
    imgWhiteCascos.setAttribute("src","img/Ear3-black.webp");
    modalEsmerialdo.forEach(modal => {
        modal.classList.remove("M-E-white");
    });
    h2.classList.remove("h2-White")
});

// ========================EFECTO FOTO CUADRADOS====================
        document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const totalCuadros = 20; // Puedes ajustar este número

    for (let i = 0; i < totalCuadros; i++) {
        const box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
    }
});
