Algoritmo Ejercicio_51
	
	//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo)
	
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
