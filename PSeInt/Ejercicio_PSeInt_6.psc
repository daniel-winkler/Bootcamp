Algoritmo Ejercicio_6
	
	// dado un numero entero A hacer un diagrama de flujo que determine si es par, impar o nulo.
	
	Definir a Como Entero;
	Leer a;
	
	si a == 0 entonces
		Escribir a, " es nulo.";
	SiNo
		si a mod 2 == 0 Entonces
			Escribir  a , " es par.";
		SiNo
			Escribir a, " es impar.";
		FinSi
	FinSi
	
FinAlgoritmo
