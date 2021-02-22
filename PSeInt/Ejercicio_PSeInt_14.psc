Algoritmo Ejercicio_14
	
	//Construir un diagrama de flujo que resuelva el problema que tienen unos surtidores de gasolina, que registran lo que surten 
	//en galones, pero el precio de la gasolina se fija en litros. El diagrama de flujo debe calcular e imprimir el precio 
	//que hay que cobrarle al cliente. 
	
	//Precio gasolina = 1.333€/litro
	//1 galón = 3,78541 litros
	
	Definir galones, precio_final Como Real;
	
	Escribir "cuantos galones?";
	
	Repetir
		Leer galones;
		si galones <= 0 Entonces
			Escribir "error. volver a indicar galones";
		FinSi
	Hasta Que galones > 0
	
	precio_final = galones * 3.78541 * 1.333;
	
	Escribir "el precio final es ", precio_final;
	
	
	
FinAlgoritmo
