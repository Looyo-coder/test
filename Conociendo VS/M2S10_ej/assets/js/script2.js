// función para hacer aparecer y desaparecer el texto2 al pasar el mouse por el texto1
$(document).ready(function () {
    $('#text1').mouseenter(function () {
        $('#text2').show();
    }).mouseleave(function () {
        $('#text2').hide();
    });
});

// función para agrandar la imagen al hacer clic
$(document).ready(function () {
    const $image = $('#img');
    const originalWidth = $image.width(); // Guardamos el ancho original
    $image.click(function () {
        $image.css({
            width: '50%', // Tamaño deseado al hacer clic (se puede ajustar)
            height: 'auto' // Mantenemos la proporción original
        });
    });

    // función para volver al tamaño original al salir del área de la imagen
    $image.mouseleave(function () {
        $image.css({
            width: originalWidth + 'px' // Volvemos al ancho original
        });
    });
});

$(document).ready(function () {
    // Seleccionamos el elemento
    const $elemento = $('#caja3');

    // Función para aumentar el tamaño
    function aumentarTamaño() {
        $elemento.css('font-size', '24px');
    }

    // Función para volver al tamaño original
    function tamañoOriginal() {
        $elemento.css('font-size', '16px');
    }

    // Asignamos los eventos
    $elemento.on('dblclick', aumentarTamaño);
    $elemento.on('click', tamañoOriginal);
});