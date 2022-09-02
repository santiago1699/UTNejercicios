function mostrar()
{
let edad;
edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);

	if (edad >= 18) //si edad es mayor o igual a 18
		{
			alert("usted es mayor de edad")
		}
			else if (edad <13)// si edad es menor a 13
				{
					alert("usted es un nino")
				}
					else //si no es ninguno de los anteriores es:
						{
							alert("usted es adolescente")
						}
}//FIN DE LA FUNCIÓN