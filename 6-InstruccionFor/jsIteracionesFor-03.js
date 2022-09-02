/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/


function mostrar()
{
	let tipo;
	let raza;
	let edad;
	let nombre;
	let bandera=0;
	let edadDelMasViejo;
	let nombreDelMasViejo;

	let nombreDelMasViejoGato;
	let nombreDelMasViejoPerro;
	let nombreDelMasViejoOtro;
	let acumuladorDeGatos=0;
	let cantidadTurco=0;
	let cantidadMestizo=0;
	let cantidadSiames=0;
	let promedioGatos;
	let masCantidadDeGato;
	let sumaDeGatos=0;

	let respuesta=0;

	while(respuesta<10)
	{
		tipo=prompt("cual es el tipo. gato perro otros", "gato perro otros")
		tipo=tipo.toLowerCase();
		while(tipo!="gato" && tipo!="perro" &&tipo!="otros")
		{
			tipo=prompt("ERROR.cual es el tipo. gato perro otros")
			tipo=tipo.toLowerCase();
		}

		switch(tipo)
		{
			case "perro":
				raza=prompt("cual es el raza. si es perro (pastor, toy, callejero)")
				raza=raza.toLowerCase();
				while(raza!="toy" && raza!="pastor" &&raza!="callejero" )
				{
					raza=prompt("ERROR.cual es el raza.si es perro (pastor, toy, callejero) ")
					raza=raza.toLowerCase();
				}
			break;

			case "gato":
				raza=prompt("cual es el raza. si es gato (siames, turco, mestizo)")
				raza=raza.toLowerCase();
				while(raza!="siames" && raza!="mestizo" && raza!= "turco")
				{
					raza=prompt("ERROR.cual es el raza.si es gato (siames, turco, mestizo)")
					raza=raza.toLowerCase();
				}
				switch(raza)
				{
					case "siames":
						cantidadSiames++;
					break;
					case "turco":
						cantidadTurco++;
					break;
					case "mestizo":
						cantidadMestizo++;
					break;
				}
			break;

			default:
				raza=prompt("Ingrese texto:")
			break;
		}

		edad=prompt("cuantos es la edad del animal entre 1 a 100?");
		edad=parseInt(edad);
		while(edad<1 || edad>100)
		{
			edad=prompt("ERROR.cuantos es la edad del animal entre 1 a 100?");
			edad=parseInt(edad);
		}

		nombre=prompt("cual es el nombre")
		nombre=nombre.toLowerCase();
		if(!isNaN(nombre))
		{
			nombre=prompt("ERROR.cual es el nombre")
			nombre=nombre.toLowerCase();
		}
			//CALCULOS

		switch(tipo)
		{
			case "gato":
			if(bandera == 0 || edadDelMasViejo>edad)
			{
				edadDelMasViejo=edad;
				nombreDelMasViejoGato=nombre;
				bandera=1;
			}
			acumuladorDeGatos++;
			break;
			case "perro":
				if(bandera==0 || edadDelMasViejo>edad)
				{
					edadDelMasViejo=edad;
					nombreDelMasViejoPerro=nombre;
					bandera=1;
				}
			break;
			case "otros":
				if(bandera == 0 || edadDelMasViejo>edad)
				{
					edadDelMasViejo=edad;
					nombreDelMasViejoOtro=nombre;
					bandera=1;
				}
		}


		sumaDeGatos= cantidadMestizo+cantidadTurco+cantidadSiames;
		respuesta++;
	}// fin del while
	promedioGatos=sumaDeGatos/acumuladorDeGatos;

	if(cantidadSiames>cantidadTurco&& cantidadSiames>cantidadMestizo)
	{
		masCantidadDeGato="siames";
	}
	else
	{
		if(cantidadTurco>cantidadMestizo)
		{
			masCantidadDeGato="turco";
		}
		else
		{
			masCantidadDeGato="mestizo";
		}
	}

	alert(" el nombre del mas viejo de cada tipo es " + nombreDelMasViejoGato+ " de perro es  " + nombreDelMasViejoPerro + " de otro es "+ nombreDelMasViejoOtro);
	alert("la raza de gatos con mas con mas cantidad es "+masCantidadDeGato + " y el promedio es " + promedioGatos );
}//FIN DE LA FUNCIÓN