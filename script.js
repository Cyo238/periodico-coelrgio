function agrandarImagen() {
    var modal = document.getElementById("modal");
    var img = document.getElementById("myImage");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block"; // Muestra el modal
    modalImg.src = img.src; // Establece la fuente de la imagen del modal
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal al hacer clic
}
