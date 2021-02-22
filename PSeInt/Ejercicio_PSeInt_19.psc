Algoritmo Ejercicio_19
	
	//Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1, 
	//por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,......,-1; 
	//Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará número negativos.
	
	Definir contador, suma, media, num Como Real;
	
	contador = 0;
	suma = 0;
	
	Escribir "introduce los numeros que quieras";
	Leer num;
	
	Mientras num >= 0 Hacer
		
		suma = suma + num;
		contador = contador + 1;
		Leer num;
		
	Fin Mientras
	
	media = suma / contador;
	
	Repetir
		Escribir "la media es " ,media;
	Hasta Que num == -1
	
FinAlgoritmo
