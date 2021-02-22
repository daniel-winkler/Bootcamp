Funcion print_array(array, size)
	
	// solo definimos index, porque es lo unico que la funcion NO ha recibido ya por sus argumentos (array y size).
	Definir index Como Entero;
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		Escribir array[index], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
FinFuncion

Funcion ordenar_array(array, size)
	Definir i, j, aux Como Entero;
	
	PAra i = 0 hasta size - 2 Con Paso 1 Hacer
		
		para j = 0 hasta size - 2 con paso 1 Hacer
			
			si array[j] > array[j + 1] Entonces
				
				aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;
				
			FinSi
			
		FinPara
		
	FinPara
	
FinFuncion






Algoritmo Ejemplo_Funciones_3
	
	
	Definir array, index, size Como Entero;
	
	size = 10;
	
	Dimension array[size];
	
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		array[index] = Aleatorio(1,100);
		
	FinPara
	
	print_array(array,size);
	
	ordenar_array(array, size);
	
	print_array(array, size);
	
FinAlgoritmo
