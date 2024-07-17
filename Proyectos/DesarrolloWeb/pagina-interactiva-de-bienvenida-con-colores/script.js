document.getElementById('enviar').addEventListener('click', function() {
    // Obtener el valor del nombre ingresado
    var name = document.getElementById('nombre').value;
    
    // Obtener el valor del color seleccionado
    var color = document.getElementById('selector-color').value;
    
    // Crear el mensaje personalizado
    var message = 'Hola, ' + name + '!';
    
    // Obtener el elemento donde se mostrará el mensaje
    var messageElement = document.getElementById('mensaje');
    var messageContainer = document.getElementById('contenedor-mensaje');
    
    // Cambiar el contenido del mensaje
    messageElement.textContent = message;
    
    // Cambiar el color del mensaje
    messageElement.style.color = color;

    // Cambiar el padding del contenedor del mensaje
    messageContainer.style.padding = "10px";
});
