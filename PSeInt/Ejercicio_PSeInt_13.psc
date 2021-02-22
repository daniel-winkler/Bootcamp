Algoritmo Ejercicio_13
	
	//Construir un diagrama de flujo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro 
	//y la superficie del mismo.
	
	//Superficie= base*altura
	//Perímetro = 2*(base + altura)
	
	//Comprobar los resultados con varios datos de entradas diferentes
	
	Definir base, altura, superficie, perimetro Como Real;
	
	Escribir "base";
	Leer base;
	
	Mientras base <= 0 Hacer
		Escribir "error. volver a indicar base";
		Leer base;
		
	FinMientras
	
	Escribir "altura";
	Leer altura;
	
	Mientras altura <= 0 Hacer
		Escribir "error. volver a indicar altura";
		Leer altura;
		
	FinMientras
	
	superficie = base * altura;
	perimetro = 2 * (base + altura);
	
	Escribir "la superficie es ", superficie, " y el perimetro es ", perimetro;
	
	
FinAlgoritmo
