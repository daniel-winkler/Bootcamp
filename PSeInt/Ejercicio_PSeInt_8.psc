Algoritmo Ejercicio_8
	
	
	// dado el sueldo de un trabajador, dibuja un diagrama de flujo que aplique un incremento de sueldo del 15%  
	//si el sueldo es inferior a 1000, imprimir el sueldo nuevo
	
	Definir sueldo Como Real;
	
	Escribir "indique su sueldo mensual";
	Leer sueldo;
	
	si sueldo < 1000 Entonces
		Escribir "su nuevo sueldo es: " sueldo * 1.15;
	sino
		Escribir sueldo;
		
	FinSi
	
FinAlgoritmo
