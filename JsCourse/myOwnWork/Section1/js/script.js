/*let js = "amazing";
if (js === "amazing") alert("JavaScript is fun");

const year = 2037;
const age = year - 2002;

const firstName = "Luiz Sérgio";
const lastName = "Passos da Silva";
console.log(`Name: ${firstName} ${lastName}`);

const firstHeight = document.querySelector("#firstHeight").value;
const firstWeight = document.querySelector("#firstMass").value;
const secondHeight = document.querySelector("#secondHeight").value;
const secondWeight = document.querySelector("#secondMass").value;
const resultEl = document.querySelector(".result");

firstBMI = Number(firstWeight.value) / Number(firstHeight.value ** 2);
secondBMI = Number(secondWeight.value) / Number(secondHeight.value ** 2);

if (firstBMI > secondBMI)
  resultEl.innerHTML = "The first person has a bigger BMI";
else resultEl.innerHTML = "The second person has a bigger BMI";

const jonasAge = 29;
const jonasNew = `I'm Jonas, I'm ${jonasAge} years old`;
console.log(jonasNew);

console.log(`Template
Literals
are cool`);


const johnWeight = 80;
const johnHeight = 1.82;
const markWeight = 90;
const markHeight = 1.9;

const markBMI = (markWeight / markHeight ** 2).toFixed(2);
const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

if (markBMI > johnBMI)
  console.log(`Mark has a bigger BMI ${markBMI} than John ${johnBMI}.`);
else console.log(`Jhon has a biggr BMI ${johnBMI} than Mark ${markBMI}.`);


const age = prompt("What's your age?");
if (Number(age) === 18) console.log("Wow! Now you are an adult!!");


const dolphins = [96, 108, 89];
let dolphinsScore = 0;
const koalas = [88, 91, 110];
let koalasScore = 0;
let i;

for (i = 0; i < koalas.length - 1; i++) {
  if (dolphins[i] >= 100) dolphinsScore += dolphins[i];
  if (koalas[i] >= 100) koalasScore += koalas[i];
}

dolphinsScore /= dolphins.length;
koalasScore /= koalas.length;

if (dolphinsScore > koalasScore) console.log("Dolphins wins.");
else if (koalasScore > dolphinsScore) console.log("Koalas wins.");
else console.log("Draw.");


const age = 17;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
*/

const bill = 20.3;
const tip = Number(
  (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2).toFixed(2)
);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);
