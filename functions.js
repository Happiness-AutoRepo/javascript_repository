function findMaxNumInArray(array) {
    
    var biggestNumber = array[0][0];

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] > biggestNumber) {
                biggestNumber = array[i][j];
            }
        }
    }
    return biggestNumber;
}

var numbers1 = [
    [90,10,231],
    [-2,80,100,23,54],
    [45,22],
    [87,98,-100,49,73,35,19]
];

var numbers2 = [
    [90,10,231],
    [-2,80,534,23,54],
    [45,22],
    [87,98,-100,49,73,35,19]
];

console.log(findMaxNumInArray(numbers2));
