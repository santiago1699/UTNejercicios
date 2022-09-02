/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
    let nota;
    let sexo;
    let respuesta;
    //PARA SACAR EL PROMEDIO DE NOTAS DE ALUMNOS
    let acumuladorDeNotas;
    let promedioNotaDeAlumnos;
    let contadorDeAlumnos;

    respuesta=true;

    acumuladorDeNotas=0;
    contadorDeAlumnos=0;

    while(respuesta == true)
    {
        nota=prompt("Ingrese su nota")
        nota=parseInt(nota);
        while(nota<0 || nota>10)
        {
            nota=prompt("ingrese un numero correcto");
            nota=parseInt(nota);
        }

        sexo=prompt("ingrese su genero");
        sexo=sexo.toLowerCase()
        while(sexo!= "f" && sexo!= "m")
        {
            sexo=prompt("ingrese bien su sexo");
            sexo=sexo.toLowerCase()
        }

        // Calculos
        //PARA CONTAR LA CANTIDAD DE ALUMNOS Y PARA SUMAR LAS NOTAS DENTRO DEL ACUMULADOR QUE VALE CERO
        acumuladorDeNotas=acumuladorDeNotas+nota;
        contadorDeAlumnos=contadorDeAlumnos+1;

        respuesta=confirm("Desea continuar?");
    }//FINAL DEL WHILE
    promedioNotaDeAlumnos=acumuladorDeNotas/contadorDeAlumnos;
    alert(promedioNotaDeAlumnos)
}
