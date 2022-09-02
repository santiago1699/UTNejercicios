/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
	let largoDelTerreno;
    let anchoDelTerreno;

    largoDelTerreno=document.getElementById("txtIdLargo").value;
    anchoDelTerreno=document.getElementById("txtIdAncho").value;

    largoDelTerreno=parseInt(largoDelTerreno);
    anchoDelTerreno=parseInt(anchoDelTerreno);


    rectanguloDeAlambre = ((largoDelTerreno+anchoDelTerreno)*2)*3;
    alert(rectanguloDeAlambre);
}
function Circulo ()
{
	let radioDelTerreno;

    radioDelTerreno=document.getElementById("txtIdRadio").value;
    radioDelTerreno=parseInt(radioDelTerreno);

    circuloDeAlambre = ((radioDelTerreno)*2)*3

    alert(circuloDeAlambre);
}
function Materiales ()
{
	let largoDelTerreno;
    let anchoDelTerreno;

    largoDelTerreno=document.getElementById("txtIdLargo").value;
    anchoDelTerreno=document.getElementById("txtIdAncho").value;

    largoDelTerreno=parseInt(largoDelTerreno);
    anchoDelTerreno=parseInt(anchoDelTerreno);


    rectanguloDeAlambre = (largoDelTerreno+anchoDelTerreno)*2;
    rectanguloDeAlambre1 = (largoDelTerreno+anchoDelTerreno)*3;

    alert(rectanguloDeAlambre + " de cemento y " + rectanguloDeAlambre1 + " de cal ");
}
