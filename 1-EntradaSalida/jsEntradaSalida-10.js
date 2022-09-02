/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
let importe;
let descuento;
let resultado;
let totales;

importe= prompt("cuanto es el importe");

importe = parseInt(importe);

descuento = importe / 4;

resultado = importe - descuento;

totales= (`el resultado final con el descuento es ${resultado}`);

alert(totales);


}
/*
	let importe;
	let descuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	resultado = document.getElementById("txtIdResultado").value;

	importe = parseInt(importe);

	descuento = importe / 4;

	resultado = importe - descuento;

*/

////////////////////
/*let sueldo;
	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuento =25;
	descuento = parseInt(descuento);
let resultado;
let descuento;
	document.getElementById("txtIdResultado").value=resultado;
	resultado = sueldo - (sueldo*descuento/100);

alert(resultado);*/


