function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad == 15) // si el valor de edad es 15 voy a entrar a las llaves
	{
		alert("nina bonita");
	}else
	{
		if(edad > 15)//edad es mayor a 15
			{
				alert("su edad es mayor a 15");
			}
			else
				{
					alert("su edad es menor a 15");
				}
	}
}//FIN DE LA FUNCIÓN

/*

== es comparar

>= no se recomienda porque tarda mucho ej edad >= 0. mejor hacer |edad > -1|

*/
