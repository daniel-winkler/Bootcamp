Algoritmo Ejercicio_44
	
	
	// Ej. 2: Algoritmo que lea dos n�meros, calculando y escribiendo el valor 
	//de su suma, resta, producto y divisi�n.
	
	//Partir del ejercicio 2 y a�adir la siguiente funcionalidad: El usuario tendr� un men� num�rico en pantalla para poder 
	//elegir entre las operaciones a realizar. Si da una opci�n incorrecta (no existe), el programa avisar� al usuario y 
	//volver� a mostrar el men�. Har� esto hasta que el usuario elija la opci�n de salir del programa.
	
	
	
	Definir num1, num2, operacion Como Entero;
	
	Repetir
		
		Escribir "Introduzca dos numeros.";
		
		Leer num1, num2;
		
		Escribir "�Que desea hacer?";
		
		Repetir
		
			Escribir "1: Sumar";
			Escribir "2: Restar";
			Escribir "3: Multiplicar";
			Escribir "4: Dividir";
			Escribir "5: Salir del programa";
			
			Leer operacion;
			
			si operacion > 5 o operacion < 1 Entonces
				
				Escribir "error, indique de nuevo";
				
			FinSi
			
		Mientras Que operacion > 5 o operacion < 1
		
		Segun operacion Hacer
			1:
				Escribir "la suma de ", num1, " y ", num2, " es: ", num1 + num2;
			2:
				Escribir "la resta de ", num1, " y ", num2, " es: ", num1 - num2;
			3:
				Escribir "la multiplicacion de ", num1, " y ", num2, " es: ", num1 * num2;
			4:
				Escribir "la division de ", num1, " y ", num2, " es: ", num1 / num2;
				
		Fin Segun
			
		
			
	hasta que operacion == 5
	

	Escribir "hasta luego!";

	
FinAlgoritmo
