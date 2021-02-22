Algoritmo Ejercicio_24
	
	//Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula seg�n el siguiente criterio: la parte pr�ctica vale el 10%; 
	//la parte de problemas vale el 50% y la parte te�rica el 40%. El algoritmo leer� el nombre del alumno, las tres notas, escribir� el resultado y volver� 
	//a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vac�a. Las notas deben estar entre 0 y 10, si no lo est�n, no imprimir� las notas,
	//mostrar� un mensaje de error y volver� a pedir otro alumno
	
	
	Definir nota_practica, nota_problemas, nota_teorica, nota_final como real;
	Definir alumno Como Caracter;
	

	
	Repetir
		
		Escribir "nombre del alumno";
		Leer alumno;
		
		si alumno <> "" Entonces
			Escribir "nota practica";
			Leer nota_practica;
			Escribir "nota teorica";
			Leer nota_teorica;
			Escribir "nota problemas";
			Leer nota_problemas;
			
			si nota_practica>=0 y nota_practica<=10 y nota_problemas>=0 y nota_problemas<=10 y nota_teorica>=0 y nota_teorica<=10 Entonces
				
				nota_final = nota_practica *0.1 + nota_problemas*0.5 + nota_teorica*0.4;
				
				Escribir "la nota final del alumno ", alumno, " es ", nota_final;
			sino
				Escribir "las notas no son correctas";
			FinSi
		FinSi
	mientras Que alumno <> "";
	
	Escribir "fin de proceso";
	
	
FinAlgoritmo
