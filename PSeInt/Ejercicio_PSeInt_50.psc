Algoritmo Ejercicio_50
	
	// Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
	
	Definir letra, frase como caracter;
	Definir index, contador Como Entero;
	
	contador = 0;
	
	Escribir "escriba una frase";
	Leer frase;
	
	Escribir "escriba una letra";
	Leer letra;
	
	
	// longitud lee el numero de caracteres de la frase.
	Para index = 0 hasta Longitud(frase) - 1 con paso 1 Hacer
		
		//index, index significa que comprobara cada caracter paso a paso, desde el primero hasta el ultimo.
		si subcadena(frase, index,index) == letra Entonces
			
			contador = contador + 1;
			
		FinSi
		
	FinPara
	
	Escribir "el numero de veces que aparece la letra ", letra, " en la frase es ", contador, " veces.";
	
	
	
FinAlgoritmo
