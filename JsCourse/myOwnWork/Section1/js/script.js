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
*/

const johnWeight = 80;
const johnHeight = 1.82;
const markWeight = 90;
const markHeight = 1.9;

const markBMI = (markWeight / markHeight ** 2).toFixed(2);
const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

if (markBMI > johnBMI)
  console.log(`Mark has a bigger BMI ${markBMI} than John ${johnBMI}.`);
else console.log(`Jhon has a biggr BMI ${johnBMI} than Mark ${markBMI}.`);
