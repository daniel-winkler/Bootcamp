Algoritmo Ejercicio_10
	
	// Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento de 
	// sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador 
	// y su nuevo sueldo.
	
	Definir sueldo,categoria Como Entero;
	Definir c1,c2,c3,c4 Como Real;
	
	c1 = 1.15;
	c2 = 1.1;
	c3 = 1.06;
	c4 = 1.03;
	
	Escribir 'sueldo';
	Leer sueldo;
	
	Escribir 'categoria';
	Leer categoria;
	
	Mientras categoria>4 O categoria<1 Hacer
		Escribir 'error categoria, indicar de nuevo';
		Leer categoria;
	FinMientras	
		
	Segun categoria Hacer
		1:
			Escribir "su nuevo sueldo es: ", sueldo * c1;
		2:
			Escribir "su nuevo sueldo es: ", sueldo * c2;
		3:
			Escribir "su nuevo sueldo es: ", sueldo * c3;
		4:
			Escribir "su nuevo sueldo es: ", sueldo * c4;
	Fin Segun
	
FinAlgoritmo
