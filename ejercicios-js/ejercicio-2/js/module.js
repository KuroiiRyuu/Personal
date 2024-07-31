// modulos.js

export function eliminar_buffer_selectores(selector_izquierda, selector_derecha){
    while (selector_derecha.firstChild) {
        selector_derecha.removeChild(selector_derecha.firstChild);  
    }
    while (selector_izquierda.firstChild) {
        selector_izquierda.removeChild(selector_izquierda.firstChild);  
    } 
}

// Funcion para calcular la temperatura 
export function calcular_temperatura(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
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

// Funcion para calcular el tiempo
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

// Funcion para caulcular la energia
export function calcular_energia(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    switch(selector_izquierda.value){
        case 'kilojulio':
            switch(selector_derecha.value){
                case 'kilojulio':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'kilocalorias':
                    input_derecha.value = (+input_izquierda.value) / 4,184;
                    break;
                case 'kilovatio-hora':
                    input_derecha.value = +input_izquierda.value / 3600;
                    break;
            }
            break;
        case 'kilocalorias':
            switch(selector_derecha.value){
                case 'kilojulio':
                    input_derecha.value = +input_izquierda.value * 4,184;
                    break;
                case 'kilocalorias':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'kilovatio-hora':
                    input_derecha.value = +input_izquierda.value /  860,4;
                    break;
            }
            break;
        case 'kilovatio-hora':
            switch(selector_derecha.value){
                case 'kilojulio':
                    input_derecha.value = +input_izquierda.value * 3600;
                    break;
                case 'kilocalorias':
                    input_derecha.value = +input_izquierda.value * 860,4;
                    break;
                case 'kilovatio-hora':
                    input_derecha.value = +input_izquierda.value
                    break;
            }
    }
}

export function calcular_longitud(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    switch(selector_izquierda.value){
        case 'metro':
            switch(selector_derecha.value){
                case 'metro':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'milla':
                    input_derecha.value = (+input_izquierda.value) / 1609;
                    break;
                case 'yarda':
                    input_derecha.value = +input_izquierda.value * 1.094;
                    break;
                case 'pie':
                    input_derecha.value = +input_izquierda.value *  3.281;
                    break;
                case 'pulgada':
                    input_derecha.value = +input_izquierda.value *  39.37;
                    break;
            }
            break;
        case 'milla':
            switch(selector_derecha.value){
                case 'metro':
                    input_derecha.value = +input_izquierda.value * 1609;
                    break;
                case 'milla':
                    input_derecha.value = (+input_izquierda.value);
                    break;
                case 'yarda':
                    input_derecha.value = +input_izquierda.value * 1760;
                    break;
                case 'pie':
                    input_derecha.value = +input_izquierda.value * 5280;
                    break;
                case 'pulgada':
                    input_derecha.value = +input_izquierda.value * 63360;
                    break;
            }
            break;
        case 'yarda':
            switch(selector_derecha.value){
                case 'metro':
                    input_derecha.value = +input_izquierda.value / 1.094;
                    break;
                case 'milla':
                    input_derecha.value = (+input_izquierda.value) / 1760;
                    break;
                case 'yarda':
                    input_derecha.value = +input_izquierda.value;
                    break;
                case 'pie':
                    input_derecha.value = +input_izquierda.value * 3;
                    break;
                case 'pulgada':
                    input_derecha.value = +input_izquierda.value * 36;
                    break;
            }
            break;
        case 'pie':
            switch(selector_derecha.value){
                case 'metro':
                    input_derecha.value = +input_izquierda.value /  3.281;
                    break;
                case 'milla':
                    input_derecha.value = (+input_izquierda.value) / 5280;
                    break;
                case 'yarda':
                    input_derecha.value = +input_izquierda.value / 3;
                    break;
                case 'pie':
                    input_derecha.value = +input_izquierda.value;
                    break;
                case 'pulgada':
                    input_derecha.value = +input_izquierda.value * 12;
                    break;
            }
            break;
        case 'pulgada':
            switch(selector_derecha.value){
                case 'metro':
                    input_derecha.value = +input_izquierda.value / 39.37;
                    break;
                case 'milla':
                    input_derecha.value = (+input_izquierda.value) / 63360;
                    break;
                case 'yarda':
                    input_derecha.value = +input_izquierda.value / 36;
                    break;
                case 'pie':
                    input_derecha.value = +input_izquierda.value / 12;
                    break;
                case 'pulgada':
                    input_derecha.value = +input_izquierda.value;
                    break;
            }
            break;
    }
}

// Funcion para calcular la presion
export function calcular_presion(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    switch(selector_izquierda.value){
        case 'pascal':
            switch(selector_derecha.value){
                case 'pascal':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'atmosfera':
                    input_derecha.value = (+input_izquierda.value) / 101300;
                    break;
                case 'bar':
                    input_derecha.value = +input_izquierda.value / 100000;
                    break;
            }
            break;
        case 'atmosfera':
            switch(selector_derecha.value){
                case 'pascal':
                    input_derecha.value = +input_izquierda.value * 101300;
                    break;
                case 'atmosfera':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'bar':
                    input_derecha.value = +input_izquierda.value * 1.013;
                    break;
            }
            break;
        case 'bar':
            switch(selector_derecha.value){
                case 'pascal':
                    input_derecha.value = +input_izquierda.value * 100000;
                    break;
                case 'atmosfera':
                    input_derecha.value = +input_izquierda.value / 1.013;
                    break;
                case 'bar':
                    input_derecha.value = +input_izquierda.value
                    break;
            }
    }
}

// Funcion para calcular la masa
export function calcular_masa(selector_izquierda, selector_derecha, input_izquierda, input_derecha){
    switch(selector_izquierda.value){
        case 'kilogramo':
            switch(selector_derecha.value){
                case 'kilogramo':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'libra':
                    input_derecha.value = (+input_izquierda.value) *  2.205;
                    break;
                case 'onza':
                    input_derecha.value = +input_izquierda.value * 35.274;
                    break;
            }
            break;
        case 'libra':
            switch(selector_derecha.value){
                case 'kilogramo':
                    input_derecha.value = +input_izquierda.value / 2.205;
                    break;
                case 'libra':
                    input_derecha.value = +input_izquierda.value
                    break;
                case 'onza':
                    input_derecha.value = +input_izquierda.value * 16;
                    break;
            }
            break;
        case 'onza':
            switch(selector_derecha.value){
                case 'kilogramo':
                    input_derecha.value = +input_izquierda.value / 35.274;
                    break;
                case 'libra':
                    input_derecha.value = +input_izquierda.value / 16;
                    break;
                case 'onza':
                    input_derecha.value = +input_izquierda.value
                    break;
            }
    }
}