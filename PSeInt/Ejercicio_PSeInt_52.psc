Algoritmo Ejercicio_52
	
	//Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número introducido por teclado
	//y nos debe decir si está incluido en el array y el índice de su primera coincidencia.
	
	
	Definir array, index, size, num, indice_num Como Entero;
	Definir check Como Logico;
	
	size = 10;
	
	check = falso;
	
	Dimension array[size];
	
	// genera numeros aleatorios indice por indice.
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		array[index] = Aleatorio(1,15);
		Escribir array[index], " " Sin Saltar;
		
	FinPara
	
	Escribir "";
	
	Leer num;
	
	// comprueba el numero introducido con los numeros aletorios generados
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		//si un numero coincide y ha sido el primero encontrado (check falso), entra en el si entonces
		si num == array[index] y check == falso Entonces
			
			indice_num = index;
			check = Verdadero;
			
		FinSi
		
	FinPara
	
	// si ha encontrado el numero en el array el check sera verdadero
	si check Entonces
		
		Escribir "el numero ", num, " esta en el array en el indice ", indice_num;
		
	SiNo
		
		Escribir "el numero ", num, " NO esta en el array";
		
	FinSi
	
	// OTRA SOLUCION para que el bucle pare una vez que encuentre el numero.
	
	index = 0;
	
	mientras index < size y num <> array[index] Hacer
		
		index = index + 1;
		
	FinMientras
	
	si index < size Entonces
		
		Escribir "el numero ", num, " esta en el array en el indice ", index;
		
	SiNo
		
		Escribir "el numero ", num, " NO esta en el array";
		
	FinSi
	
	
FinAlgoritmo
