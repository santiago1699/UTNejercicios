/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let a;
	let b;
	let resultado;

	a = document.getElementById("txtIdNumeroDividendo").value;
	b = document.getElementById("txtIdNumeroDivisor").value;

	a = parseInt(a);
	b = parseInt(b);

	resultado = a % b;
	alert("el resultado es " + resultado);

}
/*
let A;
A = document.getElementById('txtIdNumeroDividendo').value;
A = parseInt (A);

let B;
B = document.getElementById('txtIdNumeroDivisor').value;
B = parseInt (B);

resultado= A % B;
alert("el resultado es " + resultado);
*/