/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let ingreseSueldo;
	let aumento;
	let total;
	
	ingreseSueldo=document.getElementById("txtIdSueldo").value;
	
	ingreseSueldo=parseInt(ingreseSueldo);
	aumento=parseInt(aumento);
	
	aumento = ingreseSueldo / 10;
	total = ingreseSueldo + aumento;

	alert(total);

}
/*
let ingreseSueldo;
let aumento;
let total;

ingreseSueldo=prompt('ingrese su sueldo');

ingreseSueldo=parseInt(ingreseSueldo);
aumento=parseInt(aumento);

aumento = ingreseSueldo / 10;
total = ingreseSueldo + aumento;
total = (`el resultado es ${total}`);
alert(total);


/*
let ingreseResultado;
let resultado;
let aumento;
let precioFinal;

ingreseResultado=prompt('ingrese sueldo');
ingreseResultado=parseInt(ingreseResultado);

aumento= 10;
aumento=parseInt(aumento);

resultado = ingreseResultado + aumento;
precioFinal=(ingreseResultado*aumento/100) + resultado;

alert(precioFinal.toFixed(1));*/



/*
let ingreseSueldo;
let aumento;
let total;

ingreseSueldo=document.getElementById("txtIdSueldo").value;

ingreseSueldo=prompt(ingreseSueldo);

aumento = ingreseResultado/10;

total = ingreseSueldo + aumento;
alert(total);
*/

/*let primero;
let segundo;
let tercero;

primero=prompt('xxxx');
segundo=prompt('xxxx');
tercero=prompt('xxxx');

primero=parseInt(primero);
segundo=parseInt(segundo);
tercero=parseInt(tercero);

aumento= 21;
aumento=parseInt(aumento);

resultado = primero + segundo + tercero;
precioFinal=(resultado*aumento/100) + resultado;

alert(precioFinal.toFixed(1));


////////////////////////
let sueldo;
sueldo = document.getElementById('txtIdSueldo').value;
sueldo= parseInt (sueldo);
salario=(salario*0.10)+salario;
salario=sueldo*0.10*/
