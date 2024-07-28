document.getElementById('seleccion-categoria').addEventListener('change', () => {
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
    
    let tiempo = [
        {value: 'segundo', text: 'Segundo'},
        {value: 'minuto', text: 'Minuto'},
        {value: 'hora', text: 'Hora'},
        {value: 'dia', text: 'Dia'},
        {value: 'mes', text: 'Mes'},
        {value: 'anyo', text: 'Año'},
        {value: 'decada', text: 'Decada'},
        {value: 'siglo', text: 'Siglo'},
    ]

    let energia = [
        {value: 'kilojulio', text: 'Kilojulio'},
        {value: 'kilocalorias', text: 'Kilocalorias'},
        {value: 'kilovatio-hora', text: 'Kilovatio hora'},

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
    function calcular_tiempo() {
        if(selector_derecha.value == selector_izquierda.value){
            input_derecha.value = input_izquierda.value;
        }else{
            switch(selector_izquierda.value){
                case 'segundo':
                    if (selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) / 60;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) / 3600;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) / 86400;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) / 2.628e+6;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) /  3.154e+7;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  3.154e+8;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  3.154e+9;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'minuto':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 60;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) / 60;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) / 1440;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) / 43800;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) /  525600;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  5.256e+6;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  5.256e+7;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'hora':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 3600;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 60;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) / 24;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) / 730;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) /  8760;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  87600;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  876000;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'dia':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 86400;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 1440;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) * 24;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) / 30.417;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) / 365;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  3650;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  36500;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'mes':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 2.628e+6;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 43810;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) * 730.1;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) * 30.421;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) /  12;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  120;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  1200;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'anyo':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 3.154e+7;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 525700;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) * 8761;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) * 365;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) *  12.00;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) /  11.998;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  1200;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
                case 'decada':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 3.154e+8;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 5.257e+6;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) * 87610;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) * 3650;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) *  120.00;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) * 10;
                    }else if(selector_derecha.value == 'siglo'){
                        input_derecha.value = (+input_izquierda.value) /  10;
                    }else{
                        input_derecha.value = (+input_izquierda.value);
                    }
                    break;
                case 'siglo':
                    if (selector_derecha.value == 'segundo'){
                        input_derecha.value = (+input_izquierda.value) * 3.154e+9;
                    }else if(selector_derecha.value == 'minuto'){
                        input_derecha.value = (+input_izquierda.value) * 5.257e+7;
                    }else if(selector_derecha.value == 'hora'){
                        input_derecha.value = (+input_izquierda.value) * 876100;
                    }else if(selector_derecha.value == 'dia'){
                        input_derecha.value = (+input_izquierda.value) * 36500;
                    }else if(selector_derecha.value == 'mes'){
                        input_derecha.value = (+input_izquierda.value) *  1200;
                    }else if(selector_derecha.value == 'anyo'){
                        input_derecha.value = (+input_izquierda.value) *  100;
                    }else if(selector_derecha.value == 'decada'){
                        input_derecha.value = (+input_izquierda.value) *  10;
                    }else{
                        input_derecha.value = +input_izquierda.value
                    }
                    break;
            }
        }
    }
    
    //Categoria
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
        
        case 'tiempo':
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
            
            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', calcular_tiempo);
            document.getElementById('unidades-derecha').addEventListener('change', calcular_tiempo);
            document.getElementById('derecha').addEventListener('input', calcular_tiempo);
            document.getElementById('izquierda').addEventListener('input', calcular_tiempo);
            });
            break;

        case 'energia':
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
            selector_derecha.value = 'kilocaloria'
            
            // Cuando el elemento de la izquierada cambie
            document.getElementById('unidades-izquierda').addEventListener('change', calcular_tiempo);
            document.getElementById('unidades-derecha').addEventListener('change', calcular_tiempo);
            document.getElementById('derecha').addEventListener('input', calcular_tiempo);
            document.getElementById('izquierda').addEventListener('input', calcular_tiempo);
            });
            break;
    }
});
