// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento de entrada de búsqueda y el formulario
    const searchInput = document.querySelector(".busqueda");
    const form = document.querySelector("nav form");

    // Agrega un evento de envío al formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const searchTerm = searchInput.value.trim().toLowerCase(); // Obtiene el término de búsqueda en minúsculas

        // Intenta encontrar el elemento con el ID que coincide con el término de búsqueda
        const targetElement = document.getElementById(searchTerm);

        // Si se encuentra el elemento, desplázate a su posición
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
