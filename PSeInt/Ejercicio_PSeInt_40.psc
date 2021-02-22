Algoritmo Ejercicio_40
	
	// Generar un array de 20 elementos con números aleatorios no repetidos entre sí.
	
	Definir array, size, index, comprobador Como Entero;
	Definir check Como Logico;
	
	size = 20;
	
	Dimension array[size];
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		array[index] = Aleatorio(1,20);
		Escribir array[index];
		
		Repetir
			
			//si no hay dos numeros iguales el check no pasa a falso, por lo que se mantiene en verdadero.
			check = Verdadero;
				
			Para comprobador = 0 hasta index - 1 con paso 1 Hacer
				
				si array[index] == array[comprobador] Entonces
					
					// en cuanto una comprobacion sea igual, el Para entero es falso.
					check = falso;
					array[index] = Aleatorio(1,20);
					Escribir array[index];
					
				FinSi
				
			FinPara
		
		mientras que check == falso
		
	FinPara
	
	Escribir "";
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		Escribir array[index], " " Sin Saltar;
		
	FinPara
	
FinAlgoritmo
