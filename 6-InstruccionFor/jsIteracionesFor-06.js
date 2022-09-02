/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
e) cantidad del libros de ciencia ficcion o drama que cuesten mas de 500
*/




function mostrar()
{
	let nombreLibro;
	let genero;
	let materialLibro;
	let importe;
	//a
	let banderaDelMinimoDeDrama;
	let importeDelMinimoDrama;
	let nombreDelMinimoDeDrama;
	//b
	let importeDelLibroMasCaro;
	let nombreLibroMasCaro;
	let banderaDelLibroMasCaro;
	//c
	let contadorDrama;
	let contadorTerror;
	let contadorCienciaFiccion;
	let contadorDeLibros;
	let porcentajeDrama;
	let porcentajeTerror;
	let porcentajeCienciaFiccion;
	//d
	let contadorDeCienciaFiccionMenorSetescientos;
	//e
	let contadorDeCienciaFiccionYDrama;


	//se incicializan
	banderaDelMinimoDeDrama=0;
	banderaDelLibroMasCaro=0;

	contadorDeLibros=0;
	contadorDrama=0;
	contadorTerror=0;
	contadorCienciaFiccion=0;

	contadorDeCienciaFiccionMenorSetescientos=0;
	contadorDeCienciaFiccionYDrama=0;

	let respuesta;
	respuesta=true;

	while(respuesta==true)
	{
		//ENTTRADAS

		nombreLibro=prompt("titulo del libro");

		genero=prompt("cual es el genero del libro: ciencia ficcion, drama, terror");
		genero=genero.toLowerCase();
		while(genero!="ciencia ficcion" && genero!="drama" && genero!="terror")
		{
			genero=prompt("ERROR.cual es el genero del libro: ciencia ficcion, drama, terror")
			genero=genero.toLowerCase();
		}

		materialLibro=prompt("cual es el material del libro? rustica, tapa dura" ,"rustica, tapa dura" )
		materialLibro=materialLibro.toLowerCase();
		while(materialLibro!="rustica" && materialLibro!="tapa dura")
		{
			materialLibro=prompt("ERROR.cual es el material del libro? rustica, tapa dura" ,"rustica, tapa dura" );
			materialLibro=materialLibro.toLowerCase();
		}

		importe=prompt("cual es el precio");
		importe=parseInt(importe);
		while(importe<1|| importe>30000)
		{
			importe=prompt("cual es el precio. INGRESE DE 1 A 30000");
			importe=parseInt(importe);
		}

		//CALCULOS

		/*if(genero == "drama")
		{
			if(banderaDelMinimoDeDrama==0|| importeDelMinimoDrama<importe)
			{
				importeDelMinimoDrama=importe;
				nombreDelMinimoDeDrama=nombreLibro;
				banderaDelMinimoDeDrama=1;
			}
		}*/

		if(importe>importeDelLibroMasCaro || banderaDelLibroMasCaro==0)
		{
			importeDelLibroMasCaro=importe;
			nombreLibroMasCaro=nombreLibro;
			banderaDelLibroMasCaro=1;
		}

		switch(genero)//C
		{
			case "drama":
				if(banderaDelMinimoDeDrama==0|| importeDelMinimoDrama<importe)
				{
					importeDelMinimoDrama=importe;
					nombreDelMinimoDeDrama=nombreLibro;
					banderaDelMinimoDeDrama=1;
				}
				contadorDrama++;
			break;

			case "terror":
				contadorTerror++;

			break;

			case "ciencia ficcion":
				if(importe<700)//D
				{
					contadorDeCienciaFiccionMenorSetescientos++;
				}
				contadorCienciaFiccion++;
			break;
		}

		if(genero == "drama" || genero == "ciencia ficcion" && importe>500)//lo maneje aparte para no repetir logica
		{
			contadorDeCienciaFiccionYDrama++;
		}

		contadorDeLibros++;
		respuesta=confirm("Desea seguir ingresando datos");
	}//FIN DEL WHILE

	//C
	porcentajeDrama=contadorDrama*100/contadorDeLibros;
	porcentajeCienciaFiccion=contadorCienciaFiccion*100/contadorDeLibros;
	porcentajeTerror=contadorTerror*100/contadorDeLibros;

	if(banderaDelMinimoDeDrama==1)
	{
		document.write("el drama mas barato es: " + nombreDelMinimoDeDrama + "<br>");
	}
	else
	{
		document.write("no se ingreso ningun libro de drama");
	}

	document.write("el titulo del libro mas caro es: " + nombreLibroMasCaro);
	document.write("porcentaje drama: " + porcentajeDrama + "%" + "<br>");
	document.write("porcentaje de terror: " + porcentajeTerror + "%"+ "<br>");
	document.write("porentaje de ciencia ficcion: "+ porcentajeCienciaFiccion + "%"+ "<br>");
	document.write("la cantidad de libros de ciencia ficcion menor a 700 son: " + contadorDeCienciaFiccionMenorSetescientos+ "<br>")
}//FIN DE LA FUNCIÓN