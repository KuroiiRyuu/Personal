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
#include <string.h>

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
    char * Titulo;
    t_fecha Fecha;
    char * contenido;
}t_tarea;

typedef struct{
    int numTareas;
    int tareasCompletadas;
    t_tarea * tareas;
}t_todo;

//Cabecera de funciones
t_menu menu(int tareas_total, int tareas_completadas);
void agregar_tarea(t_todo * toDo);
t_tarea agregar_especificaciones_tarea();
char * leerLinea();


int main(int argc, char ** argv){
    //Inicializacion de variables
    t_todo toDo;
    toDo.numTareas = 0;
    toDo.tareasCompletadas = 0;
    
    //Memoria
    toDo.tareas = malloc(sizeof(t_tarea));

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
                agregar_tarea(&toDo);
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

void agregar_tarea(t_todo * toDo){
    toDo->numTareas++;
    toDo->tareas = realloc(toDo->tareas, sizeof(t_tarea)* toDo->numTareas);
    toDo->tareas[toDo->numTareas - 1] = agregar_especificaciones_tarea();
    toDo->tareas[toDo->numTareas - 1].id_tarea = toDo->numTareas;
}

t_tarea agregar_especificaciones_tarea(){
    //Inicializacion de variables
    t_tarea tarea;
    char * aux = NULL;
    char opcion = 0;

    //Agregar items
    tarea.id_tarea = 0;
    printf("Describe el titulo de la tarea : ");
    tarea.Titulo = leerLinea();
    printf("Introducde la fecha (DD/MM/AAAA/) : ");
    aux = leerLinea();
    tarea.Fecha.dia = strtol(strtok(aux, "/"), NULL, 10);
    tarea.Fecha.mes = strtol((aux = strtok(NULL, "/")), NULL, 10);
    tarea.Fecha.año = strtol(strstr(aux, "/"), NULL, 10);
    printf("Quieres añadir una descripcion a la tarea? S/N\n----> ");
    scanf("%c", &opcion);
    while(getchar() != '\n');
    if (opcion == 'S'){
        tarea.contenido = leerLinea();
    }else{
        tarea.contenido = NULL;
    }
    free(aux);
}

char * leerLinea(){
    int numLetra = 0;
    char letra = 0;
    char * frase = NULL;

    while((letra = getchar()) != '\n'){
        numLetra++;
        frase = realloc(frase, sizeof(char) * numLetra);
        frase[numLetra - 1] = letra;
    }
    frase[numLetra] = '\0';
    return frase;
}