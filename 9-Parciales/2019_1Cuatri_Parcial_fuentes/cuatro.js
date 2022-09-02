function mostrar()
{
let primero;
let segundo;
let suma;

primero = prompt("Pone tu primer numero");
segundo = prompt("Tu segundo numero es");



primero = parseInt(primero);
segundo = parseInt(segundo);

iguales = (`el primer numero es ${primero} y el segundo es ${segundo}`)
suma = primero + segundo;
resta = primero - segundo;
superoDiez = (`la resta es ${resta} y supero el 10`);



        if(primero == segundo)
            {
                alert(iguales);
                
            }

        else if(primero < segundo)
            {
                alert(suma);
            }


            else(primero > segundo)
            {
                alert(resta);
            }

            if(resta > 10)
            {
                alert(superoDiez);
            }
}
