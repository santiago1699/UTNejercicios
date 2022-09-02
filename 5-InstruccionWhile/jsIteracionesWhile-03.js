/*
Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen el 1.7 mt y pesen mas de 85 kg.
*/
/*
function mostrar()
{
	let nombre;
	let edad;
	let peso;
	let altura;

	let banderaGeneral=0;
	let edadDelMinimo;
	let nombreDeEdadMinima;
	let acumuladorDeAltura=0;
	let promedioAltura;
	let acumuladorDePeso=0;
	let promedioDePeso;
	let cantidadJugadoresGrandes=0;

	let pesoAlturaMaxima;
	let alturaMaxima;

	let contador;
	contador=0;

	while(contador<11)
	{
		nombre=prompt("nombre de jugador");

		edad=prompt("cual es la edad del jugador");
		edad=parseInt(edad);
		while(edad<1 || edad > 80)
		{
			edad=prompt("cual es la edad del jugador");
			edad=parseInt(edad);
		}

		peso=prompt("cual es el peso");
		peso=parseInt(peso);
		while(peso<40||peso>120)
		{
			peso=prompt("cual es el peso");
			peso=parseInt(peso);
		}

		altura=prompt("cual es la altura");
		altura=parseInt(altura);
		while(altura<25 || altura>240)
		{
			altura=prompt("cual es la altura");
			altura=parseInt(altura);
		}

		//calculos
		if(banderaGeneral==0 || edadDelMinimo>edad)
		{
			edadDelMinimo=edad;
			nombreDeEdadMinima=nombre;
		}
		if(banderaGeneral==0 || alturaMaxima<altura)
		{
			alturaMaxima=altura;
			pesoAlturaMaxima=peso;
			banderaGeneral=1;
		}

		acumuladorDeAltura+=altura;
		acumuladorDePeso+=peso;

		if(altura>170 && peso > 85)
		{
			cantidadJugadoresGrandes++;
		}


		contador++;
	}//FIN DEL WHILE

	promedioAltura=acumuladorDeAltura/contador;
	promedioDePeso=acumuladorDePeso/contador;

	document.write("el nombre del jugador mas joven es" + nombreDeEdadMinima +"<br>")
	document.write("" + nombreDeEdadMinima +"<br>")
	document.write("el nombre del jugador mas joven es" + nombreDeEdadMinima +"<br>")
	document.write("el nombre del jugador mas joven es" + nombreDeEdadMinima +"<br>")
}
	/*
Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen el 1.7 mt y pesen mas de 85 kg.
*/


/*De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:

A.    Marca (Dia, Carrefour o GreatValue)
B.    Importe del producto (mayor a cero)
C.    Tipo (Despensa, Bebida, Limpieza)
Realizar/Informar:
1.    Si compra mas de 3 productos de despensa obtendrá un descuento del 5% sobre el total de la compra.
2.    Importe total de la compra.
3.    La marca del más caro de limpieza.
4.    La marca del mas barato de despensa.

Pedir datos por prompt y mostrar por document write o alert.
*/
/*
function mostrar()
{
	let marca;
	let importe;
	let tipo;

	let acumuladorDelTotal;
	let contadorDeDespensa;

	let banderaGeneral;
	let importeMasCaro;
	let marcaDelMasCaro;

	let importeMasBarato;
	let marcaMasBarato;

	let respuesta;
	respuesta=true;
	acumuladorDelTotal=0;
	banderaGeneral=0;
	contadorDeDespensa=0;

	while(respuesta==true)
	{
		marca=prompt("cual es la marca");
		marca=marca.toLowerCase();
		while(marca!="dia" && marca!="carrefour" && marca!="greatValue")
		{
			marca=prompt("cual es la marca");
			marca=marca.toLowerCase();
		}

		importe=prompt("cual es el importe");
		importe=parseInt(importe)
		while(importe<1)
		{
			importe=prompt("cual es el importe");
			importe=parseInt(importe)
		}

		tipo=prompt("que llevara, bebida, despensa, limpieza");
		tipo=tipo.toLowerCase();
		while(tipo!="bebida" && tipo!="despensa" && tipo != "limpieza")
		{
			tipo=prompt("que llevara, bebida, despensa, limpieza");
			tipo=tipo.toLowerCase();
		}

		if(tipo=="despensa")
		{
			contadorDeDespensa++;
		}

		acumuladorDelTotal+=importe;

		if(contadorDeDespensa>3)
		{
			acumuladorDelTotal=acumuladorDelTotal*0.95;
		}



		switch(marca)
		{
			case "limpieza":
			if(banderaGeneral==0 || importe>importeMasCaro)
			{
				importeMasCaro=importe;
				marcaDelMasCaro=marca;
			}
			break;
			case "despensa":
			if(banderaGeneral==0 || importe<importeMasBarato)
			{
				importeMasBarato=importe;
				marcaMasBarato=marca;
				banderaGeneral=1;
			}
			break;
		}

		if(marca == "limpieza" )


		respuesta=confirm("desea continuar?");
	}//fin del while

	if(contadorDeDespensa>3)
	{
		document.write("importe total de la compra es " + acumuladorDelTotal);
	}


	document.write("")
}

*/


/*
Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos,
 sin limite de
ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/

function mostrar()
{
	let marca;
	let peso;
	let importe;
	let tipo;

	let acumuladorDeImporte;
	let contador;
	let promedioImporte;
	let banderaGeneral;
	let pesoMinimo;

	let marcaPesoMinimo;
	let importeDelMasLivianoMinimo;
	let marcaDePesoMax;

	let pesoMaximo;

	let respuesta;
	respuesta=true;
	acumuladorDeImporte=0;
	contador=0;
	banderaGeneral=0;

	while(respuesta==true)
	{
		marca=prompt("que marca de auto es ");

		peso=prompt("cual es el peso del auto")
		peso=parseInt(peso);
		while(peso<917 || peso>3900)
		{
			peso=prompt("cual es el peso del auto")
			peso=parseInt(peso);
		}

		importe=prompt("cual es el importe");
		importe=parseInt(importe);
		while(importe<600000)
		{
			importe=prompt("cual es el importe");
			importe=parseInt(importe);
		}

		tipo=prompt("que tipo es, sedan o cuopue");
		tipo=tipo.toLowerCase();
		while(tipo!="sedan" && tipo!="coupe")
		{
			tipo=prompt("que tipo es, sedan o cuopue");
			tipo=tipo.toLowerCase();
		}

		//calculos
		acumuladorDeImporte+=importe;

		if(tipo=="sedan")
		{
			if(banderaGeneral==0||peso<pesoMinimo)
			{
				pesoMinimo=peso;
				marcaPesoMinimo=marca;
				importeDelMasLivianoMinimo=importe;
			}
		}


		if(tipo=="coupe")
		{
			if(banderaGeneral==0 || peso>pesoMaximo)
			{
				pesoMaximo=peso;
				marcaDePesoMax=marca;
				banderaGeneral=1;
			}
		}



		contador++;
	respuesta=confirm("desea continuar");
	}//fin del while

	promedioImporte=acumuladorDeImporte/contador;

	document.write("el promedio del total de los importes es: " + promedioImporte +"<br>");
	document.write("el auto mas liviano de los sedanes es: " + marcaPesoMinimo + "y su importe es" + importeDelMasLivianoMinimo +"<br>");
	document.write("el auto mas pesado de los cuope es: " + marcaDePesoMax +"<br>");
}


