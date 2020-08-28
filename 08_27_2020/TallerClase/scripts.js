const promedio = document.getElementById("promedio") /* Llamamos al boton */
promedio.addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('num1').value) /* Me trae el value valor del campo */
    console.log(num1);
    let num2 = parseFloat(document.getElementById('num2').value) /* Me trae el value valor del campo */
    console.log(num2);
    const respuesta = document.getElementById('respuesta')
    let resultado = (num1 + num2) / 2
    console.log(resultado)
    respuesta.innerHTML = '<i>' + resultado + '</i>';
})