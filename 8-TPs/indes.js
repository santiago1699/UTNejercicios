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

    switch(cantiadadDeLamparas)
    {
        case 6:
            switch(marcaLamparas)
            {
                case "ArgentinaLuz":
                mensaje = "el precio final es " ((precioBruto) - (precioBruto*0.50));
            }
            break;
    }


document.getElementById("txtIdprecioDescuento").value;
