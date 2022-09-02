/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	let edad;
	//entre 18 y 90
	let genero;
	// m o f
	let estadoCivil;
	//Soltero, casado, divorciado, viudo
	let sueldo;
	//no menor a 8000
	let numeroLegajo;
	//numero de legajo sin cero
	let nacionalidad;
	// A , E , N

	let contador;

	numeroLegajo=0;
	contador=0;

	while(contador<10)
	{
		edad=prompt("Cual es tu edad?");
		edad=parseInt(edad);
		while(edad<18 || edad >89)
		{
			edad=prompt("Error, ingrese una edad entre 18 y 90: ")
			edad=parseInt(edad);
		}

		genero=prompt("ingrese su genero: MASCULINO O FEMENINO" , "masculino o femenino");
		genero=genero.toLowerCase();
		while(genero != "masculino" && genero != "femenino")
		{
			genero=prompt("Por favor,ingrese un sexo real:");
			genero=genero.toLowerCase();
		}

		estadoCivil=prompt("Cual es tu estado civil? INGRESAR: 1-soltero 2-casado 3-divorciado 4-viudo");
		estadoCivil=parseInt(estadoCivil);
		while(estadoCivil<0 || estadoCivil>4)
		{
			estadoCivil=prompt("INGRESAR: 1-soltero 2-casado 3-divorciado 4-viudo");
			estadoCivil=parseInt(estadoCivil);
		}

		sueldo=prompt("Cual es su sueldo bruto? ")
		sueldo=parseInt(sueldo);
		while(sueldo < 7999)
		{
			sueldo=prompt("Ingrese su sueldo bruto");
			sueldo=parseInt(sueldo);
		}

		nacionalidad=prompt("Cual es su Nacionalidad? ingrese respectiva letra: SI es ARGENTINO,  si es EXTRANJERO,  si es NACIONALIZADO" );
		nacionalidad=nacionalidad.toLowerCase();
		while(nacionalidad!= "nacionalizado" && nacionalidad !="argentino" && nacionalidad !="extranjero")
		{
			nacionalidad=prompt("Por favor, ingrese su nacionalidad: SI es ARGENTINO,  si es EXTRANJERO,  si es NACIONALIZADO")
			nacionalidad=nacionalidad.toLowerCase();
		}

		numeroLegajo=prompt("Ingrese su numero de legajo: ");
		numeroLegajo=parseInt(numeroLegajo);
		while(numeroLegajo<1000 || numeroLegajo>9999)
		{
			numeroLegajo=prompt("Por favor ingrese el numero de legajo correcto: ");
			numeroLegajo=parseInt(numeroLegajo);
		}

		contador= contador +1;
		//while(estadoCivil!="Soltero" && estadoCivil!= "Casado" && )

	}




	switch(estadoCivil)
	{
		case 1:
			document.getElementById("txtIdEstadoCivil").value = "soltero";
		break;
		case 2:
			document.getElementById("txtIdEstadoCivil").value = "casado";
		break;
		case 3:
			document.getElementById("txtIdEstadoCivil").value = "divorciado";
		break;
		case 4:
			document.getElementById("txtIdEstadoCivil").value = "viudo";
		break;
	}


	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = genero;
	document.getElementById("txtIdSueldo").value = sueldo;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
 }

/*
 function ComenzarIngreso () 
{
 	//definicion de variables
	let edad;
	//entre 18 y 90
	let genero;
	// m o f
	let estadoCivil;
	//Soltero, casado, divorciado, viudo
	let sueldo;
	//no menor a 8000
	let numeroLegajo;
	//numero de legajo sin cero
	let nacionalidad;
	// A , E , N
	let tomaDeDatos;

	let contador;

	numeroLegajo=0;
	tomaDeDatos=false;
	contador=0;

	while(tomaDeDatos== false)
	{
		edad=prompt("Cual es tu edad?");
		edad=parseInt(edad);
		while(edad<18 || edad >89)
		{
			edad=prompt("Error, ingrese una edad entre 18 y 90: ")
			edad=parseInt(edad);
		}

		genero=prompt("ingrese su genero: MASCULINO O FEMENINO" , "masculino o femenino");
		genero=genero.toLowerCase();
		while(genero != "masculino" && genero != "femenino")
		{
			genero=prompt("Por favor,ingrese un sexo real:");
			genero=genero.toLowerCase();
		}

		estadoCivil=prompt("Cual es tu estado civil? INGRESAR: 1-soltero 2-casado 3-divorciado 4-viudo");
		estadoCivil=parseInt(estadoCivil);
		while(estadoCivil<0 || estadoCivil>4)
		{
			estadoCivil=prompt("INGRESAR: 1-soltero 2-casado 3-divorciado 4-viudo");
			estadoCivil=parseInt(estadoCivil);
		}

		sueldo=prompt("Cual es su sueldo bruto? ")
		sueldo=parseInt(sueldo);
		while(sueldo < 7999)
		{
			sueldo=prompt("Ingrese su sueldo bruto");
			sueldo=parseInt(sueldo);
		}

		nacionalidad=prompt("Cual es su Nacionalidad? ingrese respectiva letra: SI es ARGENTINO,  si es EXTRANJERO,  si es NACIONALIZADO" );
		nacionalidad=nacionalidad.toLowerCase();
		while(nacionalidad!= "nacionalizado" && nacionalidad !="argentino" && nacionalidad !="extranjero")
		{
			nacionalidad=prompt("Por favor, ingrese su nacionalidad: SI es ARGENTINO,  si es EXTRANJERO,  si es NACIONALIZADO")
			nacionalidad=nacionalidad.toLowerCase();
		}

		numeroLegajo=prompt("Ingrese su numero de legajo: ");
		numeroLegajo=parseInt(numeroLegajo);
		while(numeroLegajo<1000 || numeroLegajo>9999)
		{
			numeroLegajo=prompt("Por favor ingrese el numero de legajo correcto: ");
			numeroLegajo=parseInt(numeroLegajo);
		}

		tomaDeDatos=confirm("por favor ingrese presione continuar ");
		//while(estadoCivil!="Soltero" && estadoCivil!= "Casado" && )

	}



	switch(estadoCivil)
	{
		case 1:
			document.getElementById("txtIdEstadoCivil").value = "soltero";
		break;
		case 2:
			document.getElementById("txtIdEstadoCivil").value = "casado";
		break;
		case 3:
			document.getElementById("txtIdEstadoCivil").value = "divorciado";
		break;
		case 4:
			document.getElementById("txtIdEstadoCivil").value = "viudo";
		break;
	}


	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = genero;
	document.getElementById("txtIdSueldo").value = sueldo;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
 }*/