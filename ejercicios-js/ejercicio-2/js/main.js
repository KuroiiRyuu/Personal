// main.js
import {energia, longitud, presion, masa, temperatura, tiempo} from './variables.js';
import {eliminar_buffer_selectores, calcular_temperatura, calcular_tiempo, calcular_energia, calcular_longitud} from './module.js';

document.getElementById('seleccion-categoria').addEventListener('change', () => {
    let categoria = document.getElementById('seleccion-categoria').value;
    let selector_derecha = document.getElementById('unidades-derecha');
    let selector_izquierda = document.getElementById('unidades-izquierda');
    let input_derecha = document.getElementById('derecha');
    let input_izquierda = document.getElementById('izquierda');
    
    //Categoria
    console.log(categoria);
    switch(categoria){
        case 'temperatura' :
            //Elimina los campos anteriores
            eliminar_buffer_selectores(selector_izquierda, selector_derecha);
            // Rellenar los campos de opciones
            temperatura.forEach(temperatura => {
                // Crear los elementos
                let opcion_derecha = document.createElement('option');
                let opcion_izquierda = document.createElement('option');
                // Añado la informacion a los elementos
                opcion_derecha.value = temperatura.value;
                opcion_derecha.text = temperatura.text;
                opcion_izquierda.value = temperatura.value;
                opcion_izquierda.text = temperatura.text;
                // Inserto los elementos en el html
                selector_derecha.appendChild(opcion_derecha);
                selector_izquierda.appendChild(opcion_izquierda);
                
                //Agregar unos campos por defecto
                input_izquierda.value = 0;
                selector_izquierda.value = 'celsius'
                input_derecha.value = 32;
                selector_derecha.value = 'farhrenheit'
            });
            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', () => {
                calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('unidades-derecha').addEventListener('change', () => {
                calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('derecha').addEventListener('input', () => {
                calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('izquierda').addEventListener('input', () => {
                calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            break;
        
        case 'tiempo':
            //Elimina los campos anteriores
            eliminar_buffer_selectores(selector_izquierda, selector_derecha);
            // Rellenar los campos de opciones
            tiempo.forEach(tiempo => {
                // Crear los elementos
                let opcion_derecha = document.createElement('option');
                let opcion_izquierda = document.createElement('option');
                // Añado la informacion a los elementos
                opcion_derecha.value = tiempo.value;
                opcion_derecha.text = tiempo.text;
                opcion_izquierda.value = tiempo.value;
                opcion_izquierda.text = tiempo.text;
                // Inserto los elementos en el html
                selector_derecha.appendChild(opcion_derecha);
                selector_izquierda.appendChild(opcion_izquierda);
                
                //Agregar unos campos por defecto
                input_izquierda.value = 60;
                selector_izquierda.value = 'segundo'
                input_derecha.value = 1;
                selector_derecha.value = 'minuto'
            });

            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', () => {
                calcular_tiempo(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('unidades-derecha').addEventListener('change', () => {
                calcular_tiempo(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('derecha').addEventListener('input', () => {
                calcular_tiempo(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('izquierda').addEventListener('input', () => {
                calcular_tiempo(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            break;

        case 'energia':
            //Elimina los campos anteriores
            eliminar_buffer_selectores(selector_izquierda, selector_derecha);
            // Rellenar los campos de opciones
            energia.forEach(energia => {
                // Crear los elementos
                let opcion_derecha = document.createElement('option');
                let opcion_izquierda = document.createElement('option');
                // Añado la informacion a los elementos
                opcion_derecha.value = energia.value;
                opcion_derecha.text = energia.text;
                opcion_izquierda.value = energia.value;
                opcion_izquierda.text = energia.text;
                // Inserto los elementos en el html
                selector_derecha.appendChild(opcion_derecha);
                selector_izquierda.appendChild(opcion_izquierda);
                
                //Agregar unos campos por defecto
                input_izquierda.value = 1;
                selector_izquierda.value = 'kilojulio'
                input_derecha.value = 0.23;
                selector_derecha.value = 'kilocalorias'
                
                // Cuando el elemento de la izquierada cambie
            });
            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', () => {
                calcular_energia(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('unidades-derecha').addEventListener('change', () => {
                calcular_energia(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('derecha').addEventListener('input', () => {
                calcular_energia(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('izquierda').addEventListener('input', () => {
                calcular_energia(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            break;
        
        case 'longitud':
            //Elimina los campos anteriores
            eliminar_buffer_selectores(selector_izquierda, selector_derecha);
            // Rellenar los campos de opciones
            longitud.forEach(longitud => {
                // Crear los elementos
                let opcion_derecha = document.createElement('option');
                let opcion_izquierda = document.createElement('option');
                // Añado la informacion a los elementos
                opcion_derecha.value = longitud.value;
                opcion_derecha.text = longitud.text;
                opcion_izquierda.value = longitud.value;
                opcion_izquierda.text = longitud.text;
                // Inserto los elementos en el html
                selector_derecha.appendChild(opcion_derecha);
                selector_izquierda.appendChild(opcion_izquierda);
                
                // Agregar unos campos por defecto
                input_izquierda.value = 1;
                selector_izquierda.value = 'metro'
                input_derecha.value = 39.37;
                selector_derecha.value = 'pulgada'
                
                
            });
            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', () => {
                calcular_longitud(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('unidades-derecha').addEventListener('change', () => {
                calcular_longitud(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('derecha').addEventListener('input', () => {
                calcular_longitud(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            document.getElementById('izquierda').addEventListener('input', () => {
                calcular_longitud(selector_izquierda, selector_derecha, input_izquierda, input_derecha);
            });
            break;
        
        case 'presion':
        //Elimina los campos anteriores
        eliminar_buffer_selectores(selector_izquierda, selector_derecha);
        // Rellenar los campos de opciones
        presion.forEach(presion => {
            // Crear los elementos
            let opcion_derecha = document.createElement('option');
            let opcion_izquierda = document.createElement('option');
            // Añado la informacion a los elementos
            opcion_derecha.value = presion.value;
            opcion_derecha.text = presion.text;
            opcion_izquierda.value = presion.value;
            opcion_izquierda.text = presion.text;
            // Inserto los elementos en el html
            selector_derecha.appendChild(opcion_derecha);
            selector_izquierda.appendChild(opcion_izquierda);
            
            //TODO: Agregar unos campos por defecto
            
            
            // Cuando el elemento de la izquierada cambie
        });
        //TODO: Acabar funcion longitud
        break;

        case 'masa':
            //Elimina los campos anteriores
            eliminar_buffer_selectores(selector_izquierda, selector_derecha);
            // Rellenar los campos de opciones
            masa.forEach(masa => {
                // Crear los elementos
                let opcion_derecha = document.createElement('option');
                let opcion_izquierda = document.createElement('option');
                // Añado la informacion a los elementos
                opcion_derecha.value = masa.value;
                opcion_derecha.text = masa.text;
                opcion_izquierda.value = masa.value;
                opcion_izquierda.text = masa.text;
                // Inserto los elementos en el html
                selector_derecha.appendChild(opcion_derecha);
                selector_izquierda.appendChild(opcion_izquierda);
                
                //TODO: Agregar unos campos por defecto

                
                // Cuando el elemento de la izquierada cambie
            });
            //TODO: Acabar funcion longitud
            break;
    }
});
