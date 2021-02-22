Algoritmo Ejercicio_22
	
	// Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
	
	
	Definir num, max, divisor_x, divisor_y, contador_x, contador_y Como Entero;
	
	
	max = 100;
	num = 1;
	divisor_x = 4;
	divisor_y = 9;
	contador_x = 0;
	contador_y = 0;
	
	Repetir
		num = num + 1;
		
		si num mod divisor_x==0 y num mod divisor_y == 0 Entonces
			Escribir "multiplo de ", divisor_x, " y ", divisor_y, " : ", num;
			contador_x = contador_x + 1;
			contador_y = contador_y + 1;
		SiNo
			si num mod divisor_x == 0 Entonces
				Escribir "multiplo de ", divisor_x, " : " , num;
				contador_x = contador_x + 1;
			SiNo
				si num mod divisor_y == 0 Entonces
					Escribir "multiplo de ", divisor_y, " : " ,num;
					contador_y = contador_y + 1;
				FinSi
			FinSi
		FinSi
	
		
	Hasta Que num >= max
	
	Escribir "total de multiplos de ", divisor_x, " : ", contador_x;
	Escribir "total de multiplos de ", divisor_y, " : ", contador_y;
	
FinAlgoritmo