Algoritmo Ejercicio_35
	
	//Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento con números aleatorios entre 0 y 9. 
	//Posteriormente, mostrará por pantalla el valor de cada posición junto con su índice y finalmente, la suma de todos los valores
	
	Definir my_array, suma, size, indice Como Entero;
	
	suma = 0;
	
	Escribir "indica el tamaño del array";
	
	Leer size;
	
	Dimension my_array[size];
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		my_array[indice] = Aleatorio(0,9);
		suma = suma + my_array[indice];
		
	FinPara
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		Escribir "el valor del indice ", indice, " es: ", my_array[indice];
		
	FinPara
	
	Escribir "la suma es: ", suma;
	
FinAlgoritmo
