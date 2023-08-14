function validarFormulario() {
    var nombre = document.querySelector('input[name="nombreCompleto"]');
    var email = document.querySelector('input[name="correoElectronico"]');
    var telefono = document.querySelector('input[name="numeroTelefono"]');
    var nacionalidad = document.querySelector('input[name="nacionalidad"]');
    var fechaNacimiento = document.querySelector('input[name="fechaNacimiento"]');
    var genero = document.querySelector('select[name="genero"]');
    var direccion = document.querySelector('input[name="direccion"]');
    var profesionSelect = document.querySelector('select[name="profesion"]');
    var otraProfesionInput = document.querySelector('#otraProfesionInput input');
    var areaInteresSelect = document.querySelector('select[name="areaInteres"]');
    var otraAreaInput = document.querySelector('#otraAreaInput input');

    if (nombre.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu nombre completo.',
            'info'
        )
        nombre.focus();
        return false;
    }

    if (email.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu correo electrónico.',
            'info'
        )
        email.focus();
        return false;
    }

    if (telefono.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu teléfono.',
            'info'
        )
        telefono.focus();
        return false;
    }

    if (nacionalidad.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu nacionalidad.',
            'info'
        )
        nacionalidad.focus();
        return false;
    }

    if (fechaNacimiento.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu fecha de nacimiento.',
            'info'
        )
        fechaNacimiento.focus();
        return false;
    }

    if (genero.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu género.',
            'info'
        )
        genero.focus();
        return false;
    }

    if (direccion.value === "") {
        Swal.fire(
            '',
            'Por favor, ingresa tu dirección.',
            'info'
        )
        direccion.focus();
        return false;
    }

    if (profesionSelect.value === "") {
        Swal.fire(
            '',
            'Por favor, selecciona una opción para la profesión.',
            'info'
        );
        profesionSelect.focus();
        return false;
    }

    if (areaInteresSelect.value === "") {
        Swal.fire(
            '',
            'Por favor, selecciona una opción para el área de interés.',
            'info'
        );
        areaInteresSelect.focus();
        return false;
    }

    if (profesionSelect.value === "Otro" && otraProfesionInput.value === "") {
        Swal.fire(
            '',
            'Por favor, especifica tu profesión.',
            'info'
        );
        otraProfesionInput.focus();
        return false;
    }

    if (areaInteresSelect.value === "Otro" && otraAreaInput.value === "") {
        Swal.fire(
            '',
            'Por favor, especifica tu área de interés.',
            'info'
        );
        otraAreaInput.focus();
        return false;
    }

    Swal.fire(
        '',
        'Formulario enviado con éxito.',
        'success'
    );
    return true;
}


function mostrarOtroInput(selectId, inputId) {
    var selectElement = document.getElementById(selectId);
    var otroInput = document.getElementById(inputId);

    if (selectElement.value === "Otro") {
        otroInput.style.display = "block";
    } else {
        otroInput.style.display = "none";
    }
}

// Esta función se ejecuta al cargar la página para ocultar los campos "Especificar" por defecto
window.onload = function () {
    var profesionSelect = document.getElementById('profesionSelect');
    var areaInteresSelect = document.getElementById('areaInteresSelect');
    var otraProfesionInput = document.getElementById('otraProfesionInput');
    var otraAreaInput = document.getElementById('otraAreaInput');

    if (profesionSelect.value !== "Otro") {
        otraProfesionInput.style.display = "none";
    }

    if (areaInteresSelect.value !== "Otro") {
        otraAreaInput.style.display = "none";
    }
};