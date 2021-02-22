Algoritmo Ejercicio_Reloj
	
	
	Definir hora, min, seg, ritmo Como Entero;
	
	ritmo = 100;
	
	Para hora = 0 hasta 23 Con Paso 1 Hacer
		
		Para min = 0 hasta 59 Con Paso 1 Hacer
			
			Para seg = 0 hasta 59 Con Paso 1 Hacer
				
				si hora > 9 y min > 9 y seg > 9 Entonces
					Limpiar Pantalla;
					Escribir hora, ":", min, ":", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora > 9 y min > 9 y seg <= 9 Entonces
					Limpiar Pantalla;
					Escribir hora, ":", min, ":0", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora > 9 y min <= 9 y seg > 9 Entonces
					Limpiar Pantalla;
					Escribir hora, ":0", min, ":", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora > 9 y min <= 9 y seg <= 9 Entonces
					Limpiar Pantalla;
					Escribir hora, ":0", min, ":0", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora <= 9 y min > 9 y seg > 9 Entonces
					Limpiar Pantalla;
					Escribir "0",hora, ":", min, ":", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora <= 9 y min > 9 y seg <= 9 Entonces
					Limpiar Pantalla;
					Escribir "0",hora, ":", min, ":0", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora <= 9 y min <= 9 y seg > 9 Entonces
					Limpiar Pantalla;
					Escribir "0",hora, ":0", min, ":", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
				si hora <= 9 y min <= 9 y seg <= 9 Entonces
					Limpiar Pantalla;
					Escribir "0",hora, ":0", min, ":0", seg;
					Esperar ritmo Milisegundos;
				FinSi
				
			FinPara
			
		FinPara
		
	FinPara
	
FinAlgoritmo
