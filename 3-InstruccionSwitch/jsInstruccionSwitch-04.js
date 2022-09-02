/*2)

De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:

A.    Marca (Dia, Carrefour o GreatValue)
B.    Importe del producto (mayor a cero)
C.    Tipo (ebida, Limpieza)
Realizar/Informar:
1.    Si compra mas de 3 productos de despensa obtendrá un descuento del 5% sobre el total de la compra.
2.    Importe total de la compra.
3.    La marca del más caro de limpieza.
4.    La marca del mas barato de despensa.

Pedir datos por prompt y*/

function mostrar()
{

	let marca;
	let importe;
	let tipo;

	let acumuladorDelTotalDelImporte;

	let importeMaximo;
	let banderaGeneral;
	let marcaDelMaximo;
	let importeMinimo;
	let marcaDelMinimo;
	let contadorDeDespensa;
	let descuentoDeLaCompra;

	let respuesta;
	respuesta=true;
	acumuladorDelTotalDelImporte=0;
	banderaGeneral=0;
	contadorDeDespensa;

	while(respuesta==true)
	{

		marca=prompt("cual marca llevara? dia, carrefour, great value");
		marca=marca.toLowerCase();
		while(marca!="dia"&&marca!="carrefour"&&marca!="great value")
		{
			marca=prompt("cual marca llevara? dia, carrefour, great value");
			marca=marca.toLowerCase();
		}

		importe=prompt("cual es el precio");
		importe=parseInt(importe);
		while(importe<0)
		{
			importe=prompt("cual es el precio");
			importe=parseInt(importe);
		}

		tipo=prompt("que tipo de producto llevaara: despensa, bebida, limpieza")
		tipo=tipo.toLowerCase();
		while(tipo!="despensa"&&tipo!="bebida"&&tipo!="limpieza")
		{
			tipo=prompt("que tipo de producto llevaara: despensa, bebida, limpieza")
			tipo=tipo.toLowerCase();
		}

		//calculos

		acumuladorDelTotalDelImporte+=importe;

		switch(tipo)
		{
			case "limpieza":
				if(banderaGeneral == 0 || importeMaximo<importe)
				{
					importeMaximo=importe;
					marcaDelMaximo=marca;
					banderaGeneral=1;
				}
			break;
			case "despensa":
				if(banderaGeneral == 0 || importeMinimo>importe)
				{
					importeMinimo=importe;
					marcaDelMinimo=marca;
					banderaGeneral=1;
				}
				contadorDeDespensa++;
			break;
		}

		respuesta=confirm("desea continuar?");

	}//FIN DEL WHILE
	if(tipo == "despensa" &&)


	alert("el importe total de la compra es: " + acumuladorDelTotalDelImporte);
	alert("la marca mas cara de limpieza es: " + marcaDelMaximo);
	alert("el nombre de la marca mas barata de despensa es: " + marcaDelMinimo);

}//FIN DE LA FUNCIÓN