/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar (){

	let tipo;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;


	let bandera;
	let precioDelMinimo;
	//precioDelMinimo=0;
	let fabricanteNombreDelMinimo;
	let cantidadDeUnidadesDElMinimo;
	bandera=0;

	let cantidadBarbijo;
	let cantidadJabon;
	let cantidadAlcohol;
	let masUnidades;
	cantidadAlcohol=0;
	cantidadJabon=0;
	cantidadBarbijo=0;
	let acumuladorDeCantidades;
	acumuladorDeCantidades=0;
	let promedio;
	let acumuladorJabon;
	acumuladorJabon=0;

	for(contador=0; contador<2; contador++)
	{
		tipo=prompt("que desea llevar? barbijo, jabon, alcohol")
		tipo=tipo.toLocaleLowerCase();
		while(tipo != "barbijo" && tipo != "jabon" && tipo!="alcohol")
		{
			tipo=prompt("ERROR.que desea llevar? barbijo, jabon, alcohol")
			tipo=tipo.toLocaleLowerCase();
		}

		precio=prompt("cual es el precio?INGRESE 100 a 300")
		precio=parseInt(precio);
		while(precio<100 || precio >300)
		{
			precio=prompt("ERROR.cual es el precio? 100 a 300")
			precio=parseInt(precio);
		}

		cantidadUnidades=prompt("cuantas unidades llevara?");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("ERROR.cuantas unidades llevara?");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("que marca llevara?");
		fabricante=prompt("de que fabricante?");

		/// CALCULOS

		switch(tipo)
		{
			case "alcohol":
				if(bandera == 0 || precioDelMinimo>precio)
				{
					precioDelMinimo=precio;
					fabricanteNombreDelMinimo=fabricante;
					cantidadDeUnidadesDElMinimo=cantidadUnidades;
					bandera=1;
				}
			cantidadAlcohol++;
			break;
			case "barbijo":
				cantidadBarbijo++;
			break;
			case "jabon":
				acumuladorJabon+=cantidadUnidades;
				cantidadJabon++;
			break;
		}


		acumuladorDeCantidades+=cantidadUnidades;
	}//FIN DEL FOR
	
	promedio=acumuladorDeCantidades/contador;

	if(cantidadAlcohol>cantidadJabon && cantidadAlcohol>cantidadBarbijo)
	{
		masUnidades="alcohol";
	}
	else
	{
		if(cantidadJabon>cantidadBarbijo)
		{
			masUnidades="jabon";
		}
		else
		{
			masUnidades="barbijo";
		}
	}

	alert("el aclohol mas barato es " + precioDelMinimo+" la cantidad de " + cantidadDeUnidadesDElMinimo+ " y fabricante " + fabricanteNombreDelMinimo);///a
	alert("el tipo con mas unidades es el " + masUnidades + " y el promedio por compra es " + promedio);
	alert("las unidades de jabon que hay en total son " + acumuladorJabon);

}
/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


//////////////////////////////////////////////


/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

/*
let tipoDeProducto;
let precio;
let unidades;
let marca;
let fabricante;
//PUNTO A
let precioDelAlcoholMasBarato;
let unidadesDelAlcoholMasBarato;
let fabricanteAlcholMasBarato;
let banderaDelAlcoholMasBarato;
//PUNTO B
let acumuladorDeUnidadesDeBarbijo;
let acumuladorDeUnidadesDeAlcohol;
let acumuladorDeUnidadesDeJabon;
//

let contador;
//bandera del punto A
banderaDelAlcoholMasBarato=0;
//PUNTO B
acumuladorDeUnidadesDeBarbijo=0;
acumuladorDeUnidadesDeJabon=0;
acumuladorDeUnidadesDeAlcohol=0;


for(contador=0; contador<5; contador++)
{
	tipoDeProducto=prompt("Que producto llevara?" , "barbijo, jabon, alcohol?");
	tipoDeProducto=tipoDeProducto.toLowerCase();
	while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto!="alcohol")
	{
		tipoDeProducto=prompt("Ingrese un producto valido: barbijo, jabon, alcohol");
		tipoDeProducto=tipoDeProducto.toLowerCase();
	}

	precio=prompt("Cual es el precio de " + tipoDeProducto + " ? ");
	precio=parseInt(precio);
	while(precio<100 || precio>300)
	{
		precio=prompt("Ingrese un numero entre 100 y 300");
		precio=parseInt(precio);
	}

	unidades=prompt("cuantos productos va a llevar? ");
	unidades=parseInt(unidades);
	while(unidades < 1 || unidades >1000 )
	{
		unidades=prompt("Ingrese productos de un rango entre 1 y 1000");
		unidades=parseInt(unidades);
	}

	marca=prompt("que marca es el producto?");
	fabricante=prompt("Cual es el fabricante?");

	//CALCULOS

	switch(tipoDeProducto)
	{
		case "alcohol":// PUNTO A: DEL ALCOHOL MAS BARATO LA CANTIDAD DE UNIDADES Y EL FABRICANTE
			if(precio < precioDelAlcoholMasBarato || banderaDelAlcoholMasBarato == 0)
			{
				precioDelAlcoholMasBarato=precio;
				unidadesDelAlcoholMasBarato=unidades;
				fabricanteAlcholMasBarato=fabricante;
				banderaDelAlcoholMasBarato=1
			}
			acumuladorDeUnidadesDeAlcohol+=unidades;
		break;
		case "barbijo":
			acumuladorDeUnidadesDeBarbijo+=unidades;
		break;
		case "jabon":// PUNTO C: CANTIDAD DE UNIDADES DE JABON
			acumuladorDeUnidadesDeJabon+=unidades;
		break;
	}


}//FIN DEL WHILE

if(acumuladorDeUnidadesDeBarbijo>acumuladorDeUnidadesDeJabon && acumuladorDeUnidadesDeBarbijo>acumuladorDeUnidadesDeAlcohol)
{
	
}

alert("El alcohol mas barato vale " +precioDelAlcoholMasBarato + " del fabricante " + fabricanteAlcholMasBarato )//PUNTO A

alert("La cantidad de unidades de jabon es " + acumuladorDeUnidadesDeJabon)//PUNTO C



// PARA SACAR EL TIPO CON MAS UNIDADES Y EL PROMEDIO DE ESTA MISMA
if(unidadesBarbijo > unidadesJabon && unidadesBarbijo > unidadesAlcohol) // Barbijo
{	
tipoUnidades = "barbijo";
promedio = unidadesBarbijo / acumuladorBarbijo;
}
else
{
if(unidadesJabon > unidadesBarbijo && unidadesJabon > unidadesAlcohol) // Jabón
{
	tipoUnidades = "jabon";
	promedio = unidadesJabon / acumuladorJabon;
}
else // Sí no es Barbijo, ni Jabón.. es Alcohol
{
	tipoUnidades = "alcohol";
	promedio = unidadesAlcohol / acumuladorAlcohol;
}
}
*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/
/*
function mostrar()
{
	let peso;
	let precioPorKilo;
	let tipoDeProducto;
	//CANTIDAD TOTAL debo de crear acumuladores
	let acumuladorDeVerdura;
	let acumuladroDeCarne;
	let acumuladorDeMezcla;
	let valorTotaldeCompra;
	let valorTotalDelPeso;// suma de todos los pesos ingresados
	let precioConDescuento;
	let mensaje;
	//
	let respuesta;
	let contador;
	respuesta=true;
	//inicio contadores y acumuladores
	contador=0;
	acumuladorDeMezcla=0;
	acumuladroDeCarne=0;
	acumuladorDeVerdura=0;

	while(respuesta == true)
	{
		peso=prompt("Cuantos kilos vas a llevar?")
		peso=parseInt(peso)
		while(peso<10 || peso >100)
		{
			peso=prompt("ERROR. ingrese peso entre 10 y 100 kg")
			peso=parseInt(peso);
		}

		precio=prompt("Cual es el precio?")
		precio=parseInt(precio)
		while(precio<1)
		{
			precio=prompt("Por favor, ingrese un precio valido.")
			precio=parseInt;
		}

		tipoDeProducto=prompt("QUE QUIERE LLEVAR? VERDURDA, ANIMAL O MEZCLA? indicar solo con la inicial de la letra.", "V , A, O")
		tipoDeProducto=tipoDeProducto.toLocaleLowerCase();
		while(tipoDeProducto!="v"&&tipoDeProducto!="a"&&tipoDeProducto!="m")
		{
			tipoDeProducto=prompt("ingrese solo la letra correcta:");
			tipoDeProducto=tipoDeProducto.toLocaleLowerCase();
		}


		//CALCULOS

		valorTotaldeCompra=peso*precio;
		precioBruto+=valorTotaldeCompra;

		valorTotalDelPeso+=peso;

		switch(tipoDeProducto)
        {
        	case "v":
            acumuladorDeVerdura=peso;
        	break;
        	case "a":
            acumuladroDeCarne=peso;
        	break;
        	case "o":
            acumuladorDeMezcla=peso;
        }

		respuesta=confirm("queres seguir ingresando?")

	}//FIN DEL WHILE

	if(valorTotalDelPeso>300)
	{
		precioConDescuento=precioBruto*0.75;
	}
	else
	{
		if(valorTotalDelPeso>100)
		{
			precioConDescuento=precioBruto*0.85;
		}
		else
		{
			mensaje="no se aplico ningun descuento";
		}
	}

}*/