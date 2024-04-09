import turtle
import random

s = turtle.getscreen()

t = turtle.Turtle()

t.hideturtle()

distancia = t.distance(t.pos())


    
def funcion1():
    t._rotate(90)
    t.circle(50,180)

def funcion2():
    t._rotate(90)
    t.rt(45)
    t.forward(50)

def funcion3():
    t._rotate(90)
    t.circle(10,180)
    t.rt(180)
    t.circle(10,180)
    t.rt(180)
    t.circle(10,180)

def funcion4():
    t.forward(50)

def funcion5():
    t._rotate(50)
    t.forward(20)
    t._rotate(270)
    t.forward(20)
    t._rotate(90)
    t.forward(20)
    t._rotate(270)
    t.forward(20)
    t._rotate(90)
    t.forward(20)
    t._rotate(270)
    t.forward(20)
    t._rotate(90)
    t.forward(20)

def funcion6():
    t._rotate(90)
    t.circle(10,180)
    t._rotate(90)
    t.circle(10,270)
    t._rotate(90)
    t.circle(10,270)
    t._rotate(90)
    t.circle(10,270)
    t._rotate(90)

def lanzar_dado():
    dado = random.randint(1, 6)
    funciones = {
        1: funcion1,
        2: funcion2,
        3: funcion3,
        4: funcion4,
        5: funcion5,
        6: funcion6
    }
    funciones[dado]()

while distancia < 1:
    
    lanzar_dado()


    
s.listen()
s.loop()