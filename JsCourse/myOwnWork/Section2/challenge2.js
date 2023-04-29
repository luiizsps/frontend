bill = [100, 200, 300, 400, 500];
const tip = [],
  total = [];

function calcTip(bill, tip) {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] > 50 && bill[i] < 300) tip.push(bill[i] * 0.15);
    else tip.push(bill[i] * 0.2);
  }
}

function calcTotal(bill, tip, total) {
  for (let i = 0; i < bill.length; i++) {
    total.push(bill[i] + tip[i]);
  }
}

calcTip(bill, tip);
calcTotal(bill, tip, total);
console.log(tip, total);
