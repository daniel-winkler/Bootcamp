Algoritmo Ejercicio_32
	
	//El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el número de unidades consumidas de 
	//cada alimento ordenado y calcular la cuenta total. Vamos a suponer que estos precios son fijos, es decir, que son constantes 
	//(recuerda que en PSeInt no se usa comas para separar la parte decimal de la parte entera).
	
	//Bocadillo de jamon 1.5 Euros
	//Refresco 1.05 euros
	//Cerveza 0.75 euros
	//Pan 2 euros
	
	
	Definir prod1, prod2, prod3, prod4 Como entero;
	Definir precio1, precio2, precio3, precio4, total Como Real;
	
	precio1= 1.5;
	precio2= 1.05;
	precio3= 0.75;
	precio4= 2;
	
	Escribir "cuantos bocadillos de jamon?";
	Leer prod1;
	
	Escribir "cuantos refrescos?";
	Leer prod2;
	
	Escribir "cuantas cervezas?";
	Leer prod3;
	
	Escribir "cuanto pan?";
	Leer prod4;
	
	total = (prod1*precio1) + (prod2*precio2) + (prod3*precio3) + (prod4*precio4);
	
	Escribir "el total es: ", total;
	
	
	
FinAlgoritmo
