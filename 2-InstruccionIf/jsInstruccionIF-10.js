function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	let numero;
	let mensaje;
	numero = Math.floor(Math.random()*10+1);

	if (numero >= 9)
	{
		mensaje=numero + "Excelente";
	}
		else
		{
			if(numero < 4)
			{
				mensaje = numero + "la proxima";
			}
			else
			{
				mensaje = numero + "aprobo";
			}
		}
		alert(mensaje);

}//FIN DE LA FUNCIÓN




/*	if(numero >= 9)
	{
		alert(numero + " Excelente")
	}else (numero < 4)
		alert(numero + " la proxima")
		if{
			alert(numero + " aprobo");
		}
		*/