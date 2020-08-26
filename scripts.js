//funcion tradicional 
function soyUnaFuncion(num1, num2) {
    return num1 + num2;
}
console.log(soyUnaFuncion); //para saber la estructura de la funcion 
console.log(soyUnaFuncion(10, 15)); // se ejecuta la funcion con parametros 

/* Funciones anonimas  como las funciones flecha */
let sumar = (a, b) => a + b;
console.log(sumar(10, 15));
console.log(sumar);

// funciones anonimas tradicionales 
let hola = function() {
    return 'Hola, como estas'
}
console.log(hola);
console.log(hola());

//CONDICIONALES modifica el flujo del programa dependiendo de otra parte del codigo 

let color = prompt('Ingrese un color en ingles')
if (color == 'red') {
    document.write('<h1 style="color:red"> Si el color es red => rojo </h1>')
} else {
    document.write('<h1 style= color:" ' + color + '" > No el color no es Red, el color escogido fue ' + color + '</h1>')
}

/* OPERADORES DE COMPARACION 
!= diferente

*/
let year = 2021;
if (year != 2020) {
    console.log('Hola ')
}


/* OPERADORES LOGICOS 

&& NAD -- Y
|| OR  -- Ó
!  NOT -- Negación cambia el valor si es si a no o lo contrario true a false

*/

let operacion = prompt('Ingrese la operacion "suma", "resta", "multiplicar", "dividir"')

let num1 = parseFloat(prompt('Ingrese un numero'))
let num2 = parseFloat(prompt('Ingrese un numero'))

switch (operacion) {
    case "suma":
        document.write('<br> El resultado de la suma es: ' + (num1 + num2))
        break
    case "resta":
        document.write('<br> El resultado de la resta es: ' + (num1 - num2))
        break
    case "multiplicar":
        document.write('<br> El resultado de la multiplicacion es: ' + (num1 * num2))
        break
    case "dividir":
        document.write('<br> El resultado de la division es: ' + (num1 / num2))
        break
    default:
        document.write('<br> Los valores no son validos')
        break


}