Algoritmo Ejercicio_45
	
	
	//Teniendo un vector con los numeros naturales que queramos, meter en otro de la misma longitud aquellos que
	//sean pares y mayores que 25. Despues mostrar el vector de origen completo y el de destino solo los numeros introducidos.
	
	
	Definir array_x, array_y, indice, size, contador Como Entero;
	
	size = 10;
	
	contador = 0;
	
	Dimension array_x[size], array_y[size];
	
	Para indice = 0 hasta size - 1 con paso 1 Hacer
		
		array_x[indice] = Aleatorio(1,50);
		Escribir "array_x[", indice, "]: ", array_x[indice];
		
		si array_x[indice] > 25 y array_x[indice] mod 2 == 0 Entonces
			
			array_y[contador] = array_x[indice];
			contador = contador + 1;
			
		FinSi
		
	FinPara

	Escribir "";
	
	si contador == 0 Entonces
		
		Escribir "el array_y esta vacío";
		
	SiNo
		
		Para indice = 0 hasta contador - 1 Con Paso 1 Hacer
			
			Escribir "array_y[", indice, "]: ", array_y[indice];
			
		FinPara
		
	FinSi
	
	
FinAlgoritmo
