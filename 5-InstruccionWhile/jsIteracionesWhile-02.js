/*
1.	Se ingresan 5 importes, marca del producto
y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/
function mostrar()
{
	let precio;
	let marcaProducto;
	let paisDeOrigen;
	let contador;
	let unidades;
	let flagMinimoPrecio;
	//A
	let minimoImportePrecio;
	let nombreDePaisDeMinimiImporte;

	//B
	let maximoImportePrecio;
	let importeMaximoDeMarca;

	//C
	let acumuladorImporte;
	let promedioImporte;

	//D
	let contadorChina;

	//E
	let descuentoDelMaximo;

	contador=0;
	acumuladorImporte=0;
	contadorChina=0;
	flagMinimoPrecio=true;


	while(contador<2)
	{
		precio=prompt("Ingresa el precio");
		precio=parseInt(precio);
		while(isNaN(precio) || precio<=0)
		{
			precio=prompt("ERROR. Reingresa tu precio");
			precio=parseInt(precio);
		}

		unidades=prompt("cauntas unidades son?");
		unidades=parseInt(unidades);
		while(unidades<=0 || isNaN(unidades))
		{
			unidades=prompt("Ingrese unidades de 1 en adelante")
			unidades=parseInt(unidades);
		}


		marcaProducto=prompt("Ingresa tu marcaProducto");

		paisDeOrigen=prompt("Ingresa tu paisDeOrigen: china, uruguay o paraguay");
		paisDeOrigen=paisDeOrigen.toLowerCase()
		while(isNaN(paisDeOrigen)==false || (paisDeOrigen!='china'&&paisDeOrigen!='uruguay' && paisDeOrigen!="paraguay"))
		{
			division=prompt("ERROR. Reingresa tu division");
			paisDeOrigen=paisDeOrigen.toLowerCase();
		}


	///

	if(contador ==0)
	{
		minimoImportePrecio=precio;
		maximoImportePrecio=precio;
		nombreDePaisDeMinimiImporte=paisDeOrigen;//A
		importeMaximoDeMarca=marcaProducto;//B
	}
	else
	{
			if(maximoImportePrecio<precio){
				maximoImportePrecio=precio;
				importeMaximoDeMarca=marcaProducto;
			}
			if(minimoImportePrecio>precio){
				nombreDePaisDeMinimiImporte=paisDeOrigen;
				minimoImportePrecio=precio;
			}
		}


			acumuladorImporte+=precio;//PUNTO C. el acumulador se debe de iniciar aca, sumandole al acumulador

			if(paisDeOrigen == "china")
			{
				contadorChina+=unidades;
			}

		contador=contador+1;
	}
	promedioImporte=acumuladorImporte/contador;
	descuentoDelMaximo=maximoImportePrecio*0.9;

	alert("el precio minimo es con su respectivo pais es " + minimoImportePrecio + " del pais " + nombreDePaisDeMinimiImporte);
	alert("El promedio de del precio es de " + promedioImporte);
	alert("la cantidad de productos de china es " + contadorChina);
	alert("el precio con descuento " + descuentoDelMaximo);

}




