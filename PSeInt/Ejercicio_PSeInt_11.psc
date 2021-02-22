Algoritmo Ejercicio_11
	
	//En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El descuento se basa en:
	//Si el monto es menor que 500€ -> No hay descuento
	//Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
	//Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
	//Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
	//Más de 15.000€ -> 25% descuento
	//Imprimir (Escribir) el precio final.
	
	Definir cantidad Como Entero;
	Definir d1, d2, d3, d4 Como Real;
	
	d1 = 0.05;
	d2 = 0.1;
	d3 = 0.2;
	d4 = 0.25;
	
	Escribir "cantidad";
	Leer cantidad;
	
	si cantidad < 500 Entonces
		Escribir "no tiene descuento. precio final: ", cantidad;
	SiNo
		si cantidad <= 1000 Entonces
			Escribir "su descuento es del 5%. precio final: ", cantidad - (cantidad*d1);
		SiNo
			si cantidad <= 7000 Entonces
				Escribir "su descuento es del 10%. precio final: ", cantidad - (cantidad*d2);
			SiNo
				si cantidad <= 15000 Entonces
					Escribir "su descuento es del 20%. precio final: ", cantidad - (cantidad*d3);
				SiNo
					Escribir "su descuento es del 25%. precio final: ", cantidad - (cantidad*d4);
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
