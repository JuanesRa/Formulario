// Almacenar caja del banner en una variable
var slider = $("#caja");
// slider = document.getElementById(caja);
// funcion $() es la abreviacion del metodo getElementByID

// Almacenar botones
var siguiente = $('#btn_siguiente');
var anterior = $('#btn_atras');

// siguiente = document.getElementById(btn_siguiente);
// anterior = document.getElementById(btn_atras);

//Mover ultima imagen al primer lugar
$('#caja .section_caja:last').insertBefore('#caja .sectioncaja:first');

// Mostrar primera imagen con un margen de -100% hacia la izquierda
slider.css('margin-left', '-' + 100 + '%');

// Funcion para mover las imagenes a la derecha
function moverD() {
    slider.animate({
        marginLeft: '-' + 200 + '%'
    }, 3000, function(){
        $('#caja .section_caja:first').insertAfter('#caja .section_caja:last');
        slider.css('margin-left', '-' + 100 + '%')
    });
}

// Funcion para mover las imagenes a la izquierda
function moverI() {
    slider.animate({
        marginLeft: 0
    }, 3000, function(){
        $('#caja .section_caja:last').insertAfter('#caja .section_caja:first');
        slider.css('margin-left', '-' + 100 + '%')
    });
}

// Funcion para mover las imagenes automaticamente al cabo de 5 segundos
function autoPlay() {
    interval = setInterval(function(){moverD();
    }, 3000);
}

//Dar funcionalidad al boton siguiente

siguiente.on('click', function() {
    moverD();
    clearInterval(interval);
    autoPlay();
    console.log('Clickeado adelante mi pez')
})

//Dar funcionalidad al boton anterior

anterior.on('click',function() {
    moverI();
    clearInterval(interval);
    autoPlay();
    console.log('Clickeado atras mi pez')
})


// Ejecucion automatica

autoPlay();