// Función para mostrar el menú de opciones
function mostrarOpciones() {
    let opciones = `
    ¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel.
    Estoy aquí para ayudarte en lo que necesites.
    Escribe el número de la opción que buscas:
    1. Boletas y Pagos
    2. Señal y llamadas
    3. Oferta comercial
    4. Otras consultas
    `;

    let eleccion = prompt(opciones);

    switch (eleccion) {
        case '1':
            mostrarOpcionesBoletas();
            break;
        case '2':
            mostrarOpcionesSenal()
            break;
        case '3':
            mostrarOpcionesOferta();
            break;
        case '4':
            mostrarOpcionesOtras();
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
            mostrarOpciones(); // Volver a mostrar las opciones si la elección no es válida
            break;
    }

// Menú Boletas y Pagos
    function mostrarOpcionesBoletas(){
    let opcionesBoleta= `
    Seleccione una opción
    1. Ver Boleta
    2. Pagar cuenta
    `; 
    let eleccionBoleta = prompt(opcionesBoleta);

    switch (eleccionBoleta) {
        case '1':
            alert("Haga clic aquí para descargar su boleta.");
            mostrarOpciones();
            break;
        case '2':
            alert("Usted está siendo transferido. Espere por favor");
            mostrarOpciones();
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción del 1 al 2.");
            mostrarOpciones();; // Volver a mostrar las opciones si la elección no es válida
            break;
    }
}

// Menú Señal y llamadas
function mostrarOpcionesSenal(){
    let opcionesSenal= `
    Seleccione una opción
    1. Problemas con la señal
    2. Problemas con las llamadas
    `; 
    let eleccionSenal = prompt(opcionesSenal);

    switch (eleccionSenal) {
        case '1':
            mostrarOpcionesProblemas();
            break;
        case '2':
            mostrarOpcionesProblemas();
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción del 1 al 2.");
            mostrarOpciones();; // Volver a mostrar las opciones si la elección no es válida
            break;
    }
    function mostrarOpcionesProblemas(){
        let OpcionesProblemas=prompt("A continuación escriba su solicitud"); 
        alert(`Estimado usuario, su solicitud: 'Tengo problemas con la señal en avenida siempre viva' ha sido ingresada con éxito. pronto será contactado por uno de nuestros ejecutivos.`);
        mostrarOpciones();
    }
}

// Menú Oferta Comercial
function mostrarOpcionesOferta(){
    let opcionesOferta= `¡Mentel tiene una oferta comercial acorde a tus necesidades! Para conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'`; 
    let eleccionOferta = prompt(opcionesOferta);

    switch (eleccionOferta) {
        case 'SI':
            alert("Un ejecutivo contactará con usted");
            mostrarOpciones();
            break;
        case 'NO':
            alert("Gracias por preferir nuestros servicios");
            mostrarOpciones();
            break;
        default:
            alert("Opción no válida. Por favor, elige una opción SI ó NO.");
            mostrarOpciones();; // Volver a mostrar las opciones si la elección no es válida
            break;
    }
}

// Menú Otras consultas
function mostrarOpcionesOtras(){
    let opcionesOtras= `A continuación escriba su consulta`; 
    let eleccionOtras = prompt(opcionesOtras);

    switch (eleccionOtras) {
        case 'la consulta':
            alert("Estimado usuario, su consulta: 'Quisiera saber por qué no ha llegado mi producto código 1234' Ha sido ingresada con éxito. pronto será contactado por uno de nuestros ejecutivos");
            mostrarOpciones();
            break;
        default:
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
            mostrarOpciones();; // Volver a mostrar las opciones si la elección no es válida
            break;
    }
}
}

// Llamar a la función para mostrar las opciones
mostrarOpciones();
