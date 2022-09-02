function mostrar()
{
    let numero;
    let letra;
    //contadores
    let sumaDeNumerosNegativos;
    let sumaDeNumeroPositivos;
    let contador;
    let contadorDeNumerosPares;
    let contadorDeNumerosImpares;
    let contadorDeCeros;
    let numeroMinimo;
    let letraDelMinimo;
    let numeroMaximo;
    let letraDelMaximo;
    let contadorDeMinimo;
    let contadorDeMaximo;

    sumaDeNumeroPositivos=0;
    sumaDeNumerosNegativos=0;
    contadorDeNumerosPares=0;
    contadorDeNumerosImpares=0;
    contadorDeCeros=0;
    contador=0;
    contadorDeMinimo=0;
    contadorDeMaximo=0;

    respuesta=true;

    while(respuesta ==true)
    {
        numero=prompt("Ingrese numero entre -100 y 100");
        numero=parseInt(numero);
        while(numero <-100 || numero >100)
        {
            numero=prompt("Por favor ingrese un numero entre -100 y 100")
            numero=parseInt(numero);
        }

        letra=prompt("Ingrese una letra entre la a y la z");
        letra=letra.toLowerCase();
        while(letra.length != 1 )
        {
            letra=prompt("ingrese solo una letra");
            letra=letra.toLowerCase();
        }

        //CALCULAR

        if(numero != 0)//PARA SABER CUANTOS NUMEROS PARES E IMPARES HAY
        {
            if(numero % 2 == 0)
            {
                contadorDeNumerosPares=contadorDeNumerosPares+1;
            }
            else
            {
                contadorDeNumerosImpares=contadorDeNumerosImpares+1;
            }
        }
        else
        {
            contadorDeCeros=contadorDeCeros+1;
        }

        if(numero>0)//PARA SABER CUANTOS NUMEROS POSITIVOS Y NEGATIVOS HAY
        {
            sumaDeNumeroPositivos+=numero;//siempre debo de iniciar la suma con 0 para que pueda sumarle el valor que se introduzca en numero
            contador= contador+1;
        }
        else
        {
            if(numero<0)
            {
                sumaDeNumerosNegativos+=numero;//SUMA DE TODOS LOS NUMEROS NEGATIVOS INGRESADO
                contador= contador+1;
            }
        }

        if(contadorDeMinimo == 0)//PARA SACAR EL NUMERO Y LETRA MINIMO
        {
            numeroMinimo=numero;
            letraDelMinimo=letra;
            contadorDeMinimo=1;
        }
        else
        {
            if(numero<numeroMinimo)//mientras numero sea MENOR a numero minimo
            {
            numeroMinimo=numero;
            letraDelMinimo=letra;
            }
        }

        if(contadorDeMaximo == 0)//PARA SACAR EL NUMERO Y LETRA MAXIMO
        {
            numeroMaximo=numero;
            letraDelMaximo=letra;
            contadorDeMaximo=1;
        }
        else
        {
            if(numero>numeroMaximo)//mientras numero sea MAYOR a numero maximo
            {
            numeroMaximo=numero;
            letraDelMaximo=letra;
            }
        }

        respuesta=confirm("quiere continuar?");
    }//final del while

    sumaDeNumeroPositivos= sumaDeNumeroPositivos/contador;//PROMEDIO DE TODOS LOS NUMEROS POSITIVOS INGRESADOS

    //PRESENTANDO LOS CALCULOS
    alert("la cantidad de numeros pares es " + contadorDeNumerosPares);
    alert("la cantidad de numeros impares es " + contadorDeNumerosImpares);
    alert("la cantidad de ceros ingresados es de " + contadorDeCeros);
    alert("el promedio es de los numeros positivos ingresados es " + sumaDeNumeroPositivos);
    alert("La suma de los numeros negativos es " +  sumaDeNumerosNegativos);
    alert("el numero minimo y letra de este es " + numeroMinimo + " y la letra es " + letraDelMinimo);
    alert("el numero maximo y la letra de este es " + numeroMaximo + " y su letra es " + letraDelMaximo);
}
