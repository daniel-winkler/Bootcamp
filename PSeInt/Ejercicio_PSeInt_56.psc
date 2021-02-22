

Algoritmo Ejercicio_56
	
	// Leer y guardar en una mtraiz las notas de los alumnos de un colegio en funcion del numero de cursos (filas) y del numero de alumnos por curso (columnas). el maximo de alumnos sera 5 para cada uno de los tres cursos.
	
	
	Definir notas, curso, size_cursos, alumno, size_alumnos Como Entero;
	
	size_alumnos = 5;
	size_cursos = 3;
	
	Dimension notas[size_cursos, size_alumnos];
	
	Para curso = 0 hasta size_cursos - 1 con paso 1 Hacer
		
		para alumno = 0 hasta size_alumnos - 1 con paso 1 Hacer
			
			Escribir "indique la nota del alumno ", alumno + 1, " del curso ", curso + 1;
			Leer notas[curso, alumno];
			
		FinPara
		
	FinPara
	
	
	Para curso = 0 hasta size_cursos - 1 con paso 1 Hacer
		
		Escribir "notas del curso ", curso + 1, ": " Sin Saltar;
		
		para alumno = 0 hasta size_alumnos - 1 con paso 1 Hacer
			
			Escribir notas[curso, alumno], " " Sin Saltar;
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
FinAlgoritmo
