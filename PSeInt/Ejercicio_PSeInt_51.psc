Algoritmo Ejercicio_51
	
	//Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo)
	
	Definir num, index Como Entero;
	Definir es_primo como logico;
	
	Leer num;
	
	es_primo = Verdadero;
	
	Para index = 2 hasta num - 1 Con Paso 1 Hacer
		
		si num mod index == 0 Entonces
			
			es_primo = falso;
		
		FinSi
		
	FinPara
	
	
	si es_primo Entonces
		
		Escribir "el numero es primo";
		
	SiNo
		
		Escribir "el numero NO es primo";
		
	FinSi
	
	
FinAlgoritmo
