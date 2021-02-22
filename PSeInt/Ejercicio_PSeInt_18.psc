Algoritmo Ejercicio_18
	
	//Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir de N. 
	//Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.
	
	
	Definir contador, num, num_inicial, suma Como Entero;
	
	contador = 0;
	suma = 0;
	Escribir "numero";
	Leer num;
	
	num_inicial = num;
	
	//si el numero inicial es impar, lo convierto a par.
	
	si num_inicial mod 2 <> 0 Entonces
		num_inicial = num_inicial + 1;
	FinSi
	
	Repetir
		Escribir num_inicial;
		suma = suma + num_inicial;
		
		//nos aseguramos que los numeros siguientes sean par.
		num_inicial = num_inicial + 2;
		contador = contador + 1;
	Mientras  Que contador < num
	
		Escribir "la suma es " , suma;
		
FinAlgoritmo
