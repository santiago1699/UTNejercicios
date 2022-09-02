function mostrar()
{
  let personaUno;
  let personaDos;
  let edadUno;
  let edadDos;
  let sumaDeEdades;
  let sumaDePesoUno;
  let sumaDePesoDos;
  let sumaDePesos;
  let sumaDeTotales;

  personaUno = prompt ("cual es tu nombre persona 1? ");
  personaDos = prompt ("cual es tu nombre persona 2? ");

  edadUno = prompt ("cual es tu edad " + personaUno);
  edadDos = prompt ("cual es tu edad " + personaDos);

  sumaDePesoUno = prompt ("cual es tu peso " + personaUno);
  sumaDePesoDos = prompt ("cual es tu peso " + personaDos );

  edadUno = parseInt(edadUno);
  edadDos = parseInt(edadDos);
  sumaDePesoUno = parseInt(sumaDePesoUno);
  sumaDePesoDos = parseInt(sumaDePesoDos);

sumaDeEdades= edadUno + edadDos;
sumaDePesos= sumaDePesoUno + sumaDePesoDos;

sumaDeTotales = (` Ustedes se llaman ${personaUno} y ${personaDos}.
${personaUno} tiene ${edadUno} años y ${personaDos} tiene ${edadDos} años,
si sumamos sus edades son ${sumaDeEdades} años. Y si sumamos el peso de los dos es ${sumaDePesos}Kg.`);

alert (sumaDeTotales);
}

