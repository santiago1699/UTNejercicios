/*
Al presionar el  botón,
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{

let diametroMayor; //AB
let diametroMenor; //DC
let sumaDeDiametros; //AB + DC es para sacar el perimetro
let ladosMenores; //BD Y BC
let ladosMayores; //AD Y AC
let areaDeCometas; //Es cuanto papel se necesita
let barriletes;
let barriletesTotal;
let colaDeBarriletes;
let barriletesTotalArea;

barriletes = prompt("cuantos barriletes queres?  ")
diametroMayor = prompt("cual es el la medida del diametro mayor del barrilete? ");
diametroMenor = prompt("cual es la medidia del diametro menor del barrilete? ");

barriletes= parseInt(barriletes);
diametroMayor = parseInt(diametroMayor);
diametroMenor = parseInt(diametroMenor);

sumaDeDiametros = diametroMayor + diametroMenor; // perimetro
areaDeCometas = diametroMayor * (diametroMenor/2)/2; // cuanto se necesita de papel
barriletesTotal = (sumaDeDiametros * barriletes)/100;

colaDeBarriletes= (diametroMayor * diametroMenor)/10; //10% de la cola de barrilete
barriletesTotalArea = (areaDeCometas * barriletes + colaDeBarriletes)/100;



alert(`Para la cantidad de ${barriletes} barriletes de ${diametroMayor}cm de diametro mayor y ${diametroMenor}cm de diametro menor
se necesita ${sumaDeDiametros} cm de varas para cada uno. De papel se necesita ${areaDeCometas}cm^2 para cada uno.
En total se necesita de ${barriletesTotal}m de varas y ${barriletesTotalArea}m^2 de papel`);




}

