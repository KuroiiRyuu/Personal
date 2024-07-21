//Funciones
let screen = document.getElementById('panel');
let lastInput = '';

function appendValue(value) {
// Si el valor es un símbolo y la última entrada también es un símbolo, no hacer nada
    if (isSymbol(value) && (screen.innerHTML === '' || isSymbol(lastInput))) {
        return;
    }

    // Si el valor es un número o un punto, añadirlo al contenido de la pantalla
    screen.innerHTML += value;
    lastInput = value; // Actualizar la última entrada
}

function isSymbol(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
        // Actualizar la última entrada al resultado
        lastInput = screen.innerHTML; 
    } catch (e) {
        screen.innerHTML = 'Error';
    }
}

function clearScreen() {
    screen.innerHTML = '';
    lastInput = ''; // Reiniciar la última entrada
}
