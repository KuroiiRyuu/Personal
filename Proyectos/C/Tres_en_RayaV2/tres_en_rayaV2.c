/*
Nombre del programa :  Tres en Raya
Autor : Pedro Pérez Montero
Fecha : 09 / 04 / 2024
*/

//Directiva de preprocesamiento
#include <stdio.h>
#include <stdlib.h>

//Estrucutras
typedef enum{
    salir, crear_partida, continuar_partida
}t_menu;

typedef struct{
    char * NameJ1;
    char * NameJ2;
    char tablero[3][3];
}t_partida;

//Cabecera de funciones
t_menu menu();

int main(int argc, char *argv[]){
    //Inicializacion de variables
    t_menu opcion = 0;
    
    //Menu
    do{
        opcion = menu();
        switch(opcion){
            case crear_partida:
                printf("Creando Partida...\n");
                break;
            
            case continuar_partida:
                printf("Cargando Archivo...\n");
                break;

            case salir:
                printf("Saliendo del Programa...\n");
                break;
            
            default:
                printf("Opcion Incorrrecta\n");
        }
    }while(opcion!= salir);
    return 0;
}

t_menu menu(){
    int opcion = 0;
    printf("---------TIC TAC TOE---------\n");
    printf("%d - Crear Partida\n", crear_partida);
    printf("%d - Continuar Partida\n", continuar_partida);
    printf("%d - Salir\n", salir);
    printf("------------------------------\n---> ");
    scanf("%d", &opcion);
    return opcion;
}