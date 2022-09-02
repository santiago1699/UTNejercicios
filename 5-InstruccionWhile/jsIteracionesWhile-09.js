/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta=true;


	while(respuesta==true)
	{
		numeroIngresado=prompt("Ingrese algun numero: ")
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo=numeroIngresado;
			banderaDelPrimero="no es el maximo"
		}
		else(numeroIngresado<numeroMaximo)
			{
				numeroMinimo=numeroIngresado;
			}


		respuesta=confirm("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN