Algoritmo Ejercicio_21
	
	// Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media 
	// de todos ellos. Piensa como debemos inicializar las variables
	
	Definir num, maximo, minimo, media, suma, contador Como Real;
	
	
	contador = 0;
	suma = 0;
	
	Escribir "indica un numero";
	
	
	Repetir
		Leer num;				//atencion te incluye el 0 y escribe error por defecto
		Escribir "error";
	mientras Que num == 0
	
	maximo = num;
	minimo = num;
	
	Repetir

		si num <> 0 entonces
			suma = suma + num;
			contador = contador + 1;
			si num > maximo Entonces
				maximo = num;
			SiNo
				si num < minimo Entonces
					minimo = num;
				FinSi
			FinSi
		FinSi
		Leer num;		
	Hasta Que num == 0
	

	
	media = suma / contador;
	
	Escribir "la media es ", media, ", el minimo es ", minimo, " y el maximo es ", maximo;
	
FinAlgoritmo
