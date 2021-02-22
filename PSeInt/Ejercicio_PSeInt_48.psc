Algoritmo Ejercicio_48
	
	//Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de datos se utiliza una estructura Mientras, 
	//sin saber a priori la cantidad de datos que se ingresarán.Pista: Los datos alfanuméricos strings también se pueden comparar con los operadores mayor que y menor que
	
	
	Definir  size, index, i, j, contador Como Entero;
	Definir nombre, array, aux Como Caracter;
	
	contador = 0;
	size = 100;
	
	Dimension array[size];
	
	Escribir "introduce nombres";
	
	Repetir
		
		Leer nombre;
		
		si nombre <> "" entonces
		
			array[contador] = nombre;
			contador = contador + 1; //contador += 1 o contador++ en otros lenguajes de programacion
		
		FinSi
	
	mientras Que nombre <> ""
	
	
	//ordeno el array con el metodo de burbuja
	para i = 0 hasta contador - 2 Con Paso 1 Hacer
		
		para j = 0 hasta contador - 2 con paso 1 Hacer
			
			si array[j] > array[j + 1] Entonces
				
				aux = array[j];
				array[j] = array[j + 1];
				array[j + 1] = aux;
				
			FinSi
			
		FinPara
		
	FinPara
	
	para index = 0 hasta contador - 1 Con Paso 1 Hacer
		
		Escribir array[index];
		
	FinPara
	
FinAlgoritmo
