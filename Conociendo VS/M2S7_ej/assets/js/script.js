//Función para comparar 2 valores y determinar cual es mayor y menor
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num1} es menor que ${num2}`;
    } else {
        return `${num1} es igual a ${num2}`;
    }
}

// Solicitar los números al usuario
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Comparar los números y mostrar el resultado
let resultado = compararNumeros(numero1, numero2);
alert(resultado);