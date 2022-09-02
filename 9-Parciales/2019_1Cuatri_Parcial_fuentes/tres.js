function mostrar()
{
let precio;
let descuento;
let descuentoAplicado;// es el descuento dividido 100
let final;//es el precio multiplicado por el descuento (que esta dividio * 100)
let total;// es el precio menos el descuento

precio = prompt ("cual es el precio del producto? ");
descuento = prompt ("cual es el porcentaje del descuento que queres agregarle?");

precio = parseInt(precio);
descuento= parseInt(descuento);

descuentoAplicado = descuento / 100; //al descuento lo divido en 100 pra despues multipplicar por el precio

final = precio * descuentoAplicado; // el precio seria el numero que le asignamos menos el descuento aplicado divido entre 100
total = precio - final;


document.getElementById("elPrecioFinal").value = total;


}
