let contenidoData = {};

fetch('contenido.json')
    .then(response => response.json())
    .then(data => {
        contenidoData = data;
        cargarContenidoDefault(); // Llamar a la función de carga de introducción una vez que se haya cargado el JSON
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

function cargarContenidoDefault() {
    const introduccionData = contenidoData["introduccion"];
    let introduccion = '';

    if (introduccionData) {
        introduccion = `<h2>${introduccionData.titulo}</h2><p>${introduccionData.contenido}</p>`;
    } else {
        introduccion = '<p>Bienvenido a la página. Haz clic en un enlace del índice para cargar contenido.</p>';
    }

    document.getElementById('contenido').innerHTML = introduccion;
}

function cargarContenido(seccion) {
    const seccionData = contenidoData[seccion];
    let contenido = '';

    if (seccionData) {
        contenido = `<h2>${seccionData.titulo}</h2><p>${seccionData.contenido}</p>`;
    } else {
        contenido = '<p>Haz clic en un enlace del índice para cargar contenido.</p>';
    }

    document.getElementById('contenido').innerHTML = contenido;
}
