Algoritmo Ejercicio_25
	
	// Algoritmo que lea un n�mero entero (lado) y a partir de �l cree un cuadrado de asteriscos con ese tama�o. 
	//Los asteriscos s�lo se ver�n en el borde del cuadrado, no en el interior.
	
	
	
	Definir columnas, filas, altura, largo Como Entero;
	
	Leer altura, largo;
	
	para filas = 1 hasta altura con paso 1 Hacer
		
		para columnas = 1 hasta largo Con Paso 1 Hacer
			
			si columnas == 1 o columnas == largo o filas == 1 o filas == altura entonces
			
				Escribir "x " sin saltar;
			SiNo
				Escribir "  " sin saltar;
				
			FinSi
		
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
