Algoritmo Ejercicio_39
	
	//Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con que un elemento sea diferente, 
	//se considerarán los arrayscomo diferentes. Escribir al final del algoritmo el resultado.
	
	
	Definir array_1, array_2, size, indice Como Entero;
	Definir check Como logico;
	
	check = Verdadero;
	
	size = 3;
	
	
	Dimension array_1[size], array_2[size];
	
	
	Para indice = 0 hasta size - 1 Con Paso 1 Hacer
		
		array_1[indice] = Aleatorio(1,3);
		array_2[indice] = Aleatorio(1,3);
		Escribir "array 1 indice ", indice, ": ", array_1[indice];
		Escribir "array 2 indice ", indice, ": ", array_2[indice];
		
		si array_1[indice] <> array_2[indice] Entonces
			
			check = Falso;
			
		FinSi
		
		
	FinPara
	
	si check == Verdadero Entonces
		
		Escribir "los arrays son iguales";
		
	SiNo
		Escribir "los arrays son distintos";
		
	FinSi
	
	
	
FinAlgoritmo
