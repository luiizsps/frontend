bill = [100, 200, 300, 400, 500];
const tip = [];

function calctip(bill, tip) {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] > 50 && bill[i] < 300) tip.push(bill[i] * 0.15);
    else tip.push(bill[i] * 0.2);
  }
}

calctip(bill, tip);

console.log(tip);
