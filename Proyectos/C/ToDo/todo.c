/*
Nombre del programa : To Do 
Autor : Pedro Pérez Montero
Fecha : 01 / 06 / 2024
*/

/*
Menu del programa ->
    Tareas por hacer = &
    Tareas completadas = &
    1 Ver las tareas
    2 Agreagr tarea
    3 Completar tarea
    4 Eliminar Tarea
    5 Salir
*/


//Directivas de preprocesamiento
#include <stdio.h>
#include <stdlib.h>

//Estructuras
typedef enum{
    VER_TAREA = 1, AGREGAR_TAREA, COMPLETAR_TAREA, ELIMINAR_TAREA, SALIR 
}t_menu;
typedef struct{
    int dia;
    int mes;
    int año;
}t_fecha;

typedef struct{
    int id_tarea;
    char Titulo;
    t_fecha Fecha;
    char contenido;
}t_tarea;

typedef struct{
    int numTareas;
    int tareasCompletadas;
    t_tarea * tareas;
}t_todo;

//Cabecera de funciones
t_menu menu(int tareas_total, int tareas_completadas);

int main(int argc, char ** argv){
    //Inicializacion de variables
    t_todo toDo;
    toDo.numTareas = 0;
    toDo.tareasCompletadas = 0;

    int opcion = 0;
    //Menu
    do{
        opcion = menu(toDo.numTareas, toDo.tareasCompletadas);
        switch(opcion){
            case VER_TAREA:
                printf("Ver las tareas\n");
                break;
            case AGREGAR_TAREA:
                printf("Agregar Tarea\n");
                break;
            case COMPLETAR_TAREA:
                printf("Completar Tarea\n");
                break;
            case ELIMINAR_TAREA:
                printf("Eliminar Tarea\n");
                break;
            case SALIR:
                printf("Saliendo del programa...\n");
                break;
        }
    }while(opcion != 5);
    return 1;
}

t_menu menu(int tareas_total, int tareas_completadas){
    t_menu opcion;
    printf("Menu del programa : \n");
    printf("\tTareas por hacer : %d\n", tareas_total - tareas_completadas);
    printf("\tTareas completadas : %d\n", tareas_completadas);
    printf("\t%d. Ver las Tareas\n", VER_TAREA);
    printf("\t%d. Agregar Tarea\n", AGREGAR_TAREA);
    printf("\t%d. Completar Tarea\n", COMPLETAR_TAREA);
    printf("\t%d. Eliminar Tarea\n", ELIMINAR_TAREA);
    printf("\t%d. Salir\n--->", SALIR);
    scanf("%d", &opcion);
    while(getchar() != '\n');
    return opcion;
}
