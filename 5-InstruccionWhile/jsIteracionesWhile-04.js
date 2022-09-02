/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(numero);

	do{
		numero = prompt("Insertar un numero entre 0 y 9")

	}while(numero < 0 || numero > 9); // mientras numero sea menor a 0 o numero sea mayor a 9.Volver  DO

	document.getElementById("txtIdNumero").value = numero;

}//FIN DE LA FUNCIÓN