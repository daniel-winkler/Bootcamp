Algoritmo Ejercicio_34_B
	
	//a)Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es mayor o menor que la lectura
	
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
