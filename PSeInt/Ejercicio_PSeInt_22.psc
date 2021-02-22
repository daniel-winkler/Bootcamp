Algoritmo Ejercicio_22
	
	// Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
	
	
	Definir num Como Entero;
	
	num = 1;
	
	Repetir
		num = num +1;
		si num mod 2 ==0 Entonces
			Escribir num;
		FinSi
		
		si num mod 3 ==0 Entonces
			Escribir num;
		FinSi
		
	Hasta Que num >= 100
	
FinAlgoritmo
