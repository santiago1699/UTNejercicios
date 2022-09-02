function mostrar()
{
let primero;
let segundo;
let iguales;
let divisible;
let mensaje;


primero=prompt("Inserta el primer numero: ");
segundo=prompt("Insterta el segundo numero: ");


primero=parseInt(primero);
segundo=parseInt(segundo);

iguales = (primero + segundo)*(primero+segundo);
divisible = primero / segundo;
mensaje= "el resto es mayor a 3 ya que es " + (divisible);

if (primero > segundo)
    {
        alert(divisible)
        if(divisible > 3)
        {
            alert(mensaje);
        }
        
    }

    if(primero == segundo)
        {
            alert(iguales);
        }

}
