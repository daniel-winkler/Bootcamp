Algoritmo Ejercicio_34_A
	
	//a)Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor o menor que la lectura
	
	Definir num, num_correcto Como Entero;
	
	num_correcto = Aleatorio(1,10);
	
	Escribir "adivina un numero del 1 al 10";
	
	Repetir
		
		Leer num;
		
		si num <> num_correcto Entonces
			
			Escribir "error, intentalo otra vez";
			
		SiNo
			
			Escribir "correcto!";
			
		FinSi
		
	Mientras  Que num <> num_correcto
	
	

	
FinAlgoritmo
