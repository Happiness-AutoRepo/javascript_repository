var bill1, bill2, bill3, totalBill;
bill1 = 200;
bill2 = 50 * 0.6;
bill3 = 50 * 0.5;
totalBill = 0;

var numOfCalls = parseInt(prompt("Enter # of phone calls"));

while (isNaN(numOfCalls) || numOfCalls < 0) {
    
     numOfCalls = parseInt(prompt("Enter a VALID # of phone calls"));
}

if (numOfCalls <= 100) {
    totalBill = bill1;
} else if (numOfCalls <= 150) {
    totalBill = bill1 + (numOfCalls - 100) * 0.6;
} else if (numOfCalls <= 200) {
    totalBill = bill1 + bill2 + (numOfCalls - 150) * 0.5;
} else {
    totalBill = bill1 + bill2 + bill3 + (numOfCalls - 200) * 0.4;
}

console.log(totalBill);