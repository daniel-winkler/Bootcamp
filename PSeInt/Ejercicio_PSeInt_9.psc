Algoritmo Ejercicio_9
	
	// Construir un diagrama de flujo que dado como datos 5 calificaciones de un alumno imprima el promedio 
	//y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 5, y la palabra “no aprobado” 
	//en caso contrario
	
	Definir nota1, nota2, nota3, nota4, nota5, media Como Real;
	
	Escribir "indique sus notas";
	
	Leer nota1, nota2, nota3, nota4, nota5;
	
	media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5 ;
	
	si media >= 5 Entonces
		Escribir "su nota media es ", media, ". esta aprobado.";
	SiNo
		Escribir "su nota media es ", media, ". esta suspenso";
	FinSi
	
FinAlgoritmo
