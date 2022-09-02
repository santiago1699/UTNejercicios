
/*Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen el 1.7 mt y pesen mas de 85 kg.*/

	function mostrar()
{

	let nombre;
	let edad;
	let peso;
	let altura;
	let respuesta;

	let banderaDelJugadorMasJoven;
	let nombreDelJugadorMasJoven;
	let edadMasJoven;

	let banderaDelJugadorMasAlto;
	let jugadorMasAlto;
	let pesoDelJugadorMasAlto;

	let acumuladorDeAlturaDeEquipo;
	let promedioAltura;

	let acumuladorPesoDelEquipo;
	let promedioPesoDelEquipo;

	let contadorJugadoresDeAltura;


	banderaDelJugadorMasJoven=0;
	contadorJugadoresDeAltura=0;
	acumuladorPesoDelEquipo=0;
	acumuladorDeAlturaDeEquipo=0;
	banderaDelJugadorMasAlto=0;

	respuesta=0;

	while(respuesta<11)
	{
		//validaciones
		nombre=prompt("cual es el nombre");

		edad=prompt("decime la edad");
		edad=parseInt(edad);
		while(edad<1 || edad>100)
		{
			edad=prompt("ERRORdecime la edad");
			edad=parseInt(edad);
		}

		peso=prompt("cual es tu peso?")
		peso=parseInt(peso);
		while(peso<5)
		{
			peso=prompt("ERRRORcual es tu peso?ingrese a partir de 60")
			peso=parseInt(peso);
		}

		altura=prompt("cual es la altura");
		altura=parseInt(altura);
		while(altura<0 || altura>240)
		{
		altura=prompt("ERROR.cual es la altura");
		altura=parseInt(altura);
		}
		//calculos

		if(banderaDelJugadorMasJoven==0 || edad<edadMasJoven)
		{
			edadMasJoven=edad;
			banderaDelJugadorMasJoven=1;
			nombreDelJugadorMasJoven=nombre;
		}

		if(banderaDelJugadorMasAlto==0 || altura>jugadorMasAlto)
		{
			jugadorMasAlto=altura;
			pesoDelJugadorMasAlto=peso;
			banderaDelJugadorMasAlto=1;
		}

		acumuladorDeAlturaDeEquipo+=altura;
		acumuladorPesoDelEquipo+=peso;

		if(altura>170 && peso>85)
		{
			contadorJugadoresDeAltura++;
		}

		respuesta++;
	}//fin del while
	promedioAltura=acumuladorDeAlturaDeEquipo/respuesta;
	promedioPesoDelEquipo=acumuladorPesoDelEquipo/respuesta;

	alert("el nombre del jugador mas joven es: " + nombreDelJugadorMasJoven);
	alert("el peso del jugador mas alto es: " + pesoDelJugadorMasAlto);
	alert("el promedio de altura del equipo es: " + promedioAltura);
	alert("el promedio del peso del equipos es : " + promedioPesoDelEquipo);
	alert("la cantidad de jugadores que superan el 1.70 y pesan mas de 85kg es de: "+contadorJugadoresDeAltura);


/*Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen el 1.7 mt y pesen mas de 85 kg.*/
}//FIN DE LA FUNCIÓN