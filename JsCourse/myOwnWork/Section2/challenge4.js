const bills = [22, 195, 354, 10, 55, 68, 30];
const tips = [];
const total = [];

function calcTip(bill, tip, total) {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] > 50 && bill[i] < 300) tip.push(bill[i] * 0.15);
    else tip.push(bill[i] * 0.2);
    total.push(bill[i] + tip[i]);
  }
}
