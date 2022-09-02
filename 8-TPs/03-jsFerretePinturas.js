/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	let temperatura;
    let farenheitCelsius

    temperatura=document.getElementById("txtIdTemperatura").value;
    temperatura=parseInt(temperatura);

    farenheitCelsius =  ((temperatura - 32) / 1.8);
    alert(farenheitCelsius.toFixed(1));
}

function CentigradosFahrenheit ()
{
    let temperatura;
    let celsiusFarenheit


    temperatura=document.getElementById("txtIdTemperatura").value;

    temperatura=parseInt(temperatura);

    celsiusFarenheit = ((temperatura * 9/5) + 32) ;
    alert(celsiusFarenheit);
}
