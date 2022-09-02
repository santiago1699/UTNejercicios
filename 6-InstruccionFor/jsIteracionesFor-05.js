/*
Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,
la edad de cada uno y la cantidad de votos (no menor a cero)  que sacó en las elecciones.
Informar:
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.
*/



function mostrar()
{

let nombrePresidente;
let edadPresidentes;
let cantidadDeVotos;

let banderaDelMaximoYminimo;

let maximoVoto;
let minimoVoto;
let nombreCandidatoConMasVotos;
let nombreDeCandidatosConMenosVotos;
let acumuladorDeVotos;
let acumuladorDeEdades;
let contadorDePresidentesPorVuelta;
let promedioDeEdades;

let respuesta;

contadorDePresidentesPorVuelta=0;
banderaDelMaximoYminimo=0;
acumuladorDeEdades=0;
acumuladorDeVotos=0;
banderaDelMaximoYminimo=0;

respuesta=0;

	while(respuesta <5)
	{
		nombrePresidente=prompt("Cual es el nombre del presidente")
		nombrePresidente=nombrePresidente.toLowerCase()

		edadPresidentes=prompt("Cual es la edad del pres");
		edadPresidentes=parseInt(edadPresidentes);
		while(edadPresidentes<1)
		{
			edadPresidentes=prompt("ERROR.Cual es la edad del pres");
			edadPresidentes=parseInt(edadPresidentes);
		}

		cantidadDeVotos=prompt("cuantos votos saco?");
		cantidadDeVotos=parseInt(cantidadDeVotos);
		while(cantidadDeVotos<1)
		{
			cantidadDeVotos=prompt("ERROR.cuantos votos saco?");
			cantidadDeVotos=parseInt(cantidadDeVotos);
		}


		//CALCULOS

		/*
		Informar:
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.
		*/

		if(banderaDelMaximoYminimo==0 || cantidadDeVotos>maximoVoto)
		{
			maximoVoto=cantidadDeVotos;
			nombreCandidatoConMasVotos=nombrePresidente;
		}
		else
		{
			if(banderaDelMaximoYminimo==0 || cantidadDeVotos<minimoVoto)
			{
				minimoVoto=cantidadDeVotos;
				nombreDeCandidatosConMenosVotos=nombrePresidente;
				banderaDelMaximoYminimo=1;
			}
		}

		acumuladorDeEdades+=edadPresidentes;
		respuesta++;
		acumuladorDeVotos+=cantidadDeVotos;

	}//FIN DEL WHILE
	promedioDeEdades=acumuladorDeEdades/respuesta;

	document.write("el candidato con mas votos es: " + nombreCandidatoConMasVotos);
	document.write("<br>el candidato con menos votos es :" + nombreDeCandidatosConMenosVotos);
	document.write("<br>el promedio de edades de los candidatos es " + promedioDeEdades);
	document.write("<br>el total de votos emitidos es de: " + acumuladorDeVotos);

}//FIN DE LA FUNCIÓN


