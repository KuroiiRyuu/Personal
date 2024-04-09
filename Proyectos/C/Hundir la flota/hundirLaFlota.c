/*
Nombre del programa : Hundir la flota
Autor : Pedro Pérez Montero
Fecha : 29 / 11 / 2023
*/

// Directivas de preprocesamiento
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // getpid

// Definiciones
#define FIL 10
#define COL 10
#define BARCOS 4

// Cabecera de funciones
void generarMapa(char tablero[][COL]); //Genera el agua en el Mapa 
void pintarElMapa(char tablero[][COL]); //Pinta el mapa en consola
void agregarBarcos(char tablero[][COL], int cordenadas[][2], int *randomX, int *randomY); //Agrega la poscion 0 para los barcos
void agregarRestante(char tablero[][COL], int cordenadas[][2], int *posicion); //Rellena la posicion origen de los barcos
void barcoXPequeño(char tablero[][COL], int cordenadas[][2], int *posicion); //Genera un barco pequeño X en la posicion (x,y)
void barcoYPequeño(char tablero[][COL], int cordenadas[][2], int *posicion); //Genera un barco pequeño Y en la posicion (x,y)
void barcoX(char tablero[][COL], int cordenadas[][2], int *posicion); //Genera un barco X en la posicion (x,y)
void barcoY(char tablero[][COL], int cordenadas[][2], int *posicion); //Genera un barco Y en la posicion (x,y)


// Funcion main
void main() {
    // Iniciar las variables
    char tablero[FIL][COL];
    int cordenadas[4][2];
    int aleatorioX = 0, aleatorioY = 0, posicion = 0;
    int i = 0, j = 0;


    //Semilla aleatoria
    srand(getpid());

    // Generar el mapa : 0 Agua
    generarMapa(tablero);
    pintarElMapa(tablero);

    printf("\n-------------------------------------------------------------------\n\nCordenadas :\n");
    
    //Generar punto 0 de los barcos : 1 Barcos
    agregarBarcos(tablero, cordenadas, &aleatorioX, &aleatorioY);
    printf("\n-------------------------------------------------------------------\n");
    pintarElMapa(tablero);

    printf("\n-------------------------------------------------------------------\n");

    //Generar el resto de los barcos
    agregarRestante(tablero, &aleatorioX, &aleatorioY);
    


}

//Pinta el mapa
void  pintarElMapa(char tablero[][COL]){
    // Iniciar variables funcion generarMapa
    int i = 0, j = 0;

    //Recorrer la array tablero
    for (i = 0; i < FIL; i++) {
        for (j = 0; j < COL; j++) {
            //Agregar un 0 en cada posicion de la array
            printf("%c \t", tablero[i][j]);
        }

        printf("\n");
    }

}

//General el mapa
void generarMapa(char tablero[][COL]) {
    // Iniciar variables funcion generarMapa
    int i = 0, j = 0;
    
    //Recorrer la array tablero
    for (i = 0; i < FIL; i++) {
        for (j = 0; j < COL; j++) {
            //Enseñar que hay en cada poscion de la array
            tablero[i][j] = '-';
        }
    }
}


//Añade a los enemigos en el mapa
void agregarBarcos(char tablero[][COL], int cordenadas[][2], int *randomX, int *randomY){
    //Iniciar variables funcion generarMapa
    int i = 0, j = 0, k = 0;

    for (k = 0; k < 4; k++){
        //Generar numero aleatorio
        *randomX = rand()%10;
        *randomY = rand()%10;
        //printf("X = %d, Y = %d\n", *randomX, *randomY);

        //Recorrer la array de posionoes de barcos
        for (i = 0; i < 4; i++) {
            
            cordenadas[i][0] = *randomX;
            cordenadas[i][1] = *randomY;
        }

        //Mostrar Posiciones aleatorias
        for (i = 0; i < 1; i++) {
            for (j = 0; j < 2; j++) {
            
            printf("%d \t", cordenadas[i][j]);
            }

        printf("\n");
    }
        //Recorrer la array para cambiar los 0 por 1
        for (i = 0; i < FIL; i++) {
            for (j = 0; j < COL; j++) {
            //Agregar la poscion 0 de un barco
            tablero[*randomX][*randomY] = '1';
        }
    }
    }
    
}

//Los diferentes tipos de barcos que se pueden generar
//Se hara con diferentes funciones
//Cada barco se generar con una funcion diferente y luego una funcion hara un random para determinar que barco es
/*Solucion de como lo voy ha hacer, tengo una cordenada x e y, un random decidira que tipo de barco sera.
Si el barco es por ejemplo un barco pequeño X, me quedare con la X fija e ire buscando que Y tengo que cabiar para generar
ese barco, que en este caso seria el anterior y el posterior. Por ejemplo : 
                                        (x,y)
    Tengo el caso de que el punto es el (5,5). Se que tengo que estar en la fila 5 y que tendre que editar las posiciones
    (5,4) y (5,6) para poder generar el barco pequeño.
                                    


*/


void agregarRestante(char tablero[][COL], int cordenadas[][2], int *posicion){
    //Iniciar variables funcion generarMapa
    int numero = 0, i = 0;
    
    numero = rand()%4 + 1;

    switch (numero){
        case 1 : barcoXPequeño(tablero, cordenadas, *posicion);
            break;
        case 2: barcoYPequeño(tablero, cordenadas, *posicion);
            break;
        case 3 : barcoX(tablero, cordenadas, *posicion);
            break;
        case 4: barcoY(tablero, cordenadas, *posicion);
                break;
        default : printf("Error");
    }

    printf("\n");

}


//En vez de llamar a las variables random, llamar a la lista que las contiene.


//Genera el barco pequeño en la posicion (x,y) en el eje X
void barcoXPequeño(char tablero[][COL], int cordenadas[][2], int *posicion){
    //Forma del barco pequeño en el eje X
    // 1   1   1
    //     0 -> Origen
    printf("barcoXChiquitito\n");

    ////Iniciar variables funcion barcoXPequeño
    int i = 0;

    printf("Posicion barcoXChiquitito : %d\n", *posicion);

    //Generar los numeros

    printf("Cordenadas de este barco : (%d,%d)\n", cordenadas[0][0], cordenadas[0][1]);

    tablero[cordenadas[*posicion][0]][cordenadas[*posicion][1] - 1] = '1';
    tablero[cordenadas[*posicion][0]][cordenadas[*posicion][1] + 1] = '1';

    *posicion = *posicion + 1;

}

//Genera el barco pequeño en la posicion (x,y) en el eje Y
void barcoYPequeño(char tablero[][COL], int cordenadas[][2], int *posicion){
    //Forma del barco pequeño en el eje Y
    // 1
    // 1 -> 0 -> Origen
    // 1

    printf("Posicion barcoYChiquitito : %d\n", *posicion);
    printf("Cordenadas de este barco : (%d,%d)\n", cordenadas[1][0], cordenadas[1][1]);
    printf("barcoYChiquitito\n");
    tablero[cordenadas[*posicion][0] - 1][cordenadas[*posicion][1]] = '1';
    printf("barcoYChiquitito Anterior : (%d,%d)\n", cordenadas[*posicion][0], cordenadas[*posicion][1] - 1);
    tablero[cordenadas[*posicion][0] + 1][cordenadas[*posicion][1]] = '1';
    printf("barcoYChiquitito Posterior : (%d,%d)\n", cordenadas[*posicion][0], cordenadas[*posicion][1] + 1);

    *posicion = *posicion + 1;

}
//Genera el barco en la posicion (x,y) en el eje X
void barcoX(char tablero[][COL], int cordenadas[][2], int *posicion){
    //Forma del barco en el eje X
    // 1   1   1    1   1
    //         0 -> Origen

    printf("barcoX\n");
    printf("Cordenadas de este barco : (%d,%d)\n", cordenadas[2][0], cordenadas[2][1]);
    printf("Posicion barcoX : %d\n", *posicion);

    *posicion = *posicion + 1;

}

//Genera el barco en la posicion (x,y) en el eje Y
void barcoY(char tablero[][COL], int cordenadas[][2], int *posicion){
    //Forma del barco en el eje Y
    // 1
    // 1
    // 1 -> 0 -> Origen
    // 1
    // 1


    printf("barcoY\n");
    printf("Cordenadas de este barco : (%d,%d)\n", cordenadas[3][0], cordenadas[3][1]);
    printf("Posicion barcoY : %d\n", *posicion);

    *posicion = *posicion + 1;
}

