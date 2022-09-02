/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/


function mostrar()
{
    let color;
    let valor;
    //punto A
    let cantidadRojo;
    let cantidadVerde;
    let cantidadAmarillo;
    let colorMasElegido;
    //PUNTO B
    let cantidadDeAutosRojosMayorDeCincoMil;
    //PUNTO C
    let  cantidadDeAutosMenosDeCincoMil;
    //PUNTO D
    let promedioDeTodosLosVehiculos;
    let acumuladorDeValorDeAutos;
    let contadorDeVehiculos;
    //PUNTO E
    let banderaParaMaxima;
    let valorMasCaro;
    let colorDelMasCaro;

    //
    cantidadRojo=0;
    cantidadVerde=0;
    cantidadAmarillo=0;

    //punto B
    cantidadDeAutosRojosMayorDeCincoMil=0;
    //punto C
    cantidadDeAutosMenosDeCincoMil=0;
    //punto D
    acumuladorDeValorDeAutos=0;
    contadorDeVehiculos=0;
    //punto E
    banderaParaMaxima=0;

    let respuesta;

    respuesta=true;

    while(respuesta == true)
    {
        color=prompt("CUAL COLOR QUERES: rojo verde o amarillo");
        color=color.toLowerCase()
        while(color != "rojo" && color!= "verde" && color!= "amarillo")
        {
            color=prompt("error.CUAL COLOR QUERES: rojo verde o amarillo");
            color=color.toLowerCase()
        }

        valor=prompt("cual es el valor ENTRE 0 Y 10000 ?");
        valor=parseInt(valor);
        while(valor<0 || valor>10000)
        {
            valor=prompt("ERROR.cual es el valor ?");
            valor=parseInt(valor);
        }

        //CALCULOS

        //punto A
        if(color=="rojo")
        {
            cantidadRojo++;
        }

        //PUNTO B
        if(color == "rojo" && valor>5000)
        {
            cantidadDeAutosRojosMayorDeCincoMil++;
        }
        else
        {
            if(valor<5000)//PUNTO C
            {
                cantidadDeAutosMenosDeCincoMil++;
            }
        }


        //PUNTO D
        acumuladorDeValorDeAutos+=valor;
        contadorDeVehiculos++;

        //PUNTO E
        if(banderaParaMaxima==0 || valor>valorMasCaro)
        {
            valorMasCaro=valor;
            colorDelMasCaro=color;
        }

        respuesta=confirm("queres continuar?")
    }//FIN DEL WHILE


    //puntoD
    promedioDeTodosLosVehiculos=acumuladorDeValorDeAutos/contadorDeVehiculos;

    alert("la cantidad de rojos ingresados es: " + cantidadRojo);//punto A
    alert("la cantidad de rojos con precio mayor a 5mil son: " + cantidadDeAutosRojosMayorDeCincoMil); //punto B
    alert("cantidad de autos con precio menor a 5mil son: " + cantidadDeAutosMenosDeCincoMil);//punto C
    alert("el promedio de los vehiculos ingresados es de: " + contadorDeVehiculos);//punto D
    alert("el auto mas caro es "+valorMasCaro+" su color es"+colorDelMasCaro);//punto E



}
