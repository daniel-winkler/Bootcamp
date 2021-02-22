
Funcion saludar(nombre, apellido, dia)
	
	Escribir "Hola ", nombre, " ", apellido, "," Sin Saltar;
	
	si Minusculas(dia) == "viernes" Entonces
		
		Escribir " ya es Viernes, ¡buen finde!";
	SiNo
		
		Escribir " ¡a seguir con la semana!";
		
	FinSi
	
FinFuncion


Algoritmo  Ejemplo_Funciones
	
	Definir nombre, apellido, dia Como Caracter;
	
	leer nombre, apellido, dia;
	
	saludar(nombre, apellido, dia);
	

	
	
	
	
FinAlgoritmo


