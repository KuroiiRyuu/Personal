import time

def es_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero**0.5)+1):
        if numero % i == 0:
            return False
    return True

def buscar_primos(limite):
    primos = []
    for numero in range(2, limite + 1):
        if es_primo(numero):
            primos.append(numero)
    return primos

def eliminar_duplicado(lista):
    lista_sin_duplicados = []
    for numero in lista:
        if numero not in lista_sin_duplicados:
            lista_sin_duplicados.append(numero)
    return lista_sin_duplicados

def CrearNumeros(numeros_primos):
    numeros_creados = []
    numeros_par = []
    for i in range(len(numeros_primos)):
        for j in range(len(numeros_primos)):
            numero = numeros_primos[i] + numeros_primos[j]
            numeros_creados.append(numero)
            if numero % 2 == 0:
                numeros_par.append(numero)
    return numeros_creados, numeros_par

def reducido(limite_superior):
    numeros_primos = buscar_primos(limite_superior)
    numeros_creados, numeros_par = CrearNumeros(numeros_primos)
    errores = []
    comprabar_lista(numeros_par, numeros_creados, errores)
    return errores, numeros_par

def comprabar_lista(lista1, lista2, errores):
    for elemento in lista1:
        if elemento not in lista2:
            errores.append(elemento)
            return False
    return True

def tiempoDeCarga(limite_superior):
    limites = [50, 250, 500]  # Limites para los cuales calcular el tiempo
    tiempo = []

    for limite in limites:
        inicio = time.perf_counter()
        errores, numeros_par = reducido(limite)  # Corregido: Se asigna el valor de 'numeros_par' también
        fin = time.perf_counter()
        t = fin - inicio
        tiempo.append(t)

        print(f"Tiempo estimado para {limite_superior} con límite {limite}: {t:.2f} segundos")
    
    tiempoMedio = sum(tiempo) / len(tiempo)
    tmaximo = tiempoMedio * limite_superior / sum(limites)
    
    print("Tiempo promedio:", tiempoMedio)
    print("Tiempo máximo estimado:", tmaximo)

limite_superior = int(input("Ingresar el límite superior para buscar números primos: "))
tiempoDeCarga(limite_superior)

numeros_primos = buscar_primos(limite_superior)
#print("Numeros primos encontrados:", numeros_primos)

numeros_creados = []
errores = []

print("Longitud de la lista de números primos:", len(numeros_primos))

inicio = time.time()

CrearNumeros(numeros_primos)

numeros_creados = eliminar_duplicado(numeros_creados)
numeros_creados.sort()

#print("Lista de creados:", numeros_creados)
#print("Número de creados:", len(numeros_creados))
#print("Lista de primos:", numeros_primos)
#print("Lista de pares:", numeros_par)

comprabar_lista(numeros_par, numeros_creados)

print("Errores:", errores)

fin = time.time()
tiempo = fin - inicio
#tiempo = round(tiempo, 2)
print("Segundos:", tiempo)
tiempo = tiempo / 60
#tiempo = round(tiempo, 2)
print("Minutos:", tiempo)
tiempo = tiempo / 60
#tiempo = round(tiempo, 2)
print("Horas:", tiempo)