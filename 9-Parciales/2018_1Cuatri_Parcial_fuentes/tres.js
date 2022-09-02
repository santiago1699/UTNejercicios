/*

3)Una distribuidora de bebidas llena 5 comiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.

*/

function mostrar()
{

    let nombreDeConductor;
    let tipoBebida;
    let cantidadLitros;


    let acumuladorDeLitrosDeAgua;
    let acumuladorDeLitrosGaseosa;
    let acumuladorDeLitrosCerveza;

    let promedioAgua;
    let promedioCerveza;
    let promedioGaseosa;

    let promedioTotal;

    let masCantidadDeLitros

    let contador;
    contador=0;
    acumuladorDeLitrosDeAgua=0;
    acumuladorDeLitrosGaseosa=0;
    acumuladorDeLitrosCerveza=0;
    cantidadGaseosa=0;
    cantidadAgua=0;
    cantidadCerveza=0;


    while(contador<5)
    {
        nombreDeConductor=prompt("cual es el nombre del chofer");

        tipoBebida=prompt("que tipo de bebida? agua, gaseosa, cerveza");
        tipoBebida=tipoBebida.toLowerCase();
        while(tipoBebida!="agua" && tipoBebida!="gaseosa"&& tipoBebida!="cerveza")
        {
            tipoBebida=prompt("que tipo de bebida? agua, gaseosa, cerveza");
            tipoBebida=tipoBebida.toLowerCase();
        }

        cantidadLitros=prompt("cual es la cantidad de litros que lleva?");
        cantidadLitros=parseInt(cantidadLitros);
        while(cantidadLitros<1)
        {
            cantidadLitros=prompt("cual es la cantidad de litros que lleva?");
            cantidadLitros=parseInt(cantidadLitros);
        }

        //calculos
        switch(tipoBebida)
        {
            case "agua":
                acumuladorDeLitrosDeAgua+=cantidadLitros;
            break;
            case "gaseosa":
                acumuladorDeLitrosGaseosa+=cantidadLitros;
            break;
            case "cerveza":
                acumuladorDeLitrosCerveza+=cantidadLitros;
            break;
        }
        contador++;
    }//fin delwhile
    promedioAgua=acumuladorDeLitrosDeAgua*100;
    promedioCerveza=acumuladorDeLitrosCerveza*200;
    promedioGaseosa=acumuladorDeLitrosGaseosa*150;
    promedioTotal=promedioCerveza+promedioGaseosa+promedioAgua;

    if(acumuladorDeLitrosDeAgua>acumuladorDeLitrosGaseosa&&acumuladorDeLitrosDeAgua>acumuladorDeLitrosCerveza)
    {
        masCantidadDeLitros="agua";
    }
    else
    {
        if(acumuladorDeLitrosGaseosa>acumuladorDeLitrosCerveza)
        {
            masCantidadDeLitros="gaseosa";
        }
        else
        {
            masCantidadDeLitros="cerveza";
        }
    }

    document.write("se transporto en mayor cantidad: " + masCantidadDeLitros + "<br>");
    document.write("la facturacion total es de: " + promedioTotal);
    ///lo que viene a continuacion es la cantidad de litros por tipo de bebida y su valor;
    document.write("se llevo de agua un total de litros de: " + acumuladorDeLitrosDeAgua + " y su precio es de " + promedioAgua + "<br>");
    document.write("se llevo una cantidad de litros de cerveza de: " + acumuladorDeLitrosCerveza + " y su valor es de: " + promedioCerveza + "<br>");
    document.write("se llevo una cantidad de litros de gaseosa de: " + acumuladorDeLitrosGaseosa + " y su valor es de " + promedioGaseosa);

}
