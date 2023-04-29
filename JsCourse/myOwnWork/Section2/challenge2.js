bill = [100, 200, 300, 400, 500];
const tip = [],
  total = [];

function calcTip(bill, tip, total) {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] > 50 && bill[i] < 300) tip.push(bill[i] * 0.15);
    else tip.push(bill[i] * 0.2);
    total.push(bill[i] + tip[i]);
  }
}

calcTip(bill, tip, total);
console.log(tip, total);
