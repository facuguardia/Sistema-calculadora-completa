// Este sistema es un simulador de calculadora con potencia, raiz cuadrada y cubica. 

class Calculadora {
    constructor(){

    }
suma(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
resta(num1, num2){
    return parseInt(num1) - parseInt(num2);
}
mult(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
div(num1, num2){
    return parseInt(num1) / parseInt(num2);
}
potenciar(num,exp){
    return num**exp;
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2:Resta, 3: Multiplicación, 4: División, 5: Potenciación, 6: Raiz Cuadrada, 7: Raiz Cúbica");

if (operacion == 1) {
    let numero1 = prompt("Primer número a sumar");
    let numero2 = prompt("Segundo número a sumar");
    resultado = calculadora.suma(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("Primer número a restar");
    let numero2 = prompt("Segundo número a restar");
    resultado = calculadora.resta(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("Primer número a multiplicar");
    let numero2 = prompt("Segundo número a multiplicar");
    resultado = calculadora.mult(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("Primer número a dividir");
    let numero2 = prompt("Segundo número a dividir");
    resultado = calculadora.div(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("Primer número a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Conocer la raiz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Conocer la raiz cúbica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else{
    alert("Valor ingresado incorrecto");
}