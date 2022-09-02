/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
	let primero;
    let segundo;
    let tercero;

    primero=document.getElementById("txtIdPrecioUno").value;
    segundo=document.getElementById("txtIdPrecioDos").value;
    tercero=document.getElementById("txtIdPrecioTres").value;

    primero=parseInt(primero);
    segundo=parseInt(segundo);
    tercero=parseInt(tercero);

    sumar = primero + segundo + tercero;
    alert(sumar);
}
function Promedio ()
{
    let primero;
    let segundo;
    let tercero;
    let Promedio;

    primero=document.getElementById("txtIdPrecioUno").value;
    segundo=document.getElementById("txtIdPrecioDos").value;
    tercero=document.getElementById("txtIdPrecioTres").value;

    primero=parseInt(primero);
    segundo=parseInt(segundo);
    tercero=parseInt(tercero);

    Promedio = (primero + segundo + tercero ) / 3;
    alert(Promedio);
}
function PrecioFinal ()
{
    let primero;
    let segundo;
    let tercero;

    primero=document.getElementById("txtIdPrecioUno").value;
    segundo=document.getElementById("txtIdPrecioDos").value;
    tercero=document.getElementById("txtIdPrecioTres").value;

    primero=parseInt(primero);
    segundo=parseInt(segundo);
    tercero=parseInt(tercero);

    aumento= 21;
    aumento=parseInt(aumento);

    resultado = primero + segundo + tercero;
    precioFinal=(resultado*aumento/100) + resultado;

    alert(precioFinal.toFixed(1));  //el toFixed corta los numeros despues del punto, no redondea para abajo. el math.floor si redondea para abajo
}