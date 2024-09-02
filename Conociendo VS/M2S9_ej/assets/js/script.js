// Tu variable de tareas
var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Referencia al cuerpo de la tabla
const cuerpoTabla = document.querySelector("#tabla-tareas tbody");

// Función para agregar una fila a la tabla
function agregarFila(tarea) {
    // Crear una nueva fila
    const fila = document.createElement("tr");

    // Crear y agregar la celda de tarea
    const celdaTarea = document.createElement("td");
    celdaTarea.textContent = tarea;
    fila.appendChild(celdaTarea);

    // Crear y agregar la celda de acción con el botón
    const celdaAccion = document.createElement("td");
    const botonFinalizar = document.createElement("button");
    botonFinalizar.textContent = "Finalizar";
    botonFinalizar.classList.add("btn", "btn-danger");
    botonFinalizar.addEventListener("click", function () {
        fila.remove();
    });
    celdaAccion.appendChild(botonFinalizar);
    fila.appendChild(celdaAccion);

    // Agregar la fila al cuerpo de la tabla
    cuerpoTabla.appendChild(fila);
}

// Agregar las tareas a la tabla
tareas.forEach(item => {
    agregarFila(item.tarea);
});

//genera la interacción entre el boton de ingreso y el formulario en modo oculto
let estiloActivo = true;

document.getElementById('botonMostrarFormulario').addEventListener('click', function () {
    const estiloCSS = document.getElementById('estiloCSS');
    if (estiloActivo) {
        estiloCSS.disabled = true;
        this.textContent = 'Agregar tarea';
    } else {
        estiloCSS.disabled = false;
        this.textContent = 'Agregar tarea';
    }
    estiloActivo = !estiloActivo;
});

//genera la funcion para agregar tareas
document.getElementById('botonAgregarTarea').addEventListener('click', function () {
    const taskInput = document.getElementById('nuevaTarea');
    const task = taskInput.value.trim();
    if (task) {
        const table = document.getElementById('tabla-tareas').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const taskCell = newRow.insertCell(0);
        taskCell.textContent = task;

        const actionCell = newRow.insertCell(1);
        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finalizar';
        finishBtn.classList.add('btn', 'btn-danger');
        finishBtn.addEventListener('click', function () {
            table.deleteRow(newRow.rowIndex - 1);
        });
        actionCell.appendChild(finishBtn);

        taskInput.value = ''; // Limpiar el campo de entrada
        document.getElementById('estiloCSS').disabled = false; // Ocultar el contenedor de entrada
    } else {
        alert('Por favor, ingrese una tarea.');
    }
});






