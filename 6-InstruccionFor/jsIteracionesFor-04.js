/*

2)

De una compra debes ingresar una cantidad indeterminada de productos,
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

function mostrar()
{
	let marca;
	let importe;
	let tipo;

	let contador;

	let respuesta;
	let acumuladorDeImporte;
	let precioFinalConDescuento;
	let contadorDeDespensa;

	let banderaDelMaximo;
	let banderaDelMinimo;
	let importeDelMaximo;
	let importeDelMinimo;
	let marcaNombreDelMasCaro;
	let marcaNombreDelMasBarato;

	contador=0;
	contadorDeDespensa=0;
	banderaDelMaximo=0;
	banderaDelMinimo=0;
	acumuladorDeImporte=0;
	respuesta=true;

	while(respuesta==true)
	{
		marca=prompt("cual es la marca? dia, carrefour, greatvalue")
		marca=marca.toLowerCase();
		while(marca != "dia" && marca != "carrefour" && marca != "greatvalue")
		{
			marca=prompt("EERROR.cual es la marca? dia, carrefour, greatvalue")
			marca=marca.toLowerCase()
		}

		importe=prompt("cual es el importe?")
		importe=parseInt(importe);
		while(isNaN(importe) || importe<1)
		{
			importe=prompt("ERROR.cual es el importe?")
			importe=parseInt(importe);
		}

		tipo=prompt("que tipo de producto es ? despensa, bebida, limpieza")
		tipo=tipo.toLowerCase();
		while(tipo!="despensa" && tipo!= "bebida" && tipo!= "limpieza")
		{
			tipo=prompt("que tipo de producto es ? despensa, bebida, limpieza")
			tipo=tipo.toLowerCase();
		}

		//CALCULOS

		if ( tipo == "limpieza")
		{
			if( importe>importeDelMaximo || banderaDelMaximo==0)
			{
				importeDelMaximo=importe;
				marcaNombreDelMasCaro=marca;
				banderaDelMaximo=1;
			}
		}
		else
		{
			if(tipo == "despensa")
			{
				if(banderaDelMinimo== 0 || importeDelMinimo>importe)
				{
					importeDelMinimo=importe;
					banderaDelMinimo=1;
					marcaNombreDelMasBarato=marca;
				}
				contadorDeDespensa++;
			}
		}


		acumuladorDeImporte+=importe;
		contador++;
		respuesta=confirm("desea continuar?");
	}//FIN DEL WHILE

	if(contadorDeDespensa>3)
	{
		precioFinalConDescuento=acumuladorDeImporte*0.95;
		document.write("el precio final si compro mas de 3 productos es de " + precioFinalConDescuento);
	}

	document.write("<br>el precio final seria " + acumuladorDeImporte);
	if(banderaDelMaximo==1)
	{
		document.write("<br>la marca del maximo es " + marcaNombreDelMasCaro);
	}

	if(banderaDelMinimo==1)
	{
		document.write("<br>la marca del mas barato es" + marcaNombreDelMasBarato);
	}



}//FIN DE LA FUNCIÓN