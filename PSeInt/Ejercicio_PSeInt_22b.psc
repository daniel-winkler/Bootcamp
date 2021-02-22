Algoritmo Ejercicio_22
	
	// Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
	
	
	Definir num Como Entero;
	
	Para num = 1 Hasta 100 Con Paso 1 Hacer
		si num mod 2==0 o num mod 3 ==0 Entonces
			Escribir num;
			num = num + 1;
		SiNo
			num = num + 1;
			si num mod 2==0 o num mod 3 ==0 Entonces
				Escribir num;
				num = num + 1;
			FinSi
		FinSi
	Fin Para
	
FinAlgoritmo
