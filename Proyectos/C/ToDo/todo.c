/*
Nombre del programa : To Do 
Autor : Pedro Pérez Montero
Fecha : 01 / 06 / 2024
*/

//Directivas de preprocesamiento
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//Estructuras
typedef enum {
    VER_TAREA = 1, AGREGAR_TAREA, COMPLETAR_TAREA, ELIMINAR_TAREA, SALIR 
} t_menu;

typedef struct {
    int dia;
    int mes;
    int año;
} t_fecha;

typedef struct {
    int id_tarea;
    char *Titulo;
    t_fecha Fecha;
    char *contenido;
    int completada;
} t_tarea;

typedef struct {
    int numTareas;
    int tareasCompletadas;
    t_tarea *tareas;
} t_todo;

//Cabecera de funciones
t_menu menu(int tareas_total, int tareas_completadas);
void agregar_tarea(t_todo *toDo);
t_tarea agregar_especificaciones_tarea();
char *leerLinea();
void mostrar_tareas(t_todo *toDo);
void completar_tarea(t_todo *toDo);
void eliminar_tarea(t_todo *toDo);
void liberar_memoria(t_todo *toDo);

int main(int argc, char **argv) {
    // Inicializacion de variables
    t_todo toDo;
    toDo.numTareas = 0;
    toDo.tareasCompletadas = 0;
    
    // Memoria
    toDo.tareas = malloc(sizeof(t_tarea) * 1);

    int opcion = 0;
    // Menu
    do {
        opcion = menu(toDo.numTareas, toDo.tareasCompletadas);
        switch (opcion) {
            case VER_TAREA:
                printf("Ver las tareas\n");
                mostrar_tareas(&toDo);
                break;
            case AGREGAR_TAREA:
                printf("Agregar Tarea\n");
                agregar_tarea(&toDo);
                break;
            case COMPLETAR_TAREA:
                printf("Completar Tarea\n");
                completar_tarea(&toDo);
                break;
            case ELIMINAR_TAREA:
                printf("Eliminar Tarea\n");
                eliminar_tarea(&toDo);
                break;
            case SALIR:
                printf("Saliendo del programa...\n");
                liberar_memoria(&toDo);
                break;
        }
    } while (opcion != SALIR);
    return 0;
}

t_menu menu(int tareas_total, int tareas_completadas) {
    int opcion;
    printf("\nTo Do\n");
    printf("Tareas por hacer : %d\n", tareas_total - tareas_completadas);
    printf("Tareas completadas : %d\n", tareas_completadas);
    printf("------------------------\n");
    printf("Menu del programa : \n");
    printf("\t%d. Ver las Tareas\n", VER_TAREA);
    printf("\t%d. Agregar Tarea\n", AGREGAR_TAREA);
    printf("\t%d. Completar Tarea\n", COMPLETAR_TAREA);
    printf("\t%d. Eliminar Tarea\n", ELIMINAR_TAREA);
    printf("\t%d. Salir\n---> ", SALIR);
    scanf("%d", &opcion);
    while (getchar() != '\n');
    return (t_menu) opcion;
}

void agregar_tarea(t_todo *toDo) {
    toDo->numTareas++;
    toDo->tareas = realloc(toDo->tareas, sizeof(t_tarea) * toDo->numTareas);
    toDo->tareas[toDo->numTareas - 1] = agregar_especificaciones_tarea();
    toDo->tareas[toDo->numTareas - 1].id_tarea = toDo->numTareas;
    toDo->tareas[toDo->numTareas - 1].completada = 0;
}

t_tarea agregar_especificaciones_tarea() {
    t_tarea tarea;
    char *aux = NULL;
    char opcion;

    printf("Describe el titulo de la tarea: ");
    tarea.Titulo = leerLinea();
    printf("Introduce la fecha (DD/MM/AAAA): ");
    aux = leerLinea();
    sscanf(aux, "%d/%d/%d", &tarea.Fecha.dia, &tarea.Fecha.mes, &tarea.Fecha.año);
    free(aux);
    printf("Quieres añadir una descripcion a la tarea? S/N\n----> ");
    scanf(" %c", &opcion);
    while (getchar() != '\n');
    if (opcion == 'S' || opcion == 's') {
        printf("Introduce la descripcion: ");
        tarea.contenido = leerLinea();
    } else {
        tarea.contenido = NULL;
    }
    return tarea;
}

char *leerLinea() {
    char *linea = NULL;
    int c, len = 0;
    while ((c = getchar()) != '\n' && c != EOF) {
        linea = realloc(linea, len + 2);
        linea[len++] = c;
    }
    if (linea) {
        linea[len] = '\0';
    }
    return linea;
}

void mostrar_tareas(t_todo *toDo) {
    if (toDo->numTareas == 0) {
        printf("\nNo hay tareas\n");
    } else {
        for (int i = 0; i < toDo->numTareas; i++) {
            printf("---------- TAREA %d ----------\n", i + 1);
            printf("Nombre: %s\n", toDo->tareas[i].Titulo);
            if (toDo->tareas[i].contenido) {
                printf("Contenido adicional: %s\n", toDo->tareas[i].contenido);
            }
            printf("Fecha: %d/%d/%d\n", toDo->tareas[i].Fecha.dia, toDo->tareas[i].Fecha.mes, toDo->tareas[i].Fecha.año);
            printf("Estado: %s\n", toDo->tareas[i].completada ? "Completada" : "Pendiente");
        }
    }
    printf("------------------------------\n\n");
}

void completar_tarea(t_todo *toDo) {
    int id;
    printf("Introduce el ID de la tarea a completar: ");
    scanf("%d", &id);
    while (getchar() != '\n');
    if (id > 0 && id <= toDo->numTareas && !toDo->tareas[id - 1].completada) {
        toDo->tareas[id - 1].completada = 1;
        toDo->tareasCompletadas++;
        printf("Tarea %d completada.\n", id);
    } else {
        printf("ID de tarea no valido o tarea ya completada.\n");
    }
}

void eliminar_tarea(t_todo *toDo) {
    int id;
    printf("Introduce el ID de la tarea a eliminar: ");
    scanf("%d", &id);
    while (getchar() != '\n');
    if (id > 0 && id <= toDo->numTareas) {
        free(toDo->tareas[id - 1].Titulo);
        if (toDo->tareas[id - 1].contenido) {
            free(toDo->tareas[id - 1].contenido);
        }
        for (int i = id - 1; i < toDo->numTareas - 1; i++) {
            toDo->tareas[i] = toDo->tareas[i + 1];
        }
        toDo->numTareas--;
        toDo->tareas = realloc(toDo->tareas, sizeof(t_tarea) * toDo->numTareas);
        printf("Tarea %d eliminada.\n", id);
    } else {
        printf("ID de tarea no valido.\n");
    }
}

void liberar_memoria(t_todo *toDo) {
    for (int i = 0; i < toDo->numTareas; i++) {
        free(toDo->tareas[i].Titulo);
        if (toDo->tareas[i].contenido) {
            free(toDo->tareas[i].contenido);
        }
    }
    free(toDo->tareas);
}
