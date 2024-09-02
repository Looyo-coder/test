document.getElementById('showInputBtn').addEventListener('click', function() {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.style.display = 'block';
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task) {
        const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        
        const taskCell = newRow.insertCell(0);
        taskCell.textContent = task;
        
        const actionCell = newRow.insertCell(1);
        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finalizar';
        finishBtn.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex - 1);
        });
        actionCell.appendChild(finishBtn);
        
        taskInput.value = ''; // Limpiar el campo de entrada
        document.getElementById('inputContainer').style.display = 'none'; // Ocultar el contenedor de entrada
    } else {
        alert('Por favor, ingrese una tarea.');
    }
});