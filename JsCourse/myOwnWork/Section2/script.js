"use strict";

function logger() {
  console.log("My name is Luiz");
}

logger();

function fruitProcesser(apples, strawberrys) {
  console.log(apples, strawberrys);

  const juice = `Juice with ${apples} apples and ${strawberrys} strawberrys`;
  return juice;
}

const juice = fruitProcesser(3, 2);
console.log(juice);
