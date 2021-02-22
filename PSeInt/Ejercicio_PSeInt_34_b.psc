Algoritmo Ejercicio_34_B
	
	//a)Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor o menor que la lectura
	
	Definir num, num_correcto Como Entero;
	
	num_correcto = Aleatorio(1,100);
	
	Escribir "adivina un numero del 1 al 100";
	
	Repetir
		
		Leer num;
		
		si num < num_correcto Entonces
			
			Escribir "el numero es mayor";
			
		SiNo
			si num > num_correcto Entonces
				
				Escribir "el numero es menor";
			SiNo
				
				Escribir "correcto!";
				
			FinSi
			
		FinSi
		
	mientras Que num <> num_correcto
	
	

	
FinAlgoritmo
