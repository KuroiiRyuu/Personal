/*
Nombre del programa : Tres en ralla 
Autor : Pedro Pérez Montero
Fecha Inicio: 12 / 22 / 2023 
Fecha Final : 22 / 01 / 2024

    Plan de mejora: 
        1. Arreglar los arrores actuales (Hecho)
        2. Crear una funcion movimiento CPU (Hecho)
        3. Arreglar la funcion comprobacion para que depende de CPU o Jugador se comporte diferente (Hecho)
        4. Crear un creador de una careta donde se guardan los datos de una partida, si estas jugando
        y le das a x por ejemplo en vez de a una cordenada que cree el archivo de tal forma : nombre_jugadorVsnombre_jugador/CPU.
        4.1 Lo que se debera guardar en esta funcion son las siguientes cosas :
                                                                                - El array
                                                                                - El modo de juego 
                                                                                - Los nombres de los jugadores

        Para que el programa con estos datos sea capaz de poder devolver a la situacion donde se habia ejecutado el guardado de la partida.
        5. Crear la funcion que cargue la funcion a la array
        6. Mejorar la interfaz de usuario
*/

//Directivas de prerprocesameinto
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define NAME 20


//Cabecera de funciones
//Inicializar el tablero
void iniciar(char tablero[][3], char nombreJ1[], char nombreJ2[]);
//Mostrar tablero
void mostrar(char tablero[][3]);
//Agregar ficha al tablero
void  agregarFicha(char tablero[][3], int *jugador, char name1[], char name2[], int modojuego);
//Comprobaciones tres en ralla
int comprobacion(char tablero[][3], char name1[], char name2[], int modojuego);
//Nombre Jugador
void playerName(char nombre[], int jugador);
//PlayerVsPlayer
void jugadorVsJugador(char name1[], char name2[], char tablero[][3]);
//Player vs CPU
void jugadorVsCPU(char name1[], char tablero[][3]);
//Tabla con las coredenadas de ejemplo
void ejemplo();
//Guardar estado partida en un archivo txt
void GuadarPartida(char * archivo);


//Funcion main
void main(){
    int jugador = 1, ganador = 0, menu = 0, mjuego = 0, aux = 0;
    char nombreJ1[NAME], nombreJ2[NAME];
    char tablero[3][3];
    char saveChar[100];
    char extension[]=".txt";
    FILE *save;
    FILE *games;
    srand (time(NULL));


    //Iniciar todas las arrays
    iniciar(tablero, nombreJ1, nombreJ2);

    //Menu inicial
    do
    {
        printf("Escoge que opcion quieres realizar :\n\t1.Nueva Partida\n\t2.Salir\n--->");
        scanf("%d", &menu);
        printf("\n");
        //Condiciomes del menu
        switch (menu)
        {
        case 1:
            //Decidir 1 vs 1 o 1 vs CPU
            printf("Que modo de juego quieres :\n\t1. 1 vs 1\n\t2. 1 vs CPU\n--->");
            scanf("%d", &mjuego);
            printf("\n");
            switch(mjuego){
                case 1:
                    //Name Jugadores
                    playerName(nombreJ1, 0);
                    playerName(nombreJ1, 1);
                    printf("\n");
                    playerName(nombreJ2, 2);
                    
                    //Mostrar una tabla con las cordenadas
                    ejemplo();
                    //Funcion 1 vs 1
                    printf("\nInicio de la partida %s Vs %s\n\n", nombreJ1, nombreJ2);
                    jugadorVsJugador(nombreJ1, nombreJ2,  tablero);
                    break;
                case 2:
                    //Name Jugador
                    playerName(nombreJ1, 0);
                    playerName(nombreJ1, 1);
                    printf("->El nombre del jugador 1 es : %s\n", nombreJ1);

                    //funcion 1 vs CPU
                    jugadorVsCPU(nombreJ1,  tablero);
                    break;
                
                    default:
                    printf("Opcion no valida");
                    menu = 3;
                }
            break;

        case 2:
            printf("Cerrando el programa...\n");
            menu = 3;
            exit(-1);
            break;
        default:
            printf("Opcion seleccionada no valida\n");
        }
    } while (menu != 3);
}

//Funcion Iniciar
void iniciar(char tablero[][3], char nombreJ1[], char nombreJ2[]){

    //Inicar el tablero
    for (int i = 0; i<3; i++){
        for (int j = 0; j<3; j++){
            tablero[i][j] = '-';
        }
    }

    //Iniciar los nombres
    for (int i = 0; i < NAME; i++){
        nombreJ1[i] = ' ';
        nombreJ2[i] = ' ';
    }
}
    
//Mostrar tablero
void mostrar(char tablero[][3]){
    printf("\n---------------\n");
    for (int i = 0; i<3; i++){
        printf("| ");
        for (int j = 0; j<3; j++){
            printf("%c |  ", tablero[i][j]);
        }
        printf("\n---------------\n");
    }
    printf("\n");
}
void  agregarFicha(char tablero[][3], int *jugador, char name1[], char name2[], int modojuego){
    //Inicialicacion de las variables
    int posX = 0, posY = 0;
    int count = 0;
    char jugadroActual [NAME];
    char guardar = ' ';


    //Cadena Jugador actual
    if(modojuego){
        for (int i = 0; i < NAME; i++){
            if (*jugador == 1){
                jugadroActual[i] = name1[i];
            }
            else{
                jugadroActual[i] = name2[i];
            }
        }
    }else{
        for (int i = 0; i < NAME; i++){
            if (*jugador == 1){
            jugadroActual[i] = name1[i];
            }
            else{
                jugadroActual[i] = name2[i];
            }
        }
    }
    
    //CPU
    if ((modojuego == 2) && (*jugador == 2)){
        printf("La %s va a colocar ficha", jugadroActual);
        posX = rand () % 3 + 1;
        posY = rand () % 3 + 1;
        for (int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                if ((posX - 1 == i) && (posY - 1 == j)){
                    if (tablero[i][j] != '-'){
                        posX = rand () % 3 + 1;
                        posY = rand () % 3 + 1;
                    }else{
                        printf("La ficha de %s se colocara en las cordenadas (%d, %d)", jugadroActual, posX, posY);
                        tablero[i][j] = 'o';
                        *jugador = *jugador - 1;
                    }
                }
            }
        }

    }else{


         //Pedir la ficha Jugador
        printf("En que cordenada quieres colocar la ficha %s : ", jugadroActual);
        scanf("%d %d", &posX, &posY);
        while(getchar() != '\n');
        
        //Agregar la Ficha
        for (int i = 0; i < 3; i++){
            for (int j = 0; j < 3; j++){
                if ((posX - 1 == i) && (posY - 1 == j)){
                    if (tablero[i][j] != '-'){
                        printf("Ya esta cogida esa posicion");
                    }else{
                        printf("La ficha de %s se colocara en las cordenadas (%d, %d)", jugadroActual, posX, posY);
                        if (*jugador == 1){
                            tablero[i][j] = 'x';
                            *jugador = *jugador + 1;
                        }
                        else if(*jugador == 2){
                            tablero[i][j] = 'o';
                            *jugador = *jugador - 1;
                        }else{
                            return;
                        }

                    }               
                }
            }
        }
    }

   
}


int comprobacion(char tablero[][3], char name1[], char name2[], int modojuego)  {
    //Inicializacion de variables

    if (modojuego != 1){
        char name2[] = "CPU";
    }

    for (int i = 0; i < 3; i++){
        //Comprobar Filas
        if (((tablero[i][0] == 'x') && (tablero[i][1] == 'x')) && (tablero[i][2] == 'x')){
            printf("Tres en ralla jugador %s\n", name1);
            return 1;
        }else if(((tablero[i][0] == 'o') && (tablero[i][1] == 'o')) && (tablero[i][2] == 'o')){
            printf("Tres en ralla jugador %s\n", name2);
            return 2;
        }

        //Comprobar Columnas
        if (((tablero[0][i] == 'x') && (tablero[1][i] == 'x')) && (tablero[2][i] == 'x')){
            printf("Tres en ralla jugador %s\n", name1);
            return 1;
        }else if(((tablero[0][i] == 'o') && (tablero[1][i] == 'o')) && (tablero[2][i] == 'o')){
            printf("Tres en ralla jugador %s\n", name2);
            return 2;
        }
    }
    //Comprobar Diagonales
    if (((tablero[0][0] == 'x') && (tablero[1][1] == 'x')) && (tablero[2][2] == 'x')){
        printf("Tres en ralla jugador %s\n", name1);
        return 1;
    }else if(((tablero[0][2] == 'x') && (tablero[1][1] == 'x')) && (tablero[2][0] == 'x')){
        printf("Tres en ralla jugador %s\n", name1);
        return 1;
    }else if((((tablero[0][0] == 'o') && (tablero[1][1] == 'o')) && (tablero[2][2] == 'o')) || (((tablero[0][2] == 'o') && (tablero[1][1] == 'o')) && (tablero[2][0] == 'o'))){
        printf("Tres en ralla jugador %s\n", name2);
        return 2;
    }

    //Empate


    return 0;

}

//Nombre del player
void playerName(char nombre[], int jugador){
    //Inicializacion de variables
    char caracter;
    int name = 0;

    if (jugador != 0){
        printf("-> Nombre jugador %d : ", jugador);
    }
    //Bucle que va recogiendo los caracteres de buffer
    while (((caracter=getchar()) != '\n') && (name < 20))
    {
        nombre[name] = caracter;
        name++;
    }
    nombre[name] = '\0';

    //Limpiar el buffer
    if(caracter != '\n'){
        printf("Limpiando el buffer");
        while((caracter = getchar() != '\n') && (caracter != EOF));
        printf("Nombre no valido, ha superado los caracteres maximos\n");
    }
}


//Partida Player vs Player
void jugadorVsJugador(char name1[], char name2[], char tablero[][3]){
   //Incializacon de variables 
   int jugador = 1, ganador = 0, count = 0;

    do {    
        agregarFicha(tablero, &jugador, name1, name2, 1);
        printf("\n");
        mostrar(tablero);
        ganador = comprobacion(tablero, name1, name2, 1);
        count++;
        if (count >= 9) break;
        //Eliminar el archivo de la partida (Falta agregar)
    }while((!ganador));
    
    switch (ganador)
    {
    case 1:
        printf("El ganador es  %s\n", name1);
        break;
    case 2:
        printf("El ganador es  %s\n", name2);
        break;
    default:
        printf("Empate");
        break;
    }
    
    printf("\n\n\n");
}

void jugadorVsCPU(char name1[], char tablero[][3]){
    //Incializacon de variables 
    int jugador = 1, ganador = 0, count = 0;
    char name2[] = "CPU";
   //Bucle Partida
   do {    
        agregarFicha(tablero, &jugador, name1, name2, 2);
        printf("\n");
        mostrar(tablero);
        ganador = comprobacion(tablero, name1, name2, 2);
        count++; //BUG : Si el jugador mete en fichas que ya estan cogidas sigue contando.
        if (count >= 9)break;
        //Eliminar el archivo de la partida (Falta agregar)
    }while((!ganador));

    switch (ganador)
    {
    case 1:
        printf("El ganador es  %s\n", name1);
        break;
    case 2:
        printf("El ganador es  %s\n", name2);
        break;
    default:
        printf("Empate");
        break;
    }
    
    printf("\n\n\n");
    
}

void ejemplo(){
    char tablero[3][3];
    printf("\nTabla de ejemplo de cordenadas ->");
    printf("\n---------------------\n");

    for (int i = 0; i<3; i++){
        printf("| ");
        for (int j = 0; j<3; j++){
            printf("%d,%d |  ", i +1, j +1);
        }
        printf("\n---------------------\n");
    }
    printf("\n");
}
