function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	/*if(edad < 18 && estado != "Soltero")//si edad es menor a 18 y el estado no es igual a soltero, no hace absolutamente nada, este if es innecesario
	{

	}else */if (edad > 18 && estado == "Soltero") // si edad es mayor a 18 y el estado igual a soltero entonces es :
	{
		alert("es soltero y no es menor")
	}


}//FIN DE LA FUNCIÓN