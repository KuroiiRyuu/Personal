import time

#Lo primero sera encontrar numeros primos

def es_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero**0.5)+1):
        if numero%i == 0:
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

def comprabar_lista(lista1, lista2):
    for elemento in lista1:
        if elemento not in lista2:
            errores.append(elemento)
            return False
    return True



limite_superior = int(input("Ingresar el limite superior para buscar numeros primos: "))
numeros_primos = buscar_primos(limite_superior)
print("Numeros primos encontrados:", numeros_primos)

#Prueba con una limitacion de 10 numeros
#Hare una lista donde se iran añadiendo los numeros

numeros_creados = []

errores = []

print("Longitud de la lista de numeros primos" ,len(numeros_primos)) #Longitud de la cadena creada

n = 0 # Contador probisional para probar si funciona

t = 0

i = 0

a = 0

inicio = time.time()

while i < len(numeros_primos):
    
    while n < len(numeros_primos):
        print(numeros_primos[i] + numeros_primos[a])
        numero = numeros_primos[i] + numeros_primos[a]
        numeros_creados.append(numero) 
        a += 1
        n += 1
    a = 0
    n = 0
    i += 1

n = 4

numeros_par = []

while n <= numeros_creados[-1]:
    if n%2 == 0:
        numeros_par.append(n)    
    n += 1

numeros_creados = eliminar_duplicado(numeros_creados)
numeros_creados.sort()
print("Lista de creados:", numeros_creados)
print("Numeros creados:", len(numeros_creados))
print("Lsita de primos:", numeros_primos)
print("Lista de pares:", numeros_par)

comprabar_lista(numeros_par, numeros_creados)

print("Errores:", errores)

fin = time.time()
tiempo = fin - inicio
tiempo = round(tiempo, 2)
print("segundos:", tiempo)
tiempo = tiempo / 60
tiempo = round(tiempo, 2)
print("minutos:", tiempo)
tiempo = tiempo / 60
tiempo = round(tiempo, 2)
print("horas:", tiempo)
    