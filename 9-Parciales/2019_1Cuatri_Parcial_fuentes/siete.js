function mostrar()
{
    let altura;
    let genero;
    let promedioDeAlturas;
    let sexoDePersonaMasBaja;
    let contadorMujerMasAlta;
    //contadores
    let contador;

    let alturaMasBaja;
    let acumuladorDeAltura;//SUMA DE TODAS LAS ALTURAS

    contador=0;
    acumuladorDeAltura=0;
    contadorMujerMasAlta=0;

    while(contador<5)
    {
        //INGRESO Y VALIDACION DE DATOS
        altura=prompt("Cual es tu altura?")
        altura=parseInt(altura);
        while(altura<0 || altura>250)
        {
            altura=prompt("Por favor: Ingrese la altura correcta.")
            altura=parseInt(altura);
        }

        genero=prompt("Cual es su genero?" , "m o f");
        genero=genero.toLowerCase();
        while(genero != "m" && genero != "f")
        {
            genero=prompt("Ingrese su genero de manera correcta: M o F");
            genero=genero.toLowerCase();
        }

        //CALCULOS
        if(contador == 0)
        {
            alturaMasBaja=altura;
            sexoDePersonaMasBaja=genero;
        }
        else
        {
            if(altura<alturaMasBaja)
            {
                alturaMasBaja=altura;
                sexoDePersonaMasBaja=genero;
            }
        }

        if(altura > 189 && genero == "f" )
        {
            contadorMujerMasAlta=contadorMujerMasAlta+1;
        }


        acumuladorDeAltura+=altura;

        contador = contador + 1;
    }//aca finaliza el while

    promedioDeAlturas=acumuladorDeAltura/contador;

    alert("la altura mas baja es : "  + alturaMasBaja + " y su genero " + sexoDePersonaMasBaja);
    alert("la cantidad de mujeres que superan los 190cm son: " + contadorMujerMasAlta);
    alert( "el promedio total de alturas es: " + promedioDeAlturas);

}
