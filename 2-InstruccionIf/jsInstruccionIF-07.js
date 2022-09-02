function mostrar()
{
let numero;
let mensaje;
let impar;

numero = document.getElementById("txtIdEdad").value;
numero = parseInt(numero);



	if(numero < 13) //si numero es menor a 13
		{
			mensaje= "feliz dia";
		}
		else
		{
			if(numero == 17)//si numero es igual igual a 17
			{
				mensaje = "último año "
			}
			if(numero < 17)//si numero es mayor a 17
			{
				mensaje = "usted es adolescente";
			}
			if (numero > 17 && numero < 59)//si numero es mayor a 17 y numero es menor a 59
			{
				mensaje = "tenes edad de laburar";
			}
			else//entonces si no es ninguno de esos es
			{
				mensaje = "A jubilarse";
			}
		}

				if (numero == 33)
				{
					mensaje = "tenes edad de laburar como cristo";
				}
				else
				{
					if(numero == 88)
					{
						mensaje = "lindo numero";
					}
				}

					if(numero % 2)
					{
						impar = "el numero es impar";
					}
					else
					{
						impar = " el numero es par";
					}


alert(mensaje);
alert(impar);
}


/*			if (numero < 60 && numero > 17)
			{
				mensaje = "tenes edad de laburar";
			}
			else
			{
				mensaje = "A jubilarse";
			}
			*/

//FIN DE LA FUNCIÓN

/*
	if (numero > 65)
	{
		mensaje = "a jubilarse";
	}
	else{
		if(numero > 17)
		{
			mensaje = "aa"
		}
		else(numero == 33)
		{
			mensaje = "cc";
		}
	}

*/ 

/*
let edad;
let estado;

edad = document.getElementById("txtIdEdad").value;
estado = document.getElementById("estadoCivil").value;

edad = parseInt(edad);

if(edad < 18 && estado != "Soltero") //si edad es menor a 18 y el estado civil no es igual a soltero es:
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
*/

/*

*/