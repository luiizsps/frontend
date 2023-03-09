"use strict";

function logger() {
  console.log("My name is Luiz");
}

logger();

// function expression
const func = function (apples, strawberries) {
  console.log(apples, strawberries);
};

const juice = fruitProcesser(3, 2);
console.log(juice);

const yearsUntilRetiremant = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;

  return `${firstName} is ${retirement} years away from retirement`;
};

const cutPieces = function (fruit) {
  return fruit * 4;
};

// function declaration
function fruitProcesser(apples, strawberries) {
  console.log(apples, strawberries);

  const applePieces = cutPieces(apples);
  const strawberryPieces = cutPieces(strawberries);

  const juice = `Juice with ${applePieces} pieces of apples and ${strawberryPieces} pieces of strawberries`;
  return juice;
}

console.log(yearsUntilRetiremant(2002, "Luiz"));
