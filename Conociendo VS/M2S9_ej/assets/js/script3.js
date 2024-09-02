// Creación de elementos
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

// Agrega un evento para mostrar/ocultar "text2" al pasar el mouse sobre "text1"
text1.addEventListener('mouseover', () => {
        text2.style.display = 'block'; // Muestra "text2"
});

text1.addEventListener('mouseout', () => {
        text2.style.display = 'none'; // Oculta "text2"
});

const img = document.getElementById('img');

// Al hacer clic en la imagen, la agranda al 100%
img.addEventListener('click', () => {
        img.style.transform = 'scale(2)'; // Escala al 200%
});

// Al salir de la imagen, restaura su tamaño original
img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Escala al 100%
});

const caja3 = document.getElementById('caja3');

// Agrega un evento para agrandar la letra al hacer doble clic
caja3.addEventListener('dblclick', () => {
        caja3.style.fontSize = '24px'; // Cambia el tamaño de la letra (se puede ajustar a gusto)
});