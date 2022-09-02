/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/

function CalcularPrecio ()
{
    let cantiadadDeLamparas;
    let precioDeLamparas;
    let marcaLamparas;
    let precioBruto;
    let precioFinal;


    precioDeLamparas = 35;
    cantiadadDeLamparas = document.getElementById("txtIdCantidad").value;
    marcaLamparas = document.getElementById("Marca").value;

    cantiadadDeLamparas = parseInt(cantiadadDeLamparas);

    precioBruto = cantiadadDeLamparas * precioDeLamparas;

        switch(marcaLamparas)
        {
            case "ArgentinaLuz":
            switch(cantiadadDeLamparas)
            {
                case 6:
                    precioFinal = precioBruto - (precioBruto*0.50);
                    break;
                case 5:
                    precioFinal = precioBruto - (precioBruto*0.40);
                break;
                case 4:
                    precioFinal = precioBruto - (precioBruto*0.25);
                break;
                case 3:
                    precioFinal = precioBruto - (precioBruto*0.15);
                default:
                    precioFinal=precioBruto;
                break;
            }
            break;
            case "FelipeLamparas":
                switch(cantiadadDeLamparas)
                {
                    case 5:
                        precioFinal = precioBruto - (precioBruto*0.40);
                    break;
                    case 4:
                        precioFinal = precioBruto - (precioBruto*0.20);
                    break;
                    case 3:
                        precioFinal = precioBruto - (precioBruto*0.10);
                    break;
                    default:
                        precioFinal=precioBruto ;
                    break;
                }
                break;
                case "JeLuz":
                case "HazIlluminacion":
                case "Osram":
                    switch(cantiadadDeLamparas)
                    {
                        case 5:
                            precioFinal = precioBruto - (precioBruto*0.40);
                        break;
                        case 4:
                            precioFinal = precioBruto - (precioBruto*0.20);
                        break;
                        case 3:
                            precioFinal = precioBruto - (precioBruto*0.05);
                        break;
                    }
                break;
        }

        
    document.getElementById("txtIdprecioDescuento").value=precioFinal;

}


/*RESULTADO CORRECTO
    let precioDeLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let descuento;
    let precioFinal;

    precioDeLamparas = 35; //sabemos que el precio de la lampara es 35
    cantidadLamparas=document.getElementById("txtIdCantidad").value; //tomamos el ID de Cantidad
    cantidadLamparas=parseInt(cantidadLamparas); //esto es para poder agregar numero
    marcaLamparas=document.getElementById("Marca").value; //tomamos el ID de Marca
    precioBruto=cantidadLamparas*precioDeLamparas;
    //descuento=1;
    //precioFinal=precioBruto*descuento;

/*PUNTO A*//*if(cantidadLamparas >= 6)//si la cantidad de lamparas es mayor o igual a 6
{
    precioFinal=precioBruto-(precioBruto*0.5); //si es igual o mayor a 6 se le resta el 50%
}
else
{
/*PUNTO B*//*if(cantidadLamparas==5) // si la cantidad de lamparas es igual a 5
    {
        if(marcaLamparas == "ArgentinaLuz") // y si es 5 lamparas de la empresa ArgentinaLuz
        {
            precioFinal=precioBruto-(precioBruto*0.4);// el precio final es igual a la resta de precio bruto
        }
        else
        {
            precioFinal=precioBruto-(precioBruto*0.3);
        }
    }
else{    /*PUNTO C*//*
        if(cantidadLamparas == 4)
        {
            if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") // si la cantidad de 4 lamparas es igual a ArgentinaLuz O lamparas es igual a FelipeLamparas
            {
                precioFinal=precioBruto-(precioBruto*0.25);//al precio final le resto el 25%
            }
            else //si no es ninguna de esas 2 marcas entonces
            {
                precioFinal=precioBruto-(precioBruto*0.2);//al precio final le resto el 20%
            }
        }
    else{  /*PUNTO D*//*
            if(cantidadLamparas == 3)// si la cantidad es 3
            {
                if (marcaLamparas == "ArgentinaLuz")//si es 3 y es de ArgentinaLuz
                {
                    precioFinal=precioBruto-(precioBruto*0.15);
                }
                else
                {
                    if(marcaLamparas == "FelipeLamparas")//si es 3 es de FelipeLamparas
                    {
                        precioFinal=precioBruto-(precioBruto*0.1);
                    }
                    else{//si no es de la marca de ArgentinaLuz o FelipeLamparas
                        precioFinal=precioBruto-(precioBruto*0.05);
                    }
                }
            }
        }
    }

}

document.getElementById("txtIdprecioDescuento").value=precioFinal;

//RESULTADOCORRECTO^




if (cantidad >= 6 )
{
    alert(`el total con el descuento incluido es: $${masDeSeis }`);
}
    else if(cantidad == 5 && marca == "ArgentinaLuz")
        {
            alert(`el total es: $${menosDeSeis}`);
        }
            else if(marca =="ArgentinaLuz"  && marca != "ArgentinaLUz")
                {

                }*/



                /*
                if(marca =="ArgentinaLuz"  && marca != "ArgentinaLUz")
                {
                    (cantidad == 5 && marca == "ArgentinaLuz")
                    {
                        alert(`el total es: $${menosDeSeis}`);
                    }
                    if (cantidad >= 6 )
                    {
                        alert(`el total con el descuento incluido es: $${masDeSeis }`);
                    }
                }
*/



    /*
 	let cantidad;
    let precio;
    let descuentoUno;
    let descuentoDos;
    let descuentoTres;
    let menosDeSeis;
    let menosDeSeisUno;
    let marca;

    cantidad = document.getElementById('txtIdCantidad').value;
    marca = document.getElementById('Marca').value;

    cantidad = parseInt (cantidad);
    precio = 35;
    descuentoUno = 35/2;
    masDeSeis = cantidad * descuentoUno;//*(precio/2);

    descuentoDos = 35 * 0.4
    menosDeSeis = cantidad * descuentoDos;

    descuentoTres = 35 * 0.3;
    menosDeSeisUno = cantidad * descuentoTres;

    if (cantidad >= 6 )
    {
        alert(`el total con el descuento incluido es: $${masDeSeis }`);
    }
        else if(cantidad == 5 && marca == "ArgentinaLuz")
            {
                alert(`el total es: $${menosDeSeis}`);
            }
                else (marca =="ArgentinaLuz"  && marca != "ArgentinaLUz")
                    {
                        alert(`zfvsfva ${menosDeSeisUno}`)
                    }
*/