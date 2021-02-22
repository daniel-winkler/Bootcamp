Algoritmo Ejercicio_40
	
	
	// Generar un array de 20 elementos con números aleatorios no repetidos entre sí
	
	
	Definir array, size, i, j  Como Entero;
	Definir check Como Logico;
	
	size = 20;
	
	Dimension array[size];
	
	Para i = 0 hasta size - 1 con paso 1 Hacer
		
		array[i] = Aleatorio(1,20);
		
		Repetir
			
			check = Verdadero;
			
			Para j = 0 hasta i - 1 con paso 1 Hacer
				
				si array[i] == array[j] Entonces
					
					check = falso;
					array[i] = Aleatorio(1,20);
					
				FinSi
				
			FinPara
			
		mientras Que check == falso
		
	FinPara
	
	para i = 0 hasta size - 1 con paso 1 hacer
		
		Escribir array[i], " " Sin Saltar;
		
	FinPara
	
FinAlgoritmo
