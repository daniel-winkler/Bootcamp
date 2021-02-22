Funcion resultado = nota_media(matriz, centro, curso)
	
	Definir resultado, alumno, n_alumnos, suma Como Real;
	
	n_alumnos = 10;
	suma = 0;
	
	Para alumno = 0 hasta n_alumnos - 1 con paso 1 Hacer
		
		suma = suma + matriz[centro, curso, alumno];
		
	FinPara
	
	resultado = suma / n_alumnos;
	
FinFuncion

Algoritmo Ejercicio_59
	
	// Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al número de alumnos 
	//de un colegio respectivamente. Imprimir la nota media por curso y la nota media máxima y su centro de pertenencia.
	
	Definir matriz, centro, curso, alumno, n_centros, n_cursos, n_alumnos, media_maxima, centro_perteneciente Como Real;
	
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	
	
	// el orden de la dimension depende de que engloba a que. desde el mas grande hasta el mas chico. un alumno pertenece a un curso, y un curso pertenece a un centro, etc.
	Dimension matriz[n_centros, n_cursos, n_alumnos];
	
	Para centro = 0 hasta n_centros - 1 con paso 1 Hacer
		
		Escribir "Centro ", centro;
		
		Para curso = 0 hasta n_cursos -1 con paso 1 Hacer
			
			Escribir "Curso ", curso, ": " Sin Saltar;
			
			Para alumno = 0 hasta n_alumnos - 1 con paso 1 Hacer
				
				matriz[centro, curso, alumno] = Aleatorio(1,9);
				Escribir matriz[centro, curso, alumno], " " Sin Saltar;
				
			FinPara
			
			Escribir "";
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	Escribir "";
	
	
	
	Para centro = 0 hasta n_centros - 1 con paso 1 Hacer
		
		Para curso = 0 hasta n_cursos -1 con paso 1 Hacer
			
			Escribir "la nota media del centro ", centro, " y el curso ", curso, " es: ", nota_media(matriz,centro,curso);
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
	
	Para centro = 0 hasta n_centros - 1 con paso 1 Hacer
		
		Para curso = 0 hasta n_cursos -1 con paso 1 Hacer
			
			// ponemos centro 0 y curso 0 para asiganr automaticamente la primera media como maxima, y las demas las va comparando.
			si centro == 0 y curso == 0 o nota_media(matriz,centro,curso) > media_maxima Entonces
				
				media_maxima = nota_media(matriz,centro,curso);
				centro_perteneciente = centro;
				
			FinSi
			
		FinPara
		
	FinPara
	
	Escribir "la nota media maxima es ", media_maxima, " y pertenece al centro ", centro_perteneciente;
	
FinAlgoritmo
