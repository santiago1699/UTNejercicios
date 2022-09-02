/*EJERCICIO 3
        Censo Municipal
        Realizar el algoritmo que permita ingresar 5 paises:
                el continente (validar entre america , asia , europa ,africa y oceania)
                el nombre del país,
                cantidad de habitantes en millones entre 1 y 7000 (validar)
                el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
                la temperaruta mínima que se registra en su territorio(entre -50 y 50)
                a)La cantidad de temperaturas pares.
                b)la cantidad de temperaturas impares de europa
                c)El nombre del pais con menos habitantes
                d)la cantidad de paises que superan los 40 grados.
                e)la cantidad de paises de america que tienen menos de 0 grados .
                f)el promedio de habitantes entre los paises ingresados .
                g)el promedio de habitantes entre los paises que superan los 40 grados
                H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
                i) que continente tiene mas habitantes.*/
function mostrar()
{

	let continente;
	let nombrePais;
	let cantidadHabitantes;
	let temperatura;
	let nivel;

	let contadorTemperaturasPares;
	let contadorTemperaturasImparesEuropa;

	let banderaGeneral;
	let cantidadMinimaDeHabitantes;
	let nombreDelPaisMinimo;

	let contadorPaisesDeMuchaTemperatura;
	let promedioDeHabitantesDeTemperaturaSuperior;
	let acumuladorDePaisesDeMuchaTemperatura;
	let contadorPaisesAmerica;
	let promedioCantidadHabitantesEnTotal;
	let acumuladorGeneralDeHabitantes;

	let temperaturaMinima;
	let paisDeTemperaturaMinima;

	let acumuladorDeAfrica;
	let acumuladorDeAmerica;
	let acumuladorDeAsia;
	let acumuladorDeEuropa;
	let acumuladorDeOceania;

	let continenteConMasHabitantes;




	let contador;

	acumuladorGeneralDeHabitantes=0;
	contadorPaisesAmerica=0;
	acumuladorDePaisesDeMuchaTemperatura=0;
	contadorPaisesDeMuchaTemperatura=0;
	banderaGeneral=0;
	contadorTemperaturasImparesEuropa=0;
	contadorTemperaturasPares=0;
	contador=0;

	while(contador<2)
	{
		continente=prompt("cual es el continente? asia, america, europa, africa, oceania")
		continente=continente.toLowerCase();
		while(continente!="america"&&continente!="asia"&&continente!="europa"&&continente!="africa"&&continente!="oceania")
		{
			continente=prompt("ERROR.cual es el continente? asia, america, europa, africa, oceania")
			continente=continente.toLowerCase();
		}

		nombrePais=prompt("nombre del pais")

		cantidadHabitantes=prompt("cuantos habitanes son?")
		cantidadHabitantes=parseInt(cantidadHabitantes);
		while(cantidadHabitantes<1 || cantidadHabitantes>7000)
		{
			cantidadHabitantes=prompt("ERRROR.cuantos habitanes son?")
			cantidadHabitantes=parseInt(cantidadHabitantes);
		}

		temperatura=prompt("cual es la temperatura?");
		temperatura=parseInt(temperatura);
		while(temperatura<-50 || temperatura>50)
		{
			temperatura=prompt("ERROR.cual es la temperatura?");
			temperatura=parseInt(temperatura);
		}

		nivel=prompt("cual es el nivel economico: pobre, rico, muy rico");
		nivel=nivel.toLowerCase();
		while(nivel!="pobre"&&nivel!="rico"&&nivel!="muy rico" || continente=="europa" && nivel=="pobre")
		{
			nivel=prompt("cual es el nivel economico: pobre, rico, muy rico. Europa no es pobre.");
			nivel=nivel.toLowerCase();
		}

		if(temperatura%2==0)
		{
			contadorTemperaturasPares++;
		}
		else
		{
			if(continente=="europa")
			{
				contadorTemperaturasImparesEuropa++;
			}
		}
		if(banderaGeneral ==0|| temperaturaMinima<temperatura)
		{
			temperaturaMinima=temperatura;
			paisDeTemperaturaMinima=nombrePais;
		}

		if(banderaGeneral==0 || cantidadHabitantes<cantidadMinimaDeHabitantes)
		{
			cantidadMinimaDeHabitantes=cantidadHabitantes;
			nombreDelPaisMinimo=nombrePais
			banderaGeneral=1;
		}

		if(temperatura>40)
		{
			contadorPaisesDeMuchaTemperatura++;//d
			acumuladorDePaisesDeMuchaTemperatura+=temperatura;//g
		}

		if(continente=="america" && temperatura<0)
		{
			contadorPaisesAmerica++;
		}


		switch(continente)
		{
			case "africa":
				acumuladorDeAfrica++;
			break;
			case "america":
				acumuladorDeAmerica++;
			break;
			case "asia":
				acumuladorDeAsia++;
			break;
			case "europa":
				acumuladorDeEuropa++;
			break;
			case "oceania":
				acumuladorDeOceania++;
			break;
		}



		acumuladorGeneralDeHabitantes+=cantidadHabitantes;
		contador++;
	}//FIN DEL WHILE

	if(acumuladorDeAfrica>acumuladorDeAmerica&&acumuladorDeAfrica>acumuladorDeAsia&&acumuladorDeAfrica>acumuladorDeEuropa&&acumuladorDeAfrica>acumuladorDeOceania)
	{
		continenteConMasHabitantes="africa";
	}
	else
	{
		if(acumuladorDeAmerica>acumuladorDeAsia&&acumuladorDeAmerica>acumuladorDeEuropa&&acumuladorDeAmerica>acumuladorDeOceania)
		{
			continenteConMasHabitantes="america";
		}
		else
		{
			if(acumuladorDeAsia>acumuladorDeEuropa&&acumuladorDeAsia>acumuladorDeOceania)
			{
				continenteConMasHabitantes="asia";
			}
			else
			{
				if(acumuladorDeEuropa>acumuladorDeOceania)
				{
					continenteConMasHabitantes="europa";
				}
				else
				{
					continenteConMasHabitantes="oceania";
				}
			}
		}
	}

	promedioDeHabitantesDeTemperaturaSuperior=acumuladorDePaisesDeMuchaTemperatura/contadorPaisesDeMuchaTemperatura;
	promedioCantidadHabitantesEnTotal=acumuladorGeneralDeHabitantes/contador;

	document.write("la cantidad de paises con temeperatura par: " + contadorTemperaturasPares+"<br>");
	document.write("la cantidad de temperaturas de europa impar es: "+ contadorTemperaturasImparesEuropa+"<br>");
	document.write("el nombre del pais con menos habitantes es: "+ nombreDelPaisMinimo+"<br>");
	document.write("la cantidad de paises que superan los 40 grados son: " + contadorPaisesDeMuchaTemperatura+"<br>");
	document.write("la cantidad de paises de america con temperatura bajo cero es: " + contadorPaisesAmerica+"<br>")
	document.write("el promedio de habitantes entre los paises ingresado es: "+ promedioCantidadHabitantesEnTotal+"<br>");
	document.write("el promedio de habitantes de los paises que superan los 40 grados son: " + promedioDeHabitantesDeTemperaturaSuperior+"<br>");
	document.write("la temperatura minima ingresada es: " +temperaturaMinima+" y el nombre del pais es: " +nombreDelPaisMinimo +"<br>");
	document.write("el continente que tiene mas habitantes es: " + continenteConMasHabitantes+"<br>");

	/*EJERCICIO 3
           Censo Municipal
          Realizar el algoritmo que permita ingresar 5 paises:
                el continente (validar entre america , asia , europa ,africa y oceania)
                el nombre del país,
                cantidad de habitantes en millones entre 1 y 7000 (validar)
                el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
                la temperaruta mínima que se registra en su territorio(entre -50 y 50)
                a)La cantidad de temperaturas pares.
                b)la cantidad de temperaturas impares de europa
                c)El nombre del pais con menos habitantes
                d)la cantidad de paises que superan los 40 grados.
                e)la cantidad de paises de america que tienen menos de 0 grados .
                f)el promedio de habitantes entre los paises ingresados .
                g)el promedio de habitantes entre los paises que superan los 40 grados
                H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
                i) que continente tiene mas habitantes.*/


}//FIN DE LA FUNCIÓN