Algoritmo Ejercicio_7
	
	// construir un diagrama de flujo que dado el coste de un articulo vendido y la cantidad de dinero entregado,
	// calcule e imprima el cambio que se le debe dar al cliente.
	
	Definir pago, precio Como Real;
	
	precio = 50;
	
	Escribir "son " precio," por favor.";
	Leer pago;
	
	si pago > precio Entonces
		escribir "su cambio es: " pago - precio;
	SiNo
		si pago == precio Entonces
			Escribir "gracias.";
		SiNo
			Escribir "faltan " precio - pago ," señor..";
		FinSi
		
	FinSi

	
FinAlgoritmo
