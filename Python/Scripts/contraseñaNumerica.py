import time

elementos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

contraseña = "123456"
carcteres = 6
contador = 0
combinaciones = []

def generar_combinaciones(n, cadena):
    global contador, combinaciones
    if n == 0:
        combinaciones.append(cadena)
        contador += 1
        if cadena == contraseña:  # Verificar si la combinación coincide con la contraseña objetivo
            print("¡Contraseña encontrada!")
            return
    else:
        for elemento in elementos:
            nueva_cadena = cadena + elemento
            generar_combinaciones(n - 1, nueva_cadena)
            if contraseña in combinaciones:  # Verificar si la contraseña se encuentra en las combinaciones generadas
                print("¡Contraseña encontrada!")
                return

inicio = time.time()
for longitud in range(1, carcteres + 1):
    generar_combinaciones(longitud, "")
    
for combinacion in combinaciones:
    print(combinacion)

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
