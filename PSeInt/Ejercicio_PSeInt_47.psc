Algoritmo Ejercicio_47
	
	
	// Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.
	
	Definir array, size, indice, i, j, aux Como Entero;
	

	
	size = 10;
	
	Dimension array[size];
	
	Escribir "estado inicial:";
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		array[indice] = Aleatorio(1,100);
		Escribir array[indice], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
	Para i = 0 hasta size - 2 Con Paso 1 Hacer
		
		Para j = 0 hasta size - i - 2 con paso 1 Hacer
			
			si array[j] > array[j + 1] Entonces
				
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
				
			FinSi
			
		FinPara
		
	FinPara
	
	Escribir "";
	
	Escribir "estado final:";
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		Escribir array[indice], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
FinAlgoritmo
