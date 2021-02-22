
Funcion resultado = promedio_array(array, size)
	
	Definir suma, index, resultado Como Real;
	
	suma = 0;
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		suma = suma + array[index];
		
	FinPara
	
	resultado = suma / size;
	
FinFuncion



Algoritmo Ejercicio_53
	
	// Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo principal, leer la cantidad de 
	//datos que introducirá el usuario y posteriormente los propios datos. Escribir el resultado de su promedio
	
	
	Definir array, size, index Como Entero;
	
	size = 10;
	
	Dimension array[size];
	
	Escribir "escriba 10 numeros";
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		Leer array[index];
		
	FinPara
	
	Escribir promedio_array(array, size);
	
FinAlgoritmo
