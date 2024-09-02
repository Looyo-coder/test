#!/bin/python3

import math
import os
import random
import re
import sys

def check_weirdness(numero):
    if numero % 2 == 1:
        # Si el numero es impar, es "Weird"
        print("Weird")
    elif 2 <= numero <= 5:
        # Si el numero es par y está en el rango [2, 5], es "Not Weird"
        print("Not Weird")
    elif 6 <= numero <= 20:
        # Si el numero es par y está en el rango [6, 20], es "Weird"
        print("Weird")
    else:
        # Si el numero es par y mayor que 20, es "Not Weird"
        print("Not Weird")

# Ejemplo de uso:
mi_numero = int(input("Ingresa un numero: "))
check_weirdness(mi_numero)