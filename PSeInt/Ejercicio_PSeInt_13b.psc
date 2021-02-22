Algoritmo Ejercicio_13
	
	//Construir un diagrama de flujo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro 
	//y la superficie del mismo.
	
	//Superficie= base*altura
	//Perímetro = 2*(base + altura)
	
	//Comprobar los resultados con varios datos de entradas diferentes
	
	Definir base, altura, superficie, perimetro Como Real;
	
	Escribir "base";
	
	Repetir
		Leer base;
		si base <= 0 Entonces
			Escribir "base erronea. repetir";
		FinSi
	Hasta Que base > 0
	
	Escribir "altura";
	
	Repetir
		Leer altura;
		si altura <= 0 Entonces
			Escribir "altura erronea, repetir";
		FinSi
	Hasta Que altura > 0
	
	superficie = base * altura;
	perimetro = 2 * (base + altura);
	
	Escribir "la superficie es ", superficie, " y el perimetro es ", perimetro;
	
	
FinAlgoritmo
