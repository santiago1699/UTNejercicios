/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//defincion
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let nombre;
	let apellido;
	let edad;//-> entre 18 y 65
	let altura;//un 1.50 y 2.10 metros
	let division;// division g
	let respuesta=true;
	let personaMasAlta;//yo quiero guardar el NOMBRE de la persona mas alta
	let personaMasBaja;
	let alturaMaxima;
	let alturaMinima;
	let flagAltura;
	let contadorMasDe180=0;

	flagAltura=true;//esto me marca el primer ingreso

	while(respuesta){
		nombre=prompt("Ingresa tu nombre");
		apellido=prompt("Ingresa tu apellido");
		edad=prompt("Ingresa tu edad");
		edad=parseInt(edad);
		while(isNaN(edad) || !(edad>18 && edad<65)){
			edad=prompt("ERROR. Reingresa tu edad");
			edad=parseInt(edad);
		}
		altura=prompt("Ingresa tu altura en centimetros");
		altura=parseInt(altura);
		while(isNaN(altura) || !(altura>150&&altura<210)){
			altura=prompt("ERROR. Reingresa tu altura en centimetros");
			altura=parseInt(altura);
		}
		division=prompt("Ingresa tu division");
		while(isNaN(division)==false || division!='g'&&division!='x'){
			division=prompt("ERROR. Reingresa tu division");
		}
			if(flagAltura==true){
				personaMasAlta=nombre;
				alturaMaxima=altura;
				alturaMinima=altura;
				flagAltura=false;
			}
			else{
				if(alturaMaxima<altura){
					alturaMaxima=altura;
					personaMasAlta=nombre;
				}
				if(alturaMinima>altura){
					alturaMinima=altura;
					personaMasBaja=nombre;
				}
			}
		if(altura>180){
			contadorMasDe180++;
		}

		alert("La persona mas alta es: "+personaMasAlta+" y su altura es: "+alturaMaxima);
		respuesta=confirm("Desea continuar?");
	}
}

}//FIN DE LA FUNCIÓN

/*while:es un tipo de estructura donde se va a repetir cierto bloque código y voy  a poder controlar cuantas veces que quiero
que se repita.*/
/*
let numero;
numero = 0;

while(numero<10)
	{
		numero ++;//metodo de escape para que no se repita infinitamente el cero
		console.log(numero);// si pongo console.log en la linea donde esta ubicado numero, me mostrara un numero menos. En este caso el 1
	}



	let numero;
	numero = 1;

	do{
		console.log(numero);
		numero++;
	}while(numero<=10);*/


	for(iteraciones=0 /*primeraParte*/;iteraciones<10/*2daparte*/;iteraciones++/*3erapaerte*/)
	{
		edadIngresada=prompt("ingrese edad");
		//if(edadIngresada>0 && edadIngresada<80)//mal
		//while(edadIngresada>0 && edadIngresada<80)//mal
		//while(!(edadIngresada>0 && edadIngresada<80))//mal
		//while(edadIngresada<0&& edadIngresada>80)//mal no entra nunca
		while(edadIngresada<0 || edadIngresada>100)//2da logica
		{
			edadIngresada=prompt("error, ingrese su edad")
		}
		nombreIngresado=prompt("inngrese su nombre");
		
		alert("su edad es " + edadIngresada+ "su nombre es " +nombreIngresado)
	}


	//CORRECTO
/*
	let edadIngresada;
	let nombreIngresado;
	let contadorDeVueltas;
	let iteraciones;
	let sumaDeEdades;
	let promedioDeEdades;


	//inicilizacion
	contadorDeVueltas=0;//1ra parte de la iteracion
	sumaDeEdades=0;



	while(contadorDeVueltas<10)//2da parte de la iteracion: la logica
	{
		edadIngresada=prompt("ingrese edad");
		edadIngresada=parseInt(edadIngresada);
		//if(edadIngresada>0 && edadIngresada<80)//mal
		//while(edadIngresada>0 && edadIngresada<80)//mal
		//while(!(edadIngresada>0 && edadIngresada<80))//mal
		//while(edadIngresada<0&& edadIngresada>80)//mal no entra nunca
		while(edadIngresada<0 || edadIngresada>80)//2da logica
		{
			edadIngresada=prompt("error, ingrese su edad")
			edadIngresada=parseInt(edadIngresada);
		}
		nombreIngresado=prompt("inngrese su nombre");
		sumaDeEdades=sumaDeEdades+edadIngresada;
		alert("su edad es " + edadIngresada+ "su nombre es " +nombreIngresado)
		contadorDeVueltas++;//3era parte, modificiacion de la variable de control
	}





	promedioDeEdades=sumaDeEdades/edadIngresada;*/



