Algoritmo Ejercicio_34_A
	
	//a)Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor o menor que la lectura
	
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
