/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dia;
	dia=prompt(' ingresa que dia es hoy');
	document.getElementById('txtIdNombre').value=dia;
	//alert(dia);
}

