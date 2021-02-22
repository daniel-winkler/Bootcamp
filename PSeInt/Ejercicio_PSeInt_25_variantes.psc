Algoritmo Ejercicio_25
	
	// Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño. 
	//Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
	
	
	
	Definir columnas, filas, lado Como Entero;
	
	Leer lado;
	
	para filas = 0 hasta lado - 1 con paso 1 Hacer
		
		para columnas = 0 hasta lado - 1 Con Paso 1 Hacer
			
			si filas == columnas o columnas = lado - filas - 1 entonces
			
				Escribir "x " sin saltar;
			SiNo
				Escribir "  " sin saltar;
				
			FinSi
		
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
