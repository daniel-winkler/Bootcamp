Algoritmo Ejemplo_FOR
	
	Definir contador_x, contador_y Como entero;
	
	Para contador_x = 1 hasta 5 con paso 1 Hacer
		
		//Ejecuta 5 veces lo anidado
		
		Escribir "Iteracion ", contador_x, " del bucle externo.";
		
		Para contador_y = 1 hasta 2 con paso 1 Hacer
			
			// Ejecuta 2 veces la siguiente linea
			
			Escribir "contador_x ", contador_x, " contador_y ", contador_y;
			
		FinPara
		
		Escribir " ";
		
	FinPara
	
FinAlgoritmo
