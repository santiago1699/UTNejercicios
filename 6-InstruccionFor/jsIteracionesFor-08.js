/*3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),cantidad de días que durará el viaje.
informar:
a)el lugar más elegido
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano.*/
function mostrar()
{

let titular;
let lugar;
let temporada;
let cantidaDias;

let lugarMasVisitado;
let contadorPuertoMadryn;
let contadorVillaGessel;
let contadorCordoba;

let banderaDelMaxViaje;
let nombreDelMaximoViajador;
let maximoCantidadDias;

let promedioDeDiasDeViajeVerano;
let acumuladorDiasVerano;
let contadorDeVucontadorDeVueltasVeranoeltas;

let respuesta;

acumuladorDiasVerano=0;
contadorDeVueltas=0;
banderaDelMaxViaje=0;
contadorCordoba=0;
contadorPuertoMadryn=0;
contadorVillaGessel=0;
respuesta=true;

while(respuesta==true)
{
	titular=prompt("cual es tu nombre");

	lugar=prompt("cual es el lugar donde vas a viajar: villa gessel, puerto madryn, cordoba");
	lugar=lugar.toLowerCase();
	while(lugar!="villa gessel" && lugar!= "puerto madryn" && lugar!="cordoba")
	{
		lugar=prompt("ERROR.cual es el lugar donde vas a viajar: villa gessel, puerto madryn, cordoba");
		lugar=lugar.toLowerCase();
	}

	temporada=prompt("en que temporada ira: otono, verano, primavera")
	temporada=temporada.toLowerCase();
	while(temporada!="otono " && temporada!="verano" != temporada!="primavera")
	{
		temporada=prompt("ERROR.en que temporada ira: otono, verano, primavera")
		temporada=temporada.toLowerCase();
	}

	cantidaDias=prompt("cuantos dias te quedaras")
	cantidaDias=parseInt(cantidaDias);
	while(cantidaDias<1)
	{
		cantidaDias=prompt("ERROR.cuantos dias te quedaras")
		cantidaDias=parseInt(cantidaDias);
	}
	//CALCULOS
	switch(lugar)
	{
		case "puerto madryn":
			contadorPuertoMadryn++;
		break;
		case "villa gessel":
			contadorVillaGessel++;
		break;
		case "cordoba":
			contadorCordoba++;
		break;
	}

	if(banderaDelMaxViaje==0 || cantidaDias>maximoCantidadDias)
	{
		maximoCantidadDias=cantidaDias;
		nombreDelMaximoViajador=titular;
		banderaDelMaxViaje=1;
	}

	if(temporada == "verano")
	{
		acumuladorDiasVerano+=cantidaDias;
		contadorDeVueltasVerano;
	}


	respuesta=confirm("desea continuar?")
}//FIN DEL WHILE
promedioDeDiasDeViajeVerano=acumuladorDiasVerano/contadorDeVucontadorDeVueltasVeranoeltas;
if(contadorVillaGessel>contadorPuertoMadryn && contadorVillaGessel>contadorCordoba)
{
	lugarMasVisitado="villa gessel";
}
else
{
	if(contadorPuertoMadryn>contadorCordoba)
	{
		lugarMasVisitado="puerto madryn";
	}
	else
	{
		lugarMasVisitado="cordoba";
	}
}

alert("el lugar mas visitado es: " + lugarMasVisitado);
alert("el nombre de la persona que mas dias viajo es: " + nombreDelMaximoViajador);
alert("el promedio de dias para viajar en verano es " + promedioDeDiasDeViajeVerano);

}//FIN DE LA FUNCIÓN