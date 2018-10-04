// find the biggest number in the array

var numbers = [
    [90,10,231],
    [-2,80,100,23,54],
    [45,22],
    [87,98,-100,49,73,35,19]
];

var biggestNumber = numbers[0][0];

for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] > biggestNumber) {
            biggestNumber = numbers[i][j];
        }
    }
}

alert(biggestNumber);