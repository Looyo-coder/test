//Datos de usuario
const usuarios = {
    'juan': { nombre: 'Juan', apellido: 'Loyola', password: '123', saldo: 1000 },
    'marta': { nombre: 'Marta', apellido: 'Guzman', password: '456', saldo: 2000 },
    'pedro': {nombre: 'Pedro', apellido: 'Ramirez', password: '789', saldo: 3000}
};

// Función para solicitar el usuario y contraseña
function iniciarSesion() {
    const usuario = prompt('Ingresa tu usuario:');
    const password = prompt('Ingresa tu contraseña:');

    if (usuarios[usuario] && usuarios[usuario].password === password) {
        alert(`Bienvenido, ${usuarios[usuario].nombre} ${usuarios[usuario].apellido}`);
        mostrarMenu(usuario);
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
}

//Función para mostrar el menú de opciones
function mostrarMenu(usuario) {
    let opcion;
    do {
        opcion = prompt(`Seleccione que desea hacer:
        1. Ver saldo
        2. Realizar giro
        3. Realizar deposito
        4. Salir`);
        
        switch(opcion) {
            case '1':
                alert(`Su saldo actual es: ${usuarios[usuario].saldo}`);
                break;
            case '2':
                girarDinero(usuario);
                break;
            case '3':
                depositarDinero(usuario);
                break;
            case '4':
                alert('Has salido del sistema.');
                iniciarSesion();
                break;
            default:
                alert('Opción no válida.');
                iniciarSesion();
        }
    } while (opcion !== '4');
}

//Función para girar dinero
function girarDinero(usuario) {
    const monto = parseFloat(prompt(`Su saldo actual es: ${usuarios[usuario].saldo}. 
Ingrese el monto que desea girar`));
    if (monto > 0 && monto <= usuarios[usuario].saldo) {
        usuarios[usuario].saldo -= monto;
        alert(`Giro realizado. Su nuevo saldo es ${usuarios[usuario].saldo}`);
    } else {
        alert('Monto no válido o saldo insuficiente.');
    }
}

//Función para depositar dinero
function depositarDinero(usuario) {
    const monto = parseFloat(prompt(`Su saldo actual es: ${usuarios[usuario].saldo}.
Ingrese el monto que desea depositar`));
    if (monto > 0) {
        usuarios[usuario].saldo += monto;
        alert(`Deposito realizado. Su nuevo saldo es ${usuarios[usuario].saldo}`);
    } else {
        alert('Monto no válido.');
    }
}

//Iniciar sesión
iniciarSesion();
