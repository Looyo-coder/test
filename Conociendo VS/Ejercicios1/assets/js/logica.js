//Crearemos una función que devuelva el porcentaje de membresia, según los niveles de usuario.
//basado en su nivel de membresía. los niveles son "Bronce", "Plata", "Oro" y "Platino",
//con descuentos del 5%, 10%, 15%, y 20% respectivamente.

function calcularDescuento(nivelMembresia){

    let descuento;

    if (nivelMembresia === "Bronce"){
        descuento=0.05;
    }else if (nivelMembresia === "Plata"){
        descuento=0.1;
    }else if (nivelMembresia === "Oro"){
        descuento=0.15;
    }else if (nivelMembresia === "Platino"){
        descuento=0.20;
    }else {
        alert ("Categoria Inválida: No cuenta con descuentos")
        descuento=0.0;
    }
    return descuento
}

nivelMembresia=prompt("Ingrese su nivel de membresia");

console.log(calcularDescuento(nivelMembresia));

//crearemos una funcion a la que se le pase un dia de la semana y aplique una promo diferente según sea el día
//el día debe ser entregado con mayuscula y acento (para el miércoles)

function aplicarDescuento(){
    console.log("Aplicando un 10% de Descuento en todos los productos")
}

function envioGratis(){
    console.log("Tienes envío gratis en tu compra")
}

function dosxuno(){
    console.log("Promo 2x1")
}

//la siguiente función recibe un día de la semana y aplica una promo diferente según el día

function promoXDia(diaSemana){
    switch (diaSemana){
        case "Lunes":
            aplicarDescuento();
            break;
        case "Miércoles":
            envioGratis();
            break;
        case "Viernes":
            dosxuno();
            break;
        default:
            console.log("Hoy no hay descuento")
            break;
    }
}

//Ejecución de uso:

promoXDia("Miércoles")