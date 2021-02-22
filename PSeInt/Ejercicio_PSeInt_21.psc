Algoritmo Ejercicio_21
	
	// Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media 
	// de todos ellos. Piensa como debemos inicializar las variables
	
	Definir num, maximo, minimo, media, suma, contador Como Real;
	
	
	contador = 0;
	suma = 0;
	
	
	Escribir "indica un numero";
	Leer num;
	
	mientras num == 0 Hacer
		Escribir "error";
		Leer num;
	FinMientras
	
	maximo = num;
	minimo = num;
	
	mientras num <> 0 Hacer
		suma = suma + num;
		contador = contador + 1;
		si num > maximo Entonces
			maximo = num;
		sino
			si num < minimo Entonces
				minimo = num;
			FinSi
		FinSi
		Leer num;   //importante leer al final
	FinMientras
	
	
	media = suma / contador;
	
	Escribir "la media es ", media, ", el minimo es ", minimo, " y el maximo es ", maximo;
	
FinAlgoritmo
