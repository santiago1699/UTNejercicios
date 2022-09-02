/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/

function mostrar()
{

	let nombre;
	let carrera;
	let estadorDeCarrera;
	let genero;
	let nota;

	let contadorDeAlumnos;
	contadorDeAlumnos=0;

	let cantidadMujeresProgramacion=0;

	let cantidadDeAlumnoBinario=0;

	let acumuladorDeNotasFinalizado=0;
	let contadorDeAlumnosFinalizado=0;
	let promedioAlumnoFinalizado;

	let notaMaxima;
	let bandera=0;
	let nombreDelMaximo;

	let programacionCantidad=0;
	let psicologiaCantidad=0;
	let graficoCantidad=0;
	let masCantidadDeAlumnos;

	let respuesta=true;

	while(respuesta==true)
	{
		nombre=prompt("cual es el nombre?")

		carrera=prompt("cual es el carrera. programacion , psicologia, diseno grafico")
		carrera=carrera.toLowerCase();
		while(carrera!="programacion" && carrera!="psicologia" &&carrera!="diseno grafico")
		{
			carrera=prompt("ERROR.cual es el carrera. programacion , psicologia, diseno grafico")
			carrera=carrera.toLowerCase();
		}

		estadorDeCarrera=prompt("cual es el estadorDeCarrera. curso abandono finalizado")
		estadorDeCarrera=estadorDeCarrera.toLowerCase();
		while(estadorDeCarrera!="curso" && estadorDeCarrera!="finalizado" &&estadorDeCarrera!="abandono")
		{
			estadorDeCarrera=prompt("ERROR.cual es el estadorDeCarrera. curso abandono finalizado")
			estadorDeCarrera=estadorDeCarrera.toLowerCase();
		}


		genero=prompt("cual es el gener? m o f o binario")
		genero=genero.toLocaleLowerCase();
		while(genero != "m" && genero != "f" && genero!="binario")
		{
			genero=prompt("cual es el gener? m o f")
			genero=genero.toLocaleLowerCase();
		}


		nota=prompt("cuantos nota son?");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("ERROR.cuantos nota son?");
			nota=parseInt(nota);
		}

		// calculos
		//a
		contadorDeAlumnos++;

		switch(carrera)
		{
			case "programacion":
				if(genero == "f")
				{
					cantidadMujeresProgramacion++;
				}
				programacionCantidad++;
			break;
			case "psicologia":
				psicologiaCantidad++;
			break;
			case "diseno grafico":
				graficoCantidad++;
			break
		}

		if(genero == "binario")
		{
			cantidadDeAlumnoBinario++;
		}

		if(estadorDeCarrera == "finalizado")
		{
			acumuladorDeNotasFinalizado+=nota;
			contadorDeAlumnosFinalizado++;
		}

		if(genero == "binario" && carrera == "psicologia")
		{
			if(bandera == 0 || notaMaxima<nota)
			{
				notaMaxima=nota;
				nombreDelMaximo=nombre;
				bandera=1;
			}
		}
		respuesta=confirm("DESEA CONTINUAR");
	}//fin del while

	if(programacionCantidad>psicologiaCantidad && programacionCantidad>graficoCantidad)
	{
		masCantidadDeAlumnos="programacion";
	}
	else
	{
		if(psicologiaCantidad>graficoCantidad)
		{
			masCantidadDeAlumnos="psicologia";
		}
		else
		{
			masCantidadDeAlumnos="diseno grafico"
		}
	}

	promedioAlumnoFinalizado=acumuladorDeNotasFinalizado/contadorDeAlumnosFinalizado;


	alert("la cantidad total de alumnos de cada carrera es " + contadorDeAlumnos);
	alert("la cantidad de mujeres en la carrera programacion es " + cantidadMujeresProgramacion);
	alert("la cantidad de alumnos no binarios es de " + cantidadDeAlumnoBinario);
	alert("el promedio de notas de alumnos finlaizantes es " + promedioAlumnoFinalizado);
	alert("la carrera con mas alumnos es " + masCantidadDeAlumnos);
}