Algoritmo Ejercicio_41
	
	
	// Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
	//a)Obtenga cuántos números son mayores que 0.
	//b)Calcule el promedio de los números positivos.
	//c)Obtenga el promedio de todos los números
	
	
	Definir array, index, size, num_positivos, suma_positivos, suma_total Como Entero;
	Definir check Como Logico;
	
	check = falso;
	
	num_positivos = 0;
	suma_positivos = 0;
	
	suma_total = 0;
	
	Leer size;

	Dimension array[size];
	
	
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		array[index] = Aleatorio(-50,50);
		
		si array[index] > 0 Entonces
			
			num_positivos = num_positivos + 1;
			suma_positivos = suma_positivos + array[index];
			suma_total = suma_total + array[index];
			check = Verdadero;
			
		SiNo
			
			suma_total = suma_total + array[index];
			
		FinSi
	
		
	FinPara
	
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		Escribir "el valor de array[", index, "] es: ", array[index];
		
	FinPara
	
	si check == falso Entonces
		
		Escribir "no hay numeros positivos!";
		
	SiNo
		
		Escribir "numeros mayores que cero: ", num_positivos;
		Escribir "promedio de numeros positivos: ", suma_positivos/num_positivos;
		Escribir "promedio total: ", suma_total/size;
		
	FinSi
	
	
	
	
FinAlgoritmo
