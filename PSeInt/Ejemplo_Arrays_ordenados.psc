Algoritmo Ejemplo_ordenar_arrays
	
	
	Definir array, size, aux, indice, i, j, contador Como Entero;
	
	size = 5;
	
	Dimension array[size];
	
	contador = 0;
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//para verlo por consola
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	
	Escribir "";
	
	
	// en este caso es size - 2 porque en el FOR compara con el numero posterior al indice actual, es decir, que intentaria comparar hasta el array[4] con array[5], el cual no existe.
	//nos basta que compare hasta array[3] con array[4].
	
	Para i = 0 hasta size - 2 con paso 1 hacer

		Para j = 0 hasta size - 2 - contador con paso 1 Hacer
			
			si array[j] > array[j + 1] Entonces
				
				aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;
				
			FinSi
			
			
			//para verlo por consola
			Para indice = 0 hasta size - 1 con paso 1 Hacer
				Escribir array[indice], " " Sin Saltar;
			FinPara
			
			Escribir "";
			
			
		FinPara
		
		contador = contador + 1;
		Escribir "";
		
	FinPara
	
		
	//para verlo por consola
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	
	Escribir "";

	

	
	
FinAlgoritmo
