/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
TODO:
function mostrar()
{
let numeroIngresado;
let contadorDeVecesPuestosNumeros;
let sumaDeNumero;
let pregunta;

sumaDeNumero=0;
contadorDeVecesPuestosNumeros=0;


pregunta=true

do{
	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);
	sumaDeNumero = numeroIngresado + sumaDeNumero;
	contadorDeVecesPuestosNumeros= contadorDeVecesPuestosNumeros +1;
	pregunta=confirm("seguir ingresando numero?");

}while(pregunta==true)

document.getElementById("txtIdSuma").value=sumaDeNumero;
document.getElementById("txtIdPromedio").value=contadorDeVecesPuestosNumeros;

}//FIN DE LA FUNCIÓN

/*
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
	*/

		/*
	let contador;
	let respuesta;
	let numeroIngresado;
	let promedio;
	let acumulador;

	numeroIngresado = 0;
	contador=0;
	acumulador=0;
	respuesta=true;
	
		while(respuesta==true)
		{
			
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
			/*while(isNaN(numeroIngresado)==true)  //isNan es para que solo se pueda ingresar numeros
				{
					numeroIngresado=prompt("Error. Ingrese un numero");
					numeroIngresado=parseInt(numeroIngresado);
				
				acumulador = acumulador + numeroIngresado;
				contador = contador + 1;
				respuesta=confirm("Desea continuar?");
		}
		promedio=acumulador/contador;

		document.getElementById("txtIdSuma").value=acumulador;
		document.getElementById("txtIdPromedio").value=promedio;*/