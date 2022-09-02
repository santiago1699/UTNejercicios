/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	//DATOS DE PARA LOS PROMPTS
	let nombre;
	let edad;
	let genero;
	let estadoCivil;
	let temperatura;
	//DATOS DE VALIDACION
	let temperaturaMaxima;
	let banderaTemperaturaMaxima;
	let nombreConTemperaturaMaxima;
	//
	let contadorDeMayoresViudos;
	let contadorDeMasculinos;
	let contadorJubiladosConMaximaTemperatura;
	let contadorSolteros;
	let acumuladorEdadMasculinoSoltero;
	let promedioDeEdadMasculinosSolteros;

	let respuesta;

	respuesta=true;
	acumuladorEdadMasculinoSoltero=0;
	banderaTemperaturaMaxima=0;
	contadorDeMayoresViudos=0;
	contadorHombresSolterosYViudos=0;
	contadorDeMasculinos=0;
	contadorJubiladosConMaximaTemperatura=0;
	contadorSolteros=0;

	while(respuesta == true)
	{
		nombre=prompt("Como te llamas?");

		edad=prompt("Cual es tu edad");
		edad=parseInt(edad);
		while(edad<0 || edad>115)
		{
			edad=prompt("Ingrese una edad real");
			edad=parseInt(edad);
		}

		genero=prompt("Cual es tu genero?" , "M o F")
		genero=genero.toLowerCase();
		while(genero!="m" && genero!="f")
		{
			genero=prompt("Pone un genero real");
			genero=genero.toLowerCase();
		}

		estadoCivil=prompt("Cual es tu estado civil? soltero, casado, viudo");
		estadoCivil=estadoCivil.toLowerCase();
		while(estadoCivil!= "soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese de manera correcta su estado civil");
			estadoCivil=estadoCivil.toLowerCase();
		}

		temperatura=prompt("Cual es tu temperatura")
		temperatura=parseFloat(temperatura);//el PARSEFLOAT es para tomar numero con coma
		while(temperatura<30 || temperatura>43)
		{
			temperatura=prompt("Ingrese un una temperatura valida")
			temperatura=parseFloat(temperatura);
		}

		//CALCULOS

		if(temperatura>temperaturaMaxima || banderaTemperaturaMaxima == 0)//PARA SACAR EL MAXIMO DE TEMPERATURA JUNTO CON EL NOMBRE
		{
			temperaturaMaxima=temperatura;
			banderaTemperaturaMaxima=1;// LA BANDERA ES UN CONCEPTO EN PROGRAMACION. SIRVE PARA TOMAR LOS MAXIMOS Y MINIMOS.
			nombreConTemperaturaMaxima=nombre;
		}

		if(edad>17 && estadoCivil=="viudo")//PARA SACAR LA CANTIDAD DE HOMBRES MAYORES DE EDAD SOLTEROS Y VIUDOS
		{
			contadorDeMayoresViudos++;
		}

		if((estadoCivil == "viudo" || estadoCivil == "soltero") && genero == "m")//LA CANTIDAD DEL GENERO MASCULINO QUE ESTAN VIUDOS Y SOLTEROS
		{
			contadorDeMasculinos++;
		}

		if(temperatura>38 && edad>59)//PARA SABER LA TEMPERATURA DE LOS JUBILADOS CON MAXIMA TEMPERATURA
		{
			contadorJubiladosConMaximaTemperatura++;
		}

		if(estadoCivil == "soltero" && genero=="m")// PARA SABER LA CANTIDAD DE SOLO HOMBRES SOLTEROS
		{
			acumuladorEdadMasculinoSoltero+=edad;
			contadorSolteros++;
		}


		respuesta=confirm("Desea continunar con otro pasajero?");
	}//FIN DEL WHILE

	promedioDeEdadMasculinosSolteros= acumuladorEdadMasculinoSoltero/contadorSolteros;
	alert("la persona con el maximo de temepertura es" + nombreConTemperaturaMaxima + "y su temperatura es " + temperaturaMaxima);
	alert("la cantidad de masculinos viudos y solteros es de : " + contadorDeMasculinos);
	alert("la cantidad de jubilados cocn la temperatura maxima es " + contadorJubiladosConMaximaTemperatura);
	alert("la cantidad de hombres solteros es de " + contadorSolteros);
	alert( "el promedio de edad de los hombres solteros es " + promedioDeEdadMasculinosSolteros);

}
