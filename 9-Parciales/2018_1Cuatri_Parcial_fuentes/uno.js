/*

1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/

function mostrar()
{

    let nombre;
    let numeroEspera;
    let dni;
    let factura;

    let acumuladorDeFactura;
    let promedioPorPersona;

    let cantidadPersonaMasDeOcho;
    let cantidadDePersonasMenosDeOcho;

    let banderaDeLaMayorFactura;
    let mayorFactura;
    let nombreDeMayorFactura;
    let numeroDeEsperaMayor;

    let contador;
    contador=0;
    acumuladorDeFactura=0;
    cantidadPersonaMasDeOcho=0;
    cantidadDePersonasMenosDeOcho=0;
    banderaDeLaMayorFactura=0;

    while(contador<5)
    {
        nombre=prompt("cual es su nombre");

        numeroEspera=prompt("cual es su numero de espera? el numero es de entre 0 y 99")
        numeroEspera=parseInt(numeroEspera);
        while( isNaN(numeroEspera) || numeroEspera<0 || numeroEspera>99)
        {
            numeroEspera=prompt("ERROR.cual es su numero de espera? el numero es de entre 0 y 99")
            numeroEspera=parseInt(numeroEspera);
        }

        dni=prompt("cual es su numero DNI");
        dni=parseInt(dni);
        while(isNaN(dni) || dni<10000000 || dni >99999999)
        {
            dni=prompt("ERROR.cual es su numero DNI");
            dni=parseInt(dni);
        }

        factura=prompt("cual es el monto de la factura?");
        factura=parseInt(factura);
        while(isNaN(factura) || factura<0)
        {
            factura=prompt("cual es el monto de la factura?");
            factura=parseInt(factura);
        }

        acumuladorDeFactura+=factura;

        if(dni > 7999999)
        {
            cantidadPersonaMasDeOcho++;
        }else
        {
            cantidadDePersonasMenosDeOcho++;
        }

        if(factura>mayorFactura ||banderaDeLaMayorFactura==0)
        {
            mayorFactura=factura;
            nombreDeMayorFactura=nombre;
            numeroDeEsperaMayor=numeroEspera;
            banderaDeLaMayorFactura=1;
        }

        contador++;
    }//fin del while
    promedioPorPersona=acumuladorDeFactura/contador;

    document.write("el promedio gastado por persona es: " + promedioPorPersona + "<br>");
    document.write("la cantidad de personas con el numero menor a ocho millones es de: " + cantidadDePersonasMenosDeOcho + " y la cantidad de personas con el numero mayor es de: " + cantidadPersonaMasDeOcho);
    document.write("el nombre de la persona que mas gasto es: " + nombreDeMayorFactura+ " y su numero es " + numeroDeEsperaMayor);



}
