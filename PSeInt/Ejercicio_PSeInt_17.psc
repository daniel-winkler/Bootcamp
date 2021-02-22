Algoritmo Ejercicio_17
	
	//Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. 
	// N se leerá por teclado (no tenemos por qué llamar a la variable N, podemos llamarla como queramos).
	
	Definir contador, num, suma Como Entero;
	
	contador = 1;
	suma = 0;
	
	Leer num;
	
	Repetir
		
		Escribir contador;
		
		suma = contador + suma;
		contador = contador + 1;
		
		
	mientras Que contador <= num;
	
	Escribir "la suma es ", suma;
	
	
FinAlgoritmo
