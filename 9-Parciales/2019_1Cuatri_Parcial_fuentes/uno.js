
function mostrar()
{
    let ladoUno;
    let ladoDos;
    let ladoTres;


    ladoUno = prompt("Su medida del lado uno es: ");
    ladoDos = prompt("Su medida del lado dos es: ");
    ladoTres = prompt("Su medida del lado tres es: ");

    ladoUno = parseInt(ladoUno);
    ladoDos = parseInt(ladoDos);
    ladoTres = parseInt(ladoTres);

    perimetro = "El perimetro es: " + (ladoUno + ladoDos + ladoTres);
    alert(perimetro);

}
