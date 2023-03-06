"use strict";

function logger() {
  console.log("My name is Luiz");
}

logger();

// function declaration
function fruitProcesser(apples, strawberries) {
  console.log(apples, strawberries);

  const juice = `Juice with ${apples} apples and ${strawberries} strawberries`;
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

arrow();

const yearsUntilRetiremant = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} is ${retirement} away from retirement`;
};

console.log(yearsUntilRetiremant(2002));
