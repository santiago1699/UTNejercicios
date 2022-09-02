function mostrar()
{
	let estacion;
	let destino;
	let aumentoDelVeinte;
	let aumentoDelDiez;
	let descuentoDelVeinte;
	let descuentoDelDiez;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	aumentoDelVeinte = 15000 + (15000 * 0.20);
	aumentoDelDiez = 15000 + (15000 * 0.10);
	descuentoDelVeinte = 15000 - (15000 * 0.20);
	descuentoDelDiez = 15000 - (15000 * 0.10);

	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
				mensaje = "El precio del viaje es $" + (aumentoDelVeinte);
			break;
			case "Cataratas":
			case "Cordoba":
				mensaje = "El precio del viaje es $" + (descuentoDelDiez);
			break;
			case "Mar del plata":
				mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
			break;
		}
		break;
			case "Verano":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
				break;
				case "Cataratas":
				case "Cordona":
					mensaje = "El precio del viaje es $" + (aumentoDelDiez);
				break;
				case "Mar del plata":
					mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
				break;
			}
			break;
			case "Otoño":
			case "Primavera":
				switch(destino)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						mensaje = "El precio del viaje es $" + (aumentoDelDiez);
					break;
					default:
						mensaje = "El precio del viaje es $15000";
					break;
				}
				break;
	}
	alert(mensaje);




}//FIN DE LA FUNCIÓN
/*

	switch(invierno)
	{
		case "Bariloche":
			mensaje = "El precio del viaje es $" + (aumentoDelVeinte);
		break;
		case "Cataratas":
		case "Cordoba":
			mensaje = "El precio del viaje es $" + (descuentoDelDiez);
		break;
		case "Mar del plata":
			mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
		break;
	}

switch(verano)
	{
		case "Bariloche":
			mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
		break;
		case "Cataratas":
		case "Cordona":
			mensaje = "El precio del viaje es $" + (aumentoDelDiez);
		break;
		case "Mar del plata":
			mensaje = "El precio del viaje es $" + (descuentoDelVeinte);
		break;
	}

switch(otoñoYPrimavera)
	{
		case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				mensaje = "El precio del viaje es $" + (aumentoDelDiez);
			break;
			default:
				mensaje = "El precio del viaje es $" + (precio);
			break;
	}

alert(mensaje);
















*/
/*
*/