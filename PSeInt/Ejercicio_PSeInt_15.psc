Algoritmo Ejercicio_15
	
	//Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir 
	//el número por teclado (así hasta que se teclee un número mayor que cero) (recuerda la estructura mientras).
	
	//Ejercicio 6: Dado un número entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
	//Pista: para determinar el resto de una división, se usa la operación mod
	
	Definir num Como Entero;
	
	
	Repetir
		Escribir "indicar numero";
		Leer num;
	Mientras  Que num <= 0
	
	si num mod 2 == 0 Entonces
		Escribir " el numero ", num, " es par.";
	SiNo
		Escribir "el numero ", num, " es impar.";
	FinSi
	
FinAlgoritmo
