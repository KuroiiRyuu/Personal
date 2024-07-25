


document.getElementById('seleccion-categoria').addEventListener('change', () =>{
    let categoria = document.getElementById('seleccion-categoria').value;
    let selector_derecha = document.getElementById('unidades-derecha');
    let selector_izquierda = document.getElementById('unidades-izquierda');
    let input_derecha = document.getElementById('derecha');
    let input_izquierda = document.getElementById('izquierda');
    let temperatura = [
        {value: 'celsius', text: 'Celsius'},
        {value: 'farhrenheit', text: 'Farhrenheit'},
        {value: 'kelvin', text: 'Kelvin'}
    ]
    // Funciones
    function calcular_temperatura(){
        if(selector_derecha.value == selector_izquierda.value){
            input_derecha.value = input_izquierda.value;
        }else{
            switch(selector_izquierda.value){
                case 'celsius':
                    if (selector_derecha.value == 'farhrenheit'){
                        input_derecha.value = (+input_izquierda.value) * (9 / 5)  + 32;
                    }else if(selector_derecha.value == 'kelvin'){
                        input_derecha.value = +input_izquierda.value +  273.15;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'farhrenheit':
                    if (selector_derecha.value == 'celsius'){
                        input_derecha.value = (+input_izquierda.value - 32 ) * (9 / 5);
                    }else if(selector_derecha.value == 'kelvin'){
                        input_derecha.value = +((input_izquierda.value - 32 ) * (9 / 5)) +  273.15;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'kelvin':
                    if (selector_derecha.value == 'farhrenheit'){
                        input_derecha.value = ((+input_izquierda.value - 273.15) * (9 / 5)) + 32;
                    }else if(selector_derecha.value == 'celsius'){
                        input_derecha.value = +input_izquierda.value -  273.15;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
            }
        }
    }
    // 
    switch(categoria){
        case 'temperatura' :

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
                
                // Cuando el elemento de la izquierada cambie
                document.getElementById('unidades-izquierda').addEventListener('change', calcular_temperatura);
                document.getElementById('unidades-derecha').addEventListener('change', calcular_temperatura);
                document.getElementById('derecha').addEventListener('input', calcular_temperatura);
                document.getElementById('izquierda').addEventListener('input', calcular_temperatura);
            });
            
            break;
    }


});
