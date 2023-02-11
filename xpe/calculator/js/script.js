var btn = document.querySelector("#button");
btn.addEventListener("click", start);

function start() {
  getInput();
  soma();
  subtraçãoAporB();
  subtraçãoBporA();
  mult();
  divAporB();
  divBporA();
  potenciaAbaseB();
  potenciaBbaseA();
  raizQuadradaDeA();
  raizQuadradaDeB();
  fatorialDeA();
  fatorialDeB();
  porcentagemAB();
  porcentagemBA();
  media();
}

function getInput() {
  var inputA = document.querySelector("#numberA");
  var inputB = document.querySelector("#numberB");

  var numbers = [parseFloat(inputA.value), parseFloat(inputB.value)];
  return numbers;
}

function soma() {
  var resultado = document.querySelector("#soma");
  resultado.innerHTML = String(getInput()[0] + getInput()[1]);
}

function subtraçãoAporB() {
  var resultado = document.querySelector("#subtracao-A-B");
  resultado.innerHTML = String(getInput()[0] - getInput()[1]);
}

function subtraçãoBporA() {
  var resultado = document.querySelector("#subtracao-B-A");
  resultado.innerHTML = String(getInput()[1] - getInput()[0]);
}

function mult() {
  var resultado = document.querySelector("#multiplicação");
  resultado.innerHTML = String(getInput()[1] * getInput()[0]);
}

function divAporB() {
  var resultado = document.querySelector("#divisao-A-B");

  if (getInput()[1] === 0) {
    resultado.innerHTML = "Indeterminação";
  } else {
    resultado.innerHTML = String((getInput()[0] / getInput()[1]).toFixed(2));
  }
}

function divBporA() {
  var resultado = document.querySelector("#divisao-B-A");

  if (getInput()[0] === 0) {
    resultado.innerHTML = "Indeterminação";
  } else {
    resultado.innerHTML = String((getInput()[1] / getInput()[0]).toFixed(2));
  }
}

function potenciaAbaseB() {
  var resultado = document.querySelector("#potencia-AbaseB");

  resultado.innerHTML = String(getInput()[0] ** getInput()[1]);
}

function potenciaBbaseA() {
  var resultado = document.querySelector("#potencia-BbaseA");

  resultado.innerHTML = String(getInput()[1] ** getInput()[0]);
}

function raizQuadradaDeA() {
  var resultado = document.querySelector("#raiz-quadrada-A");
  resultado.innerHTML = String(Math.sqrt(getInput()[0]).toFixed(2));
}

function raizQuadradaDeB() {
  var resultado = document.querySelector("#raiz-quadrada-B");
  resultado.innerHTML = String(Math.sqrt(getInput()[1]).toFixed(2));
}

function fatorialDeA() {
  var fatorial;

  for (var i = getInput()[0]; i > 1; i--) {
    if (i === getInput()[0]) {
      fatorial = i;
    } else {
      fatorial *= i;
    }
  }

  var resultado = document.querySelector("#fatorial-A");
  resultado.innerHTML = String(fatorial);
}

function fatorialDeB() {
  var fatorial;

  for (var i = getInput()[1]; i > 1; i--) {
    if (i === getInput()[1]) {
      fatorial = i;
    } else {
      fatorial *= i;
    }
  }

  var resultado = document.querySelector("#fatorial-B");
  resultado.innerHTML = String(fatorial);
}

function porcentagemAB() {
  var resultado = document.querySelector("#porcentagem-A-B");
  resultado.innerHTML =
    String(((getInput()[1] / getInput()[0]) * 100).toFixed(2)) + "%";
}

function porcentagemBA() {
  var resultado = document.querySelector("#porcentagem-B-A");
  resultado.innerHTML =
    String(((getInput()[0] / getInput()[1]) * 100).toFixed(2)) + "%";
}

function media() {
  var resultado = document.querySelector("#media");
  resultado.innerHTML = String(
    ((getInput()[1] + getInput()[0]) / 2).toFixed(2)
  );
}

