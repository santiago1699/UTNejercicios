function mostrar()
{
    let notas;
    let genero;
    //contadores
    let contadorAlumnos;
    //promedios
    let promedio;
    let promedioNotaMasBaja;
    let cantidadVaronesDeNotaDeSeis;
    let generoPersonaDeNotaMasBaja;
    //inicio contadores;
    contadorAlumnos=0;
    acumuladorParapromedio=0;
    cantidadVaronesDeNotaDeSeis=0;

    while(contadorAlumnos<5)
    {
        notas=prompt("Cual es la calilficacion?");
        notas=parseInt(notas);
        while(notas<0 || notas>10)
        {
            notas=prompt("Indique bien la nota de entre 0 y 10");
            notas=parseInt(notas);
        }

        genero=prompt("Ingrese su genero: " , "M o F");
        genero=genero.toLowerCase();
        while(genero != "m" && genero != "f")
        {
            genero=prompt("Por favor, ingrese un genero correcto.")
            genero=genero.toLowerCase();
        }
        //CALCULOS
        acumuladorParapromedio+=notas;//PARA SACAR UN PROMEDIO GENERAL

        if(contadorAlumnos == 0)//PARA SACAR LA NOTA MAS BAJA Y EL GENERO DE ESA PERSONA
        {
            promedioNotaMasBaja=notas;
            generoPersonaDeNotaMasBaja=genero;
        }
        else
        {
            if(notas<promedioNotaMasBaja)
            promedioNotaMasBaja=notas;
            generoPersonaDeNotaMasBaja=genero;
        }

        if(notas >= 6 && genero == "m")//PARA SABER LA CANTIDAD DE VARONES CON UNA NOTA MAYOR O IGUAL A 6
        {
            cantidadVaronesDeNotaDeSeis=cantidadVaronesDeNotaDeSeis+1;
        }

        contadorAlumnos = contadorAlumnos + 1;//PARA QUE CUUANDO EL CONTADOR LLEGUE A 5 SE CORTE EL CICLO

    }//fin del while

    promedio=acumuladorParapromedio/contadorAlumnos;
    alert( "El promedio general de las notas es: " + promedio);
    alert( "La nota mas baja fue: " + promedioNotaMasBaja);
    alert( "El genero de la persona con la nota mas baja es: " + generoPersonaDeNotaMasBaja);
    alert( "La cantidad de varones con la nota igual o superior a 6 fueron: " + cantidadVaronesDeNotaDeSeis);


}
