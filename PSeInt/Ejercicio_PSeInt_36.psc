Algoritmo Ejercicio_36
	
	//Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20. 
	//Imprimir índice y el resultado de la multiplicación de ambos elementos de los arraysdel índice de cada iteración. 
	//Cuidado con los elementos del array sin inicializar
	
	Definir array_1, array_2, size, indice Como Entero;
	
	size = 10;
	
	Dimension array_1[size], array_2[size];
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		array_1[indice] = Aleatorio(1, 20);
		array_2[indice] = Aleatorio(1, 20);
		
		Escribir "para el indice ", indice, " la multiplicacion de ", array_1[indice], " y ", array_2[indice], " es: " array_1[indice] * array_2[indice];
		
	FinPara
	

	
FinAlgoritmo
