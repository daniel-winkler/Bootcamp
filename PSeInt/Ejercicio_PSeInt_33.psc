Algoritmo Ejercicio_33
	
	// Crear un array de tamaño 10 y que guardara numeros enteros introducidos por teclado. Tras introducirlos todos, imprimira cada indice junto con el valor que corresponda.
	
	
	Definir my_array, size,  indice Como Entero;
	
	size = 10;
	
	Dimension my_array[size];
	
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		Leer my_array[indice] ;
		
		
	FinPara
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		Escribir "Indice ", indice, ": ", my_array[indice];
		
	FinPara
	
FinAlgoritmo
