function mostrar()
{
let mesDelAno;
let mensaje;

mesDelAno = document.getElementById("txtIdMes").value;

switch (mesDelAno){
	case "Febrero":
		mensaje = " Este mes no tiene mas de 29 dias.";
	default:
		mensaje = " Este mes tiene 30 dias o mas.";
		break;

}
alert(mensaje);


}//FIN DE LA FUNCIÓN