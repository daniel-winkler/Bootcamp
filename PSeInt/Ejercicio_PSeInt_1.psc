Algoritmo Ejercicio_1
	
	// Dadas dos variables numéricas A y B, que el usuario debe teclear, 
	//se pide realizar un algoritmo que intercambie los valores de 
	//ambas variables y muestre cuánto valen al final cada una de 
	//ellas (recuerda la asignación).
	
	Definir a, b, aux  Como Entero;
	
	// leemos lo que necesitamos
	Leer a;
	Leer b;
	
	// guardamos A para no perder su valor
	aux = a;
	
	// sobreescribimos A con el valor de B
	a = b;
	
	// recuperamos el valor de A  con aux para asiganrselo a B
	b = aux;

	Escribir a;
	Escribir b;
	
FinAlgoritmo
