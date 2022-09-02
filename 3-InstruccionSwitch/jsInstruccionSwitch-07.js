function mostrar()
{
	let puntoCardinal;
	let mensaje;

	puntoCardinal=document.getElementById("txtIdDestino").value;
	switch(puntoCardinal)
	{
		case "Bariloche":
			mensaje="Se encuentra en el Oeste";
		break;
		case "Cataratas":
			mensaje = "Se encuentra en el Norte";
		break;
		case "Mar del plata":
			mensaje = "Se encuentra en el Este";
		break;
		case "Ushuaia":
			mensaje = "Se encuentra en el sur";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN