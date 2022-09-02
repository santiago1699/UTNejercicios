function mostrar()
{
let mesDelAno;
let mensaje;

mesDelAno = document.getElementById("txtIdMes").value;

switch(mesDelAno){
	case "Enero":
	mensaje= "que comiences bien el ano";
	break;
	case "Marzo":
		mensaje="a clases";
		break;
	case "Julio":
		mensaje="se vienen las vacaciones";
		break;
	case "Diciembre":
		mensaje="felices fiestas"
		break;
}
alert(mensaje);





}//FIN DE LA FUNCIÓN