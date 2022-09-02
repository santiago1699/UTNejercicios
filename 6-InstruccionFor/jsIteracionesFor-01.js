/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/



function mostrar()
{

	let continente;
	let pais;
	let habitantes;
	let temperaturaTerritorio;

	let respuesta;
	respuesta=0;

	//a
	let cantidadTemperaturaPar;
	cantidadTemperaturaPar=0;
	//d
	let acumuladorDeHabitantes;
	let promedioPorPais;
	let contadorPorVuelta;
	acumuladorDeHabitantes=0;
	contadorPorVuelta=0;
	//e
	let bandera;
	let temperaturaMinimaIngresada;
	let nombreDelPais;
	bandera=0;
	//c
	let contadorAmerica;
	contadorAmerica=0;



	while(respuesta<2)
	{
		continente=prompt("cual es el continente. ASIA , AMERICA, EUROPA")
		continente=continente.toLowerCase();
		while(continente!="asia" && continente!="america" &&continente!="europa")
		{
			continente=prompt("ERROR.cual es el continente. ASIA , AMERICA, EUROPA")
			continente=continente.toLowerCase();
		}

		pais=prompt("cual es el pais?")

		habitantes=prompt("cuantos habitantes son?");
		habitantes=parseInt(habitantes);
		while(isNaN(habitantes) && habitantes<1 || habitantes>2000)
		{
			habitantes=prompt("ERROR.cuantos habitantes son?");
			habitantes=parseInt(habitantes);
		}

		temperaturaTerritorio=prompt("cual es la temperatura de la zona")
		temperaturaTerritorio=parseInt(temperaturaTerritorio);
		while(temperaturaTerritorio<-50 || temperaturaTerritorio>50)
		{
			temperaturaTerritorio=prompt("cual es la temperatura de la zona")
			temperaturaTerritorio=parseInt(temperaturaTerritorio);
		}

		//calculos

		if(temperaturaTerritorio%2 == 0)
		{
			cantidadTemperaturaPar++;
		}

		switch(continente)
		{
			case "america":
				if(temperaturaTerritorio<0)
				contadorAmerica++;
			break;

		}


		//d
		acumuladorDeHabitantes+=habitantes;
		contadorPorVuelta++;

		//e
		if(bandera==0|| temperaturaMinimaIngresada>temperaturaTerritorio)
		{
			temperaturaMinimaIngresada=temperaturaTerritorio;
			nombreDelPais=pais;
			bandera=1;
		}
		respuesta++;
	}// fin del while

	promedioPorPais=acumuladorDeHabitantes/contadorPorVuelta;


	alert("la cantidad de temperatura par es " + cantidadTemperaturaPar);//a
	alert("el promedio de habitantes ingresados es de " + contadorPorVuelta);//d
	alert("el pais con la temperatura minima ingresada es " + temperaturaMinimaIngresada);//e
	alert("la cantidad de paises de america que tiene " + contadorAmerica);

}