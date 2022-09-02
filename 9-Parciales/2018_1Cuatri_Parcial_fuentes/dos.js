/*

2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.

*/

function mostrar()
{
    let nombreDeJugador;
    let genero;
    let edad;
    let pokemonInicial;

    let acumuladorDeEdades;
    let promedioDeEdadDeJugadores;
    let contadorDeJugadores;

    let banderaGeneral;
    let edadMaxima;
    let nombreJugadorEdadMaxima;
    let pokemonElegidoDeEdadMaxima;

    let edadMinima;
    let nombreJugadorEdadMinima;
    let pokemonElegidoEdadMinima;

    let respuesta;
    respuesta=true;
    acumuladorDeEdades=0;
    contadorDeJugadores=0;
    banderaGeneral=0;

    while(respuesta==true)
    {
        nombreDeJugador=prompt("cual es su nombre jugador");

        genero=prompt("cual es su genero? m f x", "m f x ");
        genero=genero.toLowerCase();
        while(isNaN(genero)==false || genero!="m" && genero!="f" && genero!="x")
        {
            genero=prompt("cual es su genero? m f x", "m f x ")
            genero=genero.toLowerCase();
        }

        edad=prompt("cual es su edad? ");
        edad=parseInt(edad);
        while( isNaN(edad) || edad<3 || edad>99)
        {
            edad=prompt("ERROR.Ingrese edad valida entre 3 y 99")
            edad=parseInt(edad);
        }

        pokemonInicial=prompt("cual es su pokemon inicial? charmander, squirtle o bolbasaur")
        pokemonInicial=pokemonInicial.toLowerCase();
        while(isNaN(pokemonInicial)==false || pokemonInicial!="charmander" && pokemonInicial!="squirtle" && pokemonInicial!="bolbasaur")
        {
            pokemonInicial=prompt("cual es su pokemon inicial? charmander, squirtle o bolbasaur");
            pokemonInicial=pokemonInicial.toLowerCase();
        }

        //calculos
        acumuladorDeEdades+=edad;

        if(edad>edadMaxima || banderaGeneral==0)
        {
            edadMaxima=edad;
            nombreJugadorEdadMaxima=nombre;
            pokemonElegidoDeEdadMaxima=pokemonInicial;
        }
        if(edad<edadMinima || banderaGeneral==0)
        {
            edadMinima=edad;
            nombreJugadorEdadMinima=nombre;
            pokemonElegidoEdadMinima=pokemonInicial;
            banderaGeneral=1;
        }

        contadorDeJugadores++;
        respuesta=confirm("desea continuar?");
    }//fin del while

    promedioDeEdadDeJugadores=acumuladorDeEdades/contadorDeJugadores;

    document.write("el promedio de edad de los jugadores es: " + promedioDeEdadDeJugadores+"<br>");
    document.write("el nombre del jugador con mas edad es: " + nombreJugadorEdadMaxima + "el pokemon es: " + pokemonElegidoDeEdadMaxima+"<br>");
    document.write("el nombre del jugador mas joven es: " + nombreJugadorEdadMinima + "y su pokemon es: " + pokemonElegidoEdadMinima+"<br>");

}
