const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

function higherBMI() {
  console.log(
    Mark.calcBMI() > John.calcBMI()
      ? `Mark Miller's BMI (${Mark.BMI}) is higher than Jhon Smith's BMI (${John.BMI})`
      : `Jhon Smith's BMI (${John.BMI}) is higher than Mark Miller's BMI (${Mark.BMI})`
  );
}

higherBMI();
