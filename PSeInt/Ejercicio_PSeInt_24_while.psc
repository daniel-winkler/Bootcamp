Algoritmo Ejercicio_24
	
	//Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según el siguiente criterio: la parte práctica vale el 10%; 
	//la parte de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y volverá 
	//a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las notas deben estar entre 0 y 10, si no lo están, no imprimirá las notas,
	//mostrará un mensaje de error y volverá a pedir otro alumno
	
	
	Definir nota_practica, nota_problemas, nota_teorica, nota_final como real;
	Definir alumno Como Caracter;
	
	
	Escribir "indique el nombre del alumno";
	Leer alumno;
	
	mientras alumno <> "" hacer
		Escribir "indique su nota practica";
		Leer nota_practica;
		Escribir "indique su nota teorica";
		Leer nota_teorica;
		Escribir "indique su nota de problemas";
		Leer nota_problemas;
		
		
		si nota_practica<0 o nota_practica>10 o nota_problemas<0 o nota_problemas>10 o nota_teorica<0 o nota_teorica>10 entonces
			
			Escribir "error. notas no son correctas";
			
		SiNo
			nota_final = nota_practica *0.1 + nota_problemas*0.5 + nota_teorica*0.4;
			
			Escribir "la nota final del alumno ", alumno, " es ", nota_final;
		FinSi
		
		Escribir "indique el nombre del alumno";
		Leer alumno;
	FinMientras
	
	Escribir  "fin de proceso";
FinAlgoritmo
