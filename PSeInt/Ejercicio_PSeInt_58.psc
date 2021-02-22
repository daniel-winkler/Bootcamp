Algoritmo Ejercicio_58
	
	
	// Crear un array de 3 páginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2, el tercero 3 y así sucesivamente, e imprimirla.
	
	Definir array, fila, columna, pagina, n_filas, n_columnas, n_paginas, contador Como Entero;
	
	n_filas = 4;
	n_columnas = 5;
	n_paginas = 3;
	
	contador = 0;
	
	Dimension array[n_paginas, n_filas, n_columnas];
	
	
	Para pagina = 0 hasta n_paginas - 1 Con Paso 1 Hacer
		
		Para fila = 0 hasta n_filas - 1 con paso 1 Hacer
			
			Para columna = 0 hasta n_columnas - 1 con paso 1 Hacer
				
				array[pagina, fila, columna] = contador;
				Escribir array[pagina, fila, columna], " " Sin Saltar;
				contador = contador + 1;
				
			FinPara
			
			Escribir "";
			
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
