/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{

  let tipo;
  let cantidadDeBolsas;// se usa para el B
  let precio;

  //descuentos
  let descuentos;

  //A
  let acumuladorDePrecios;
  let precioBruto;

  //
  let respuesta;

  //D
  let contadorArena;
  let contadorCal;
  let contadorCemento;
  contadorArena=0;
  contadorCal=0;
  contadorCemento=0;
  let masCantidadDeUnidades;

  //e
  let banderaParaMaxima;
  let precioMasCaro;
  let tipoMasCaro;
  banderaParaMaxima=0;

  respuesta=true;
  acumuladorDePrecios=0;
  while(respuesta==true)
  {
    tipo=prompt("QUE LLEVARA? CAL, CEMENTO , ARENA")
    tipo=tipo.toLowerCase()
    while(tipo != "cal" && tipo != "cemento" && tipo != "arena")
    {
      tipo=prompt("errer.QUE LLEVARA? CAL, CEMENTO , ARENA")
      tipo=tipo.toLowerCase()
    }

    cantidadDeBolsas=prompt("cuantas unidades llevara?")
    cantidadDeBolsas=parseInt(cantidadDeBolsas)
    while(cantidadDeBolsas<1)
    {
      cantidadDeBolsas=prompt("ERROR.cuantas unidades llevara?")
      cantidadDeBolsas=parseInt(cantidadDeBolsas)
    }

    precio=prompt("CUal es el precio?")
    precio=parseInt(precio)
    while(precio<1)
    {
      precio=prompt("error.CUal es el precio?")
      precio=parseInt(precio)
    }

    //CALCULOS
    //a
    acumuladorDePrecios=precio*cantidadDeBolsas;

    //descuentos
    if(cantidadDeBolsas>30)
    {
      descuentos=acumuladorDePrecios*0.75
    }
    else
    {
      if(cantidadDeBolsas>10)
      {
        descuentos=acumuladorDePrecios*0.85;
      }
    }

    switch(tipo)
    {
      case "arena":
        contadorArena++;
      break;
      case "cal":
        contadorCal++;
      break;
      case "cemento":
        contadorCemento++;
      break;
    }

    if(banderaParaMaxima == 0 || precioMasCaro<precio)
    {
      precioMasCaro=precio;
      tipoMasCaro=tipo;
      banderaParaMaxima=1;
    }

    respuesta=confirm("continua?")
  }//FIN DEL WHILE////////////////////////////////////////////////////////////////////
  precioBruto=acumuladorDePrecios;

  if(contadorArena>contadorCal&&contadorArena>contadorCemento)
  {
    masCantidadDeUnidades="arena";
  }
  else
  {
    if(contadorCal>contadorCemento)
    {
      masCantidadDeUnidades="cal";
    }
    else
    {
      masCantidadDeUnidades="cemento";
    }


  }

  alert("el precio a pagar sin descuentos es de " + precioBruto);
  alert("el precio final con descuentos es de " + descuentos);
  alert("el tipo con mas cantidad de bolsas es " + masCantidadDeUnidades);
  alert(" el nombre del tipo mas caro es " +tipoMasCaro);







}
