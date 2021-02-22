Algoritmo Ejercicio_43
	
	
	// Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
	
	
	Definir horas, minutos, segundoss, ritmo Como Entero;
	
	ritmo = 10;
	
	Escribir "indica hora, minuto y segundo de comienzo";
	
	Leer horas, minutos, segundoss;
	
	
	mientras verdadero Hacer
		
		mientras horas <= 23 hacer
			
			mientras minutos <= 59 hacer
				
				mientras segundoss <= 59 Hacer
					
					Limpiar Pantalla;
					
					si horas <= 9 Entonces
						
						Escribir "0",horas,":" Sin Saltar;
						
					sino
						
						Escribir horas, ":" Sin Saltar;
						
					FinSi
					
					si minutos <= 9 Entonces
						
						Escribir "0",minutos,":" Sin Saltar;
						
					sino
						
						Escribir minutos, ":" Sin Saltar;
						
					FinSi
					
					si segundoss <= 9 Entonces
						
						Escribir "0",segundoss Sin Saltar;
						
					sino
						
						Escribir segundoss Sin Saltar;
						
					FinSi
					
					Esperar ritmo Milisegundos;
					
					segundoss = segundoss + 1;
					
				FinMientras
				
				si segundoss > 59 Entonces
				
					segundoss = 0;
					
				FinSi
				
				minutos = minutos + 1;
				
			FinMientras
			
			si minutos > 59 Entonces
				
				minutos = 0;
				
			FinSi
			
			horas = horas + 1;
			
		FinMientras
		
		si horas > 23 Entonces
			
			horas = 0;
			
		FinSi
		
	FinMientras
	
FinAlgoritmo
