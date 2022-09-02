function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 13 && edad <= 17 ) //si edad es mayor o igual a 13 y tmbn menor o igual a 17, sos adolscente
	{
		alert("Usted es adolescente");
	}


}//FIN DE LA FUNCIÓN