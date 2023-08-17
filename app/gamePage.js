function cambiarImagen(imgSrc) {
    let imgPrincipal = document.getElementById("img-principal");
    imgPrincipal.innerHTML = `<img src="${imgSrc}" alt="Imagen Principal">`;
}

function cambiarContenido(src) {
    let imgPrincipall = document.getElementById("img-principal");
    imgPrincipall.innerHTML = `<video controls width="640" height="360" autoplay="0"><source src="${src}" type="video/webm"></video>`;
}
