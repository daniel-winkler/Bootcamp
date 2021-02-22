Algoritmo Ejercicio_49
	
	// se tienen los costes de produccion de tres departamentos (dulces, bebidas y conservas) correspondientes a los 12 meses del año anterior. construir algoritmo que proporcione:
	//a) ¿en que mes se registro el mayor coste de produccion de dulces?
	//b) promedio anual de los costes de producción de bebidas
	//c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
	//d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
	
	
	
	Definir dulces, bebidas, conservas, size, index, i, j, aux, max_dulces, mes_max_dulces, suma_bebidas, max_bebidas, min_bebidas, mes_max_bebidas, mes_min_bebidas, max_diciembre Como Entero;
	Definir mes, departamento Como Caracter;
	
	suma_bebidas = 0;
	size = 12;
	
	Dimension dulces[size], bebidas[size], conservas[size];
	
	Escribir "Deps:    dulces    bebidas    conservas";
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		dulces[index] = Aleatorio(100,1000);
		bebidas[index] = Aleatorio(100,1000);
		conservas[index] = Aleatorio(100,1000);
		Escribir "Mes ",index+1, ":     ", dulces[index], "      ", bebidas[index], "        ", conservas[index]; 
		
	FinPara
	
	Escribir "";
	
	//a) ¿en que mes se registro el mayor coste de produccion de dulces?
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		//se incluye la condicion index igual a 0 para asignarle como maximo el primer coste de enero. como esta al principio y le sigue la condicion O, solo se ejecutara la primera vez y las siguientes ira comparando de manera normal.
		si index == 0 o dulces[index] > max_dulces Entonces
			
			max_dulces = dulces[index];
			mes_max_dulces = index;
			
		FinSi
		
	FinPara
	
	Escribir "el mes de mayor coste en dulces es: ", mes_max_dulces + 1;
	
	Escribir "";
	
	//b) promedio anual de los costes de producción de bebidas
	
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		suma_bebidas = suma_bebidas + bebidas[index];
		
	FinPara
	
	Escribir "el promedio anual de coste de bebidas es: ", suma_bebidas / size;
	
	Escribir "";
	
	//c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
	
	Para index = 0 hasta size - 1 Con Paso 1 Hacer
		
		si index == 0 o bebidas[index] > max_bebidas Entonces
			
			max_bebidas = bebidas[index];
			mes_max_bebidas = index;
			
		FinSi
		
		si index == 0 o bebidas[index] < min_bebidas Entonces
			
			min_bebidas = bebidas[index];
			mes_min_bebidas = index;
			
		FinSi
		
	FinPara
	
	Escribir "el mes de mayor coste en bebidas es: ", mes_max_bebidas + 1, " y el de menor coste es: ", mes_min_bebidas + 1;
	
	Escribir "";
	
	//d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?
	
	
	si dulces[11] > bebidas[11] y dulces[11] > conservas[11] Entonces
		
		max_diciembre = dulces[11];
		departamento = "Dulces";
		
	SiNo
		si bebidas[11] > conservas[11] Entonces
			
			max_diciembre = bebidas[11];
			departamento = "Bebidas";
		SiNo
			
			max_diciembre = conservas[11];
			departamento = "Conservas";
		FinSi
		
		
	FinSi
	
	Escribir "el departamento de mayor coste en diciembre ha sido el de: ", departamento;
	
FinAlgoritmo
