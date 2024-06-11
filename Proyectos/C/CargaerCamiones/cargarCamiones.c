/* 
Nombre del programa : Carga de Camiones
Fecha : 11 / 06 / 2024
Autor : Pedro Pérez Montero
*/

//Directivas de preprocesamiento
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//Estructuras
typedef enum{
    SALIR_ARCHIVO, CARGAR_ARCHIVO, CREAR_ARCHIVO
}e_archivo;

typedef enum{
    SALIR_PROGRAMA, DEFINIR_CARGA_CAMION, CARGAR_PRODUCTO, MOSTRAR_CARGA_ACTUAL, MOSTRAR_STOCK_ESPACIOS, HISTORIAL_CAMIONES_CARGADOS
}e_programa;

typedef struct {
    char * matricula;
    int pesoMax;
    int palosMax;
}t_camion;

typedef struct{
    char * nombre;
    int peso;
}t_producto;

typedef struct{
    char * nombre;
    t_producto * productos;
    int capacidadMax;
}t_espacio;

//Cabecera de funciones
e_archivo menuArchivo();
e_programa menuPrograma(); 
void CargarArchivo();
void CrearArchivo();

int main(int argc, char **argv){
    //Inicializacon de variables 
    int opcionArchivo = 0, opcionPrograma = 0;
    //Menu para iniciar el programa 
    opcionArchivo = menuArchivo();
    switch (opcionArchivo){
    case CARGAR_ARCHIVO:
        printf("Cargar Archivo\n");
        break;
    
    case CREAR_ARCHIVO:
        printf("Crear Archivo\n");
        break;
    
    case SALIR_ARCHIVO:
        printf("Saliendo del programa...\n");
        break;
    
    default:
        printf("ERROR : Opcion no valida\n");
    }

    //Menu opciones del programa
    do{
        opcionPrograma = menuPrograma();
        switch (opcionPrograma){
        case DEFINIR_CARGA_CAMION:
            printf("Definir carga de un camion\n");
            break;
        
        case CARGAR_PRODUCTO:
            printf("Cargar Producto\n");
            break;
        
        case MOSTRAR_CARGA_ACTUAL:
            printf("Mostrar cargar actual del camion\n");
            break;

        case MOSTRAR_STOCK_ESPACIOS:
            printf("Mostrar stock dentro de los espacios de trabajo\n");
            break;

        case HISTORIAL_CAMIONES_CARGADOS:
            printf("Mostrar camiones cargados\n");
            break;

        case SALIR_PROGRAMA:
            printf("Saliendo del programa...\n");
            break;

        default:
            printf("ERROR : Opcion no valida");
        }
    }while(opcionPrograma != SALIR_PROGRAMA);
    return 0;
}

//Funcion Menu de Archivo
e_archivo menuArchivo(){
    e_archivo opcionArchivo;
    printf("Menu de Archivo\n");
    printf("%d - Cargar Archivo\n", CARGAR_ARCHIVO);
    printf("%d - Crear Archivo\n", CREAR_ARCHIVO);
    printf("%d - Salir\n", SALIR_ARCHIVO);
    scanf("%d", &opcionArchivo);
    while(getchar() != '\n');
    return opcionArchivo;
}

e_programa menuPrograma(){
    e_programa opcionPrograma;
    printf("Menu del programa : \n");
    printf("%d - Definir la carga de un camion\n", DEFINIR_CARGA_CAMION);
    printf("%d - Cargar un producto en un camion\n", CARGAR_PRODUCTO);
    printf("%d - Mostrar carga actual de un camion\n", MOSTRAR_CARGA_ACTUAL);
    printf("%d - Mostrar los productos restantes en los espacios\n", MOSTRAR_STOCK_ESPACIOS);
    printf("%d - Historial de camiones cargados\n", HISTORIAL_CAMIONES_CARGADOS);
    printf("%d - Salir\n", SALIR_PROGRAMA);
    scanf("%d", &opcionPrograma);
    while(getchar() != '\n');
    return opcionPrograma;
}
