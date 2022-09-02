function mostrar()
{
let edad;
edad = document.getElementById("txtIdEdad").value;

if(edad >= 18)//si edad es mayor o igual a 18
{
	alert("sos mayor de edad.")
}else
{
	if(edad <= 18)//si edad es menor o igual a 18
	{
		alert("sos meenor de edad")
	}
}

}//FIN DE LA FUNCIÓN