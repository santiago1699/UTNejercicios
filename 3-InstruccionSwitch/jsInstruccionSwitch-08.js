function mostrar()
{
let temperatura;
let mensaje;

temperatura = document.getElementById("txtIdDestino").value;

switch(temperatura)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En este sitio hace frio. ";
		break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "En este sitio hace calor. ";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN