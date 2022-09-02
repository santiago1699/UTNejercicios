/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var edad;
	
	document.getElementById('TxtIdNombre').value=nombre;
	document.getElementById('txtIdEdad').value=edad;

	edad = parseInt(edad);
	
	
	alert(`Usted se llama ${nombre} y su edad es ${edad}.`);
}



/*
var nombre;
//nombre=prompt(' ingresa tu nombre');
document.getElementById('txtIdNombre').value=nombre;//lo q ingrese le pongo = para que sea para el var nombre

var edad;
//edad=prompt(' ingresa tu edad');
document.getElementById('txtIdEdad').value=edad;
//alert("Usted se llama " + nombre + " y tiene " + edad);
alert(`Usted se llama ${nombre} y su edad es ${edad}.`);*/