//modulos.js

export function eliminar_buffer_selectores(selector_izquierda, selector_derecha){
    while (selector_derecha.firstChild) {
        selector_derecha.removeChild(selector_derecha.firstChild);  
    }
    while (selector_izquierda.firstChild) {
        selector_izquierda.removeChild(selector_izquierda.firstChild);  
    } 
}


export function calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    console.log(selector_izquierda.value);
    console.log(input_izquierda.value);
    console.log(selector_derecha.value);
    console.log(input_derecha.value);
    switch(selector_izquierda.value){
        case 'celsius':
            switch(selector_derecha.value){
                case 'celsius':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'farhrenheit':
                    input_derecha.value = (+input_izquierda.value) * (9 / 5)  + 32;
                    break;
                case 'kelvin':
                    input_derecha.value = +input_izquierda.value +  273.15;
                    break;
            }
            break;
        case 'farhrenheit':
            switch(selector_derecha.value){
                case 'celsius':
                    input_derecha.value = (+input_izquierda.value - 32 ) * (9 / 5);
                    break;
                case 'farhrenheit':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'kelvin':
                    input_derecha.value = +((input_izquierda.value - 32 ) * (9 / 5)) +  273.15;
                    break;
            }
            break;
        case 'kelvin':
            switch(selector_derecha.value){
                case 'celsius':
                    input_derecha.value = +input_izquierda.value -  273.15;
                    break;
                case 'farhrenheit':
                    input_derecha.value = ((+input_izquierda.value - 273.15) * (9 / 5)) + 32;
                    break;
                case 'kelvin':
                    input_derecha.value = +input_izquierda.value
                    break;
            }
    }
}

export function calcular_tiempo(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    switch(selector_izquierda.value){
        case 'segundo':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'minuto':
                    input_derecha.value = (+input_izquierda.value) / 60;
                    break;
                case 'hora':
                    input_derecha.value = (+input_izquierda.value) / 3600;
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value) / 86400;
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value) / 2.628e+6;
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value) /  3.154e+7;
                    break;
            }
            break;
        case 'minuto':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = (+input_izquierda.value) * 60;
                    break;
                case 'minuto':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'hora':
                    input_derecha.value = (+input_izquierda.value) / 60;
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value) / 1440;
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value) / 43800;
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value) /  525600;
                    break;
            } 
            break;
        case 'hora':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = (+input_izquierda.value) * 3600;
                    break;
                case 'minuto':
                    input_derecha.value = (+input_izquierda.value) * 60;
                    break;
                case 'hora':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value) / 24;
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value) / 730;
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value) /  8760;
                    break;
            } 
            break;
        case 'dia':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = (+input_izquierda.value) * 86400;
                    break;
                case 'minuto':
                    input_derecha.value = (+input_izquierda.value) * 1440;
                    break;
                case 'hora':
                    input_derecha.value = (+input_izquierda.value) * 24;
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value);
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value) / 30;
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value) / 365;
                    break;
            }
            break;
        case 'mes':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = (+input_izquierda.value) * 2.628e+6;
                    break;
                case 'minuto':
                    input_derecha.value = (+input_izquierda.value) * 43810;
                    break;
                case 'hora':
                    input_derecha.value = (+input_izquierda.value) * 730.1;
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value) * 30.421;
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value);
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value) /  12;
                    break;
            }
            break;
        case 'anyo':
            switch(selector_derecha.value){
                case 'segundo':
                    input_derecha.value = (+input_izquierda.value) * 3.154e+7;
                    break;
                case 'minuto':
                    input_derecha.value = (+input_izquierda.value) * 525700;
                    break;
                case 'hora':
                    input_derecha.value = (+input_izquierda.value) * 8761;
                    break;
                case 'dia':
                    input_derecha.value = (+input_izquierda.value) * 365;
                    break;
                case 'mes':
                    input_derecha.value = (+input_izquierda.value) *  12
                    break;
                case 'anyo':
                    input_derecha.value = (+input_izquierda.value);
                    break;
            }
            break;
    }
}