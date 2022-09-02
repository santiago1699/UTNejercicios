function mostrar()
{
let numero;
let promedio;
let sumaAcumulada;
let control;

sumaAcumulada=0;
numero = 0;
control = 0;

do{

	numero = prompt("ingrese numero");
	numero = parseInt(numero)
	sumaAcumulada = numero + sumaAcumulada;
	control=control + 1;
}while(control<5)

promedio=sumaAcumulada/control;

document.getElementById("txtIdSuma").value = sumaAcumulada;
document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN


/*
let numeroIngresado;
let variableDeControl;
let acumuladorDeNumero;
let promedio;

acumuladorDeNumero = 0;

for(variableDeControl=0; variableDeControl<5; variableDeControl++)
	{
		numeroIngresado = prompt("Ingresa tu numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		acumuladorDeNumero += numeroIngresado;
	}

	promedio = acumuladorDeNumero/variableDeControl;
	document.getElementById("txtIdSuma").value=acumuladorDeNumero;
	document.getElementById("txtIdPromedio").value=promedio;*/