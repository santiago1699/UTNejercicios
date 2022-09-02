/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let A;
	A = document.getElementById('txtIdNumeroUno').value;
	A = parseInt (A);
	
	let B;
	B = document.getElementById('txtIdNumeroDos').value;
	B = parseInt (B);
	
	igual = A + B;

	alert(igual);
	
}

function restar()
{
	let A;
	A = document.getElementById('txtIdNumeroUno').value;
	A = parseInt (A);
	
	let B;
	B = document.getElementById('txtIdNumeroDos').value;
	B = parseInt (B);
	
	alert(A - B);
}

function multiplicar()
{ 
	let A;
	A = document.getElementById('txtIdNumeroUno').value;
	A = parseInt (A);
	
	let B;
	B = document.getElementById('txtIdNumeroDos').value;
	B = parseInt (B);
	
	alert(A * B);
}

function dividir()
{
	let A;
	A = document.getElementById('txtIdNumeroUno').value;
	A = parseInt (A);
	
	let B;
	B = document.getElementById('txtIdNumeroDos').value;
	B = parseInt (B);
	
	alert(A / B);
}

