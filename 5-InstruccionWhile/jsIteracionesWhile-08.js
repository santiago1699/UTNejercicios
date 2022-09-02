/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let pregunta;
	let sumaDePositivos;
	let multiplicacionDeNegativos;
	let primerNegativo; //bandera

	pregunta="si";
	sumaDePositivos=0;
	multiplicacionDeNegativos=1;// + * - = -
	primerNegativo=false; // false = 0 false siempre sera cero

	while(pregunta == "si")
	{
		numero=prompt("INGRESE NUMERO");
		numero=parseInt(numero);

		if(numero>-1)
		{
			sumaDePositivos+=numero;
		}
		else
		{
			multiplicacionDeNegativos*=numero;
			primerNegativo=true;
		}

		pregunta=prompt("Desea seguir ingresando numero?", "si");
	}

	if(primerNegativo == false)
	{
		multiplicacionDeNegativos =  0;
	}


	document.getElementById("txtIdSuma").value=sumaDePositivos;
	document.getElementById("txtIdProducto").value=multiplicacionDeNegativos;
































}//FIN DE LA FUNCIÓN

/*
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let acumulado;


	acumulado=0;
	numeroIngresado=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	respuesta=true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
			sumaPositivos = numeroIngresado + acumulado;
			multiplicacionNegativos = (acumulado * numeroIngresado)* (-1);
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

	do{
		
	}while(respuesta == true)
*/

/*
let numero;
let numeroNegativo;
let numeroPositivo;
let pregunta;


numeroPositivo=0;
numeroNegativo=1;
pregunta=true;

numero = prompt("Inserta el numero").value;
numero = parseInt(numero);

do{
	pregunta=confirm("Desea continuar?");

	if(numero > 0)
	{
		numeroPositivo = numero + numeroPositivo;
	}
	else
	{
		
		numeroNegativo = numero * numeroNegativo;
	}
}while(pregunta)

document.getElementById("txtIdSuma").value = numeroPositivo;
document.getElementById("txtIdProducto").value = numeroNegativo;*/



//RESPUESTA CORRECTA ES LA QUE ESTA A CONTINUNACION:
/*
	while(pregunta == true)
		{
			numeroQueSeIngresa=prompt("ingrese otro numero");
			numeroQueSeIngresa=parseInt(numeroQueSeIngresa);
			if(numeroQueSeIngresa>0)
				{
					contadorDePositivos=contadorDePositivos+numeroQueSeIngresa;
					pregunta=confirm("Queres continuar?");
				}
				else
				{
					contadorDeNegativos=contadorDeNegativos*numeroQueSeIngresa;
					pregunta=confirm("desea continuar?");
				}
		}
		document.getElementById("txtIdSuma").value = contadorDePositivos;
		document.getElementById("txtIdProducto").value = contadorDeNegativos;*/



		////CORRECTO
		/*
let pregunta;
let numeroQueSeIngresa;
let contadorDePositivos;
let contadorDeNegativos;

contadorDePositivos=0;
contadorDeNegativos=1;
pregunta=true;

		do{
			numeroQueSeIngresa=prompt("ingrese numero: ")
			numeroQueSeIngresa=parseInt(numeroQueSeIngresa);
				if(numeroQueSeIngresa>0)
					{
						contadorDePositivos = contadorDePositivos + numeroQueSeIngresa;
						pregunta=confirm("Queres continuar?");
					}
					else
					{
						contadorDeNegativos=contadorDeNegativos*numeroQueSeIngresa;
						pregunta=confirm("Desea continuar?");
					}
		}while(pregunta == true)
		document.getElementById("txtIdSuma").value = contadorDePositivos;
		document.getElementById("txtIdProducto").value = contadorDeNegativos;*/