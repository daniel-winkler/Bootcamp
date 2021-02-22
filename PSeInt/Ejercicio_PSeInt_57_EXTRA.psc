Algoritmo Ejercicio_57_EXTRA
	
	
	//Dada un matriz cuadrada A (array de 2 dimensiones con el mismo número de columnas que de filas, por ejemplo: 
	//3) construir un algoritmo que permita determinar si dicha matriz es simétrica. Se considera que una matriz 
	//es simétrica si A[i,j] = A[j,i] para todos los elementos i,jde la matriz
	
	
	Definir matriz, fila, columna, size Como Entero;
	Definir es_simetrica Como Logico;
	
	size = 3;
	
	es_simetrica = Verdadero;
	
	Dimension matriz[size, size];
	
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	
	Para fila = 0 hasta size - 1 con paso 1 Hacer
		
		Para columna = 0 hasta size - 1 con paso 1 Hacer
			
			Escribir matriz[fila, columna], " " Sin Saltar;
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	Para fila = 0 hasta size - 1 con paso 1 Hacer
		
		Para columna = 0 hasta size - 1 con paso 1 Hacer
			
			si matriz[fila, columna] <> matriz[columna, fila] Entonces
				
				es_simetrica = falso;
				fila = size - 1; //con este truco salta a la ultima comprobacion y sale directamewnte del bucle
				
			FinSi
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	si es_simetrica Entonces
		Escribir "es simetrica";
	SiNo
		Escribir "no es simetrica";
	FinSi
	
	
	
	
FinAlgoritmo
