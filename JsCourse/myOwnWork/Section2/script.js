/*
"use strict";


function logger() {
  console.log("My name is Luiz");
}

logger();

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

// function declaration
function fruitProcesser(apples, strawberries) {
  console.log(apples, strawberries);

  const applePieces = cutPieces(apples);
  const strawberryPieces = cutPieces(strawberries);

  const juice = `Juice with ${applePieces} pieces of apples and ${strawberryPieces} pieces of strawberries`;
  return juice;
}

console.log(yearsUntilRetiremant(2002, "Luiz"));


const calculateAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetiremant = (birthYear, firstName) => {
  const age = calculateAge(birthYear);
  const retirement = 65 - age;

  return `${firstName} is ${retirement} years away from retirement`;
};


const points = [81, 82, 83, 84];

console.log(points.length); // returns the size of an array
// adciona um elemento ao fim do array e retorna o tamanho do array
points.push(85);

// adiciona um elemento ao inicio do array e retorna o tamanho do array
points.unshift(80);

// remove o ultimo elemento e retorna o elemento removido
points.pop();

// remove o primeiro elemento do array e o retorna
points.shift();

// retorna a posição onde o elemento informado se encontra
points.indexOf(82);

//retorna true ou false caso o elemento pertença ou não pertença ao array
points.includes(82);

console.log(points);




// console.log(Luiz.firstName);
// console.log(Luiz["lastName"]);

const answer = "lastName";

if (Luiz[answer]) {
  // se a resposta for undefined, o else será executado
  console.log(Luiz[answer]);
} else {
  console.log("answer not found");
}

Luiz.twitter = "@luizsps";

console.log(Luiz);
*/

// object
const Luiz = {
  firstName: "Luiz Sérgio",
  lastName: "Passos da Silva",
  birthYear: 2002,
  hasDriverLicense: false,
  /*
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
  
  calcAge: function () {
    return 2023 - this.birthYear;
  },
  */

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()} years old student, and he has ${
        this.hasDriverLicense ? "a" : "no"
      } drivers license.`
    );
  },
};

console.log(Luiz.age);

Luiz.birthYear = 2000;

Luiz.calcAge();
console.log(Luiz.age);
Luiz.getSummary();
