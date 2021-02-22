Algoritmo Ejercicio_38
	
	//Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los valores de este array en otro array distinto
	//pero con los valores invertidos, es decir, que el segundo array deberá tener los valores [5,4,3,2,1]
	
	
	Definir array_1, array_2, indice, size Como Entero;
	
	size = 5;
	
	Dimension array_1[size], array_2[size];
	
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		array_1[indice] = indice + 1;
		array_2[size - 1 - indice] = array_1[indice];
		
	FinPara
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		Escribir "el valor de array_1[", indice, "] es:", array_1[indice];
		
	FinPara
	
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		Escribir "el valor de array_2[", indice, "] es:", array_2[indice];
		
	FinPara
	
	
FinAlgoritmo
