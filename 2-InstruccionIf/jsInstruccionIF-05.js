function mostrar()
{
//COORRECTA
let edad;
let mensaje;
edad= document.getElementById("txtIdEdad").value;
edad = parseInt(edad)
if(edad < 13 || edad >17) //si la persona es menor a 13 O es mayor a 17
{
	mensaje="Usted no es adolsecente";
}
alert(mensaje);








}//FIN DE LA FUNCIÓN

/*
let edad;
let mensaje;
edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
if (edad > 17) //si edad es mayor a 17
	{
		mensaje="usted no es adolscente";
		}else if (edad <13) // si edad es menor a 13
		{
			mensaje="usted no es adolescente";
		}
////
let edad;
let mensaje;


if (!(edad > 13 && edad < 17)) //si la persona NO es menor a 13 O es mayor a 17
{
	mensaje = "no es adolscente";
}

alert(mensaje);

//si repetimos codigo, algo estamos haciendo mal
//  ! significia que es distinto. con es el ! se niega*/