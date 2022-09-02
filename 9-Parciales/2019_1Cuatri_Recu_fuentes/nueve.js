/*3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),cantidad de días que durará el viaje.
informar:
a)el lugar más elegido
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano.*/

function mostrar()
{
    let nombre;
    let lugar;
    let temporada;
    let dias;
    //cantidad de veces elegido el sitio por la gente para viajar PUNTO A
    let cantidadGessel;
    let cantidadCordoba;
    let cantidadPuerto;
    let ciudadMasVisitada;
    // PARA SABER CUAL ES EK NOMBRE DE LA PERSONA CON MAXIMA CANTIDAD DE DIAS
    let banderaParaMaxima;
    let nombreDelMaximo;
    let diasDelMaximo;
    //c
    let contadorDeViaje;
    let promedioDeDiasDeVerano;
    let acumuladorDeDiasDeVerano;


    respuesta=true;
    //PARA SABER CUAL ES EL LUGAR MAS ELEGIDO, DEBEMOS INICIAR LOS ACUMULUADORES PUNTO A
    cantidadGessel=0;
    cantidadCordoba=0;
    cantidadPuerto=0;
    //PUNTO B
    banderaParaMaxima=0;
    contadorDeViaje=0;
    //PUNTO C
    acumuladorDeDiasDeVerano=0;

    while(respuesta==true)
    {
        nombre=prompt("Como te llamas?");

        lugar=prompt("Cual es tu lugar de destino? villa gessel, puerto madryn, cordoba");
		lugar=lugar.toLowerCase();
		while(lugar!= "villa gessel" && lugar!="puerto madryn" && lugar!="cordoba")
		{
			lugar=prompt("Ingrese de manera correcta ");
			lugar=lugar.toLowerCase();
		}

        temporada=prompt("Cual es tu temporada de destino? verano, primavera, otono");
		temporada=temporada.toLowerCase();
		while(temporada!= "verano" && temporada!="primavera" && temporada!="otono")
		{
			temporada=prompt("Ingrese de manera correcta ");
			temporada=temporada.toLowerCase();
		}

        dias=prompt("cuantos dias te vas a quedar?")
        dias=parseInt(dias);
        while(isNaN(dias) || dias<0)
        {
            dias=prompt("ERROR. ingrese un numero valido");
            dias=parseInt(dias);
        }

        //CALCULOS

        switch(lugar)//PUNTO A, DENTRO DEL WHILE SE CUENTA CUANTAS VECES FUE ELEGIDO EL SITIO Y POR FUERA SE HACE EL IF, PARA ELEGIR AL QUE FUE ELEGIDO MAS VECES
        {
            case "villa gessel":
                cantidadGessel=cantidadGessel+1
            break;
            case "cordoba":
                cantidadCordoba=cantidadCordoba+1;
            break
            case "puerto madryn":
                cantidadPuerto=cantidadPuerto+1;
            break;
        }

        if(banderaParaMaxima==0 || diasDelMaximo<dias)//B
        {
            diasDelMaximo=dias;
            nombreDelMaximo=nombre;
            banderaParaMaxima=1;
        }

        switch(temporada)//C
        {
            case "verano":
                acumuladorDeDiasDeVerano+=dias;
                contadorDeViaje++;
                break;
        }

        respuesta=confirm("quiere continnuar?");
    }//FIN DEL WHILE


    //a)el lugar más elegido
    if(cantidadGessel>cantidadCordoba && cantidadGessel>cantidadPuerto)
    {
        ciudadMasVisitada="villa gessel";
    }
    else
    {
        if(cantidadCordoba>cantidadPuerto)// en este punto ya queda fuera gessel porque solo quedaria en el primer punto
        {
            ciudadMasVisitada="cordoba";
        }
        else
        {
            ciudadMasVisitada="puerto madryn";
        }
    }

    //C. EL PROMEDIO SIEMPRE SE SACA POR AFUERA PORQUE SI LO HACEMOS DENTRO DEL WHILE. SACARIA EN CADA VUELTA Y NO ESTARIA BIEN OPTIMIZADO
    promedioDeDiasDeVerano=acumuladorDeDiasDeVerano/contadorDeViaje;

    alert("el lugar mas elegido es " + ciudadMasVisitada);//PUNTO A
    alert("el nombre de la persona es " + nombreDelMaximo);//PUNTO B
    alert("el promedio por viajes en verano es " + promedioDeDiasDeVerano);//PUNTO C
}