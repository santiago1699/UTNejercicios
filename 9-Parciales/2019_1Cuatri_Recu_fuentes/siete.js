/*
Para el nuevo videojuego "surviving the UTN admission test" se ha solicitado desarrollar el sistema de estadísticas que nos mostrará información sobre los jugadores registrados en el juego.

Para ello por cada jugador, debemos ingresar:
Nombre del jugador,
Tipo de personaje("guerrero", "arquero" o "mago"),
Fuerza de ataque ( 1 a 10 inclusive ),
Resistencia a ataques (1 a 5 inclusive),
Tiene bonificación (si o no). Si tiene bonificación, el ataque y la resistencia se duplican.

Se nos pide mostrar:

a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.

b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.

c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.

d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
y cual de todos los magos con bonificación.

e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.

*/

function mostrar()
{
    let nombreJugador;
    let tipo;
    let fuerzaDeAtaque;
    let resistenciaAtaques;
    let bonificación;

    let respuesta;
    respuesta=true;

    while(respuesta == true)
    {
        nombreJugador=prompt("nombre");
        tipo=prompt("cual es el tipo? guerrero, mago, arquero");
        while(nombreJugador!="guerrero" && nombreJugador!="mago" && )

        respuesta=confirm("Desea continuar");
    }//FIN DEL WHIILE
}
