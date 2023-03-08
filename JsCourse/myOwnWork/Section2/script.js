"use strict";

function logger() {
  console.log("My name is Luiz");
}

logger();

// function declaration
function fruitProcesser(apples, strawberries) {
  console.log(apples, strawberries);

  const applePieces = cutPieces(apples);
  const strawberryPieces = cutPieces(strawberries);

  const juice = `Juice with ${applePieces} apples and ${strawberryPieces} strawberries`;
  return juice;
}

// function expression
const func = function (apples, strawberries) {
  console.log(apples, strawberries);
};

// arrow function
const arrow = (birthYear) => 2023 - birthYear;

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

console.log(yearsUntilRetiremant(2002, "Luiz"));
