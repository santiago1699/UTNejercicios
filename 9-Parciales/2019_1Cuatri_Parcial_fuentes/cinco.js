function mostrar()
{
    let dias;
    let precioDia;

    let metodoDePago;
    let debito;
    let mercadoPago;
    let otroMedio;


    let descuento;
    let recargo;
    let continente;
    let precioFinal;

    let mensaje;

    continente=document.getElementById("Marca").value;
    dias=prompt("cuantos dias pensas quedarte?");
    dias=parseInt(dias);
    precioDia= dias *100;



    switch(continente)
        {
            case "América":
            descuento = precioDia * 0.5;
            precioFinal = dias - descuento;
            pregunta=prompt("como piensa pagar? efectivo o debito?")
            switch(metodoDePago)
            {
                case "debito":
                descuento=precioFinal*0.10;
                debito = precioFinal- descuento;
                mensaje = "tu precio final es " + debito;
                break;
            }
            break;
        }
        alert(mensaje);

}
