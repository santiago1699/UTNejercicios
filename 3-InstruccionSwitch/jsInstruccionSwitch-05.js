function mostrar()
{
let hora;
let mensaje;

hora = document.getElementById("txtIdHora").value;
hora = parseInt(hora);

switch(hora)
{
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	case 12:
	case 13:
	case 14:
		mensaje = "manana";
		break;
}
alert(mensaje);



}//FIN DE LA FUNCIÓN

/*

=document.getElementById("txtIdEdad").value;
=parseInt()
*/