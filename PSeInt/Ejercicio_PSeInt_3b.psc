Algoritmo Ejercicio_3b
	
	// Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales 
	//(recuerda usar la estructura condicional SI).
	// b) Ahora con 3 números diferentes y que nos diga cual es mayor
	
	Definir num1, num2, num3 Como Entero;
	
	Leer num1, num2, num3;
	
		Si num1 > num3 y num1 > num2 Entonces
			Escribir num1 " es el mayor";
		SiNo
			si num2 > num3 y num2 > num1 Entonces
				Escribir num2 " es el mayor";
			SiNo
				si num3 > num2 y num3 > num1 Entonces
					Escribir num3 " es el mayor";
				SiNo
					Escribir "hay numeros iguales";
		
				FinSi
			FinSi
		FinSi
FinAlgoritmo
