// Puedes agregar funciones o lógica común a todas las páginas aquí

// Ejemplo de una función para resaltar el enlace activo en el menú
function resaltarEnlaceActivo() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    var links = document.querySelectorAll('.menu a');

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === filename) {
            links[i].classList.add('activo');
        }
    }
}

window.onload = function() {
    resaltarEnlaceActivo();
};
