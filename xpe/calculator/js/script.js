var btn = document.querySelector("#button");
btn.addEventListener("click", start);

var inputA = document.querySelector("#numberA");
var inputB = document.querySelector("#numberB");
console.log(inputA.value);

var firstNumber = parseFloat(inputA.value);
var secondNumber = parseFloat(inputB.value);

function start() {
  soma();
}

function soma() {
  console.log(firstNumber, secondNumber);
  var soma = document.querySelector("#soma");
  soma.innerHTML = String(firstNumber + secondNumber);
}
