
Funcion resultado = es_primo(num) 
	
	Definir  index Como Entero;
	Definir  resultado como logico;
	
	resultado = Verdadero;
	
	Para index = 2 hasta num - 1 con paso 1 Hacer
		
		si num mod index == 0 Entonces
			
			resultado = falso;
			index = num - 1; //truco para que salga del bucle, ya que una vez que sea falso no tiene que seguir comprobando numeros.
			
		FinSi
		
	FinPara
	
FinFuncion



Algoritmo Ejercicio_54
	
	// Diseñar un algoritmo que lea el número N e imprima y cuente todos los números primos menores que N.
	
	Definir num, index, numeros_primos Como Entero;
	
	Leer num;
	
	numeros_primos = 0;
	
	Para index = 2 hasta num - 1 con paso 1 Hacer
		
		si es_primo(index) Entonces
			
			Escribir index, " es primo";
			numeros_primos = numeros_primos + 1;
			
		FinSi
		
	FinPara
	
	Escribir "total de numeros primos menor que ", num, ": ", numeros_primos;
	
	
FinAlgoritmo