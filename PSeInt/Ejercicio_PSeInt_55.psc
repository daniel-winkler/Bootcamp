Algoritmo Ejercicio_55
	
	// Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. Imprimirla en forma de matriz o tabla, con sus filas y columnas.
	
	
	Definir index, matriz, columnas, filas, size_filas, size_columnas, num_aleatorio Como Entero;
	
	size_filas = 6;
	size_columnas = 9;
	
	Dimension matriz[size_filas, size_columnas]; //en JavaScript sera matriz[filas][columnas]
	
	
	Para filas = 0 hasta size_filas - 1 con paso 1 Hacer
		
		Para columnas = 0 hasta size_columnas - 1 con paso 1 Hacer
			
			matriz[filas, columnas] = Aleatorio(0,99);
			
			si matriz[filas, columnas] < 10 Entonces
				
				Escribir "0", matriz[filas, columnas], " " Sin Saltar;
				
			SiNo
				
				Escribir matriz[filas, columnas], " " Sin Saltar;
				
			FinSi
			
			
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
