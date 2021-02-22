Algoritmo sin_titulo
	
	
	
	
	Definir filas, columnas, contador, num_filas Como Entero;
	
	Leer num_filas;
	
	contador = 1;
	
	Para filas = 1 hasta num_filas Con Paso 1 Hacer
		
		Para columnas = 1 hasta num_filas con paso 1 Hacer
			
			si columnas <= filas entonces
				Escribir contador Sin Saltar;
				contador = contador + 1;
			SiNo
				Escribir " " Sin Saltar;
			FinSi
		
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
