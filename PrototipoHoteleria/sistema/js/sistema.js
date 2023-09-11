function seleccionar(link) {
    
    let links = document.querySelectorAll("header nav a");

    // Opciones del menu
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";
    links[4].className = "";
    links[5].className = "";

    // Esta es la clase que va a asignar
    link.className = "selected"
}