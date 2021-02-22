Algoritmo Ejercicio_20
	
	//Teniendo en cuenta que la clave es eureka, escribir un algoritmo que nos pida una clave. Solo tenemos 3 
	//intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos que hemos agotado
	//esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
	
	Definir clave Como Caracter;
	Definir contador Como Entero;
	
	contador = 1;
	
	Escribir "ponga su clave";
	
	Leer clave;
	
	Mientras clave <> "eureka" y contador<3 Hacer
		Escribir "error";
	
		contador = contador +1;
		Leer clave;
		
	FinMientras
	
	si clave == "eureka" Entonces
		escribir "bienvenido";
	SiNo
		Escribir "bloqueado";
	
	FinSi
	
	
	
FinAlgoritmo
