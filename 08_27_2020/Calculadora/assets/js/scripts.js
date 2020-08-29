const suma = document.getElementById("sum");
const resta = document.getElementById("res");
const multiplicacion = document.getElementById("mul");
const division = document.getElementById("div");
const resultado = document.getElementById("resultado");

suma.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    sumar = num1 + num2;
    resultado.innerHTML = "<strong>" + sumar + "</strong>";
});
suma.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    resta = num1 - num2;
    resultado.innerHTML = "<strong>" + resta + "</strong>";
});
suma.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    multiplicacion = num1 * num2;
    resultado.innerHTML = "<strong>" + multiplicacion + "</strong>";
});
suma.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    division = num1 / num2;
    resultado.innerHTML = "<strong>" + division + "</strong>";
});