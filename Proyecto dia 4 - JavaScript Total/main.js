function devolverResultado(resultado) {
    document.getElementById("resultado").value = resultado;
   }

function sumar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
   devolverResultado(num1 + num2);
}
function restar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
   devolverResultado(num1 - num2);
}
function multiplicar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
   devolverResultado(num1 * num2);
}
function dividir() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
   devolverResultado(num1 / num2);
}
function potenciar() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
   devolverResultado(Math.pow(num1, num2));
}
function calcularRaiz() {
    let num1 = +document.getElementById("num1").value;
   devolverResultado(Math.sqrt(num1));
}
function convertirAbsoluto() {
    let num1 = +document.getElementById("num1").value;
   devolverResultado(Math.abs(num1));
}
function generarAleatorio() {
   devolverResultado(Math.random());
}
function redondearEntero() {
    let num1 = +document.getElementById("num1").value;
   devolverResultado(Math.round(num1));
}
function redondearAbajo() {
    let num1 = +document.getElementById("num1").value;
   devolverResultado(Math.floor(num1));
}
function redondearArriba() {
    let num1 = +document.getElementById("num1").value;
   devolverResultado(Math.ceil(num1));
}

function limpiar () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
}

