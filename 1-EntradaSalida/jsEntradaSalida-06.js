/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

///EL EJERCICICIO 6
let a;
let b;
let suma;

a = document.getElementById("txtIdNumeroUno").value;
b = document.getElementById("txtIdNumeroDos"). value;

a = parseInt(a);
b = parseInt(b);

suma = a + b;

//alert( "la suma es: " + suma)
alert(`La suma es ${suma}`);

};

/*
let A;
A = document.getElementById('txtIdNumeroUno').value;
A = parseInt (A);

let B;
B = document.getElementById('txtIdNumeroDos').value;
B = parseInt (B);

alert(A + B);
*/




/*
    //para sacar diferencia porcentual entre dos numeros
    let a;
    let b;
    let resta;
    let porcentaje;
    let total;
    
    a = document.getElementById("txtIdNumeroUno").value;
    b = document.getElementById("txtIdNumeroDos"). value;
    
    a = parseInt(a);
    b = parseInt(b);
    
    resta = b - a;
    porcentaje = resta / a;
    total = porcentaje * 100;
    alert( "el porcentaje es: %" + total);
*/