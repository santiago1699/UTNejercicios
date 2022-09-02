function mostrar()
{
let mesDelAno;
let mensaje;

mesDelAno = document.getElementById("txtIdMes").value;

switch(mesDelAno){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Estamos en invierno";
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora el calor";
		break;
}
alert(mensaje);


}//FIN DE LA FUNCIÓN