var firstNum = parseInt(prompt("Please enter a first number"));
var secondNum = parseInt(prompt("Please enter a second number"));
var numberOfIterations = parseInt(prompt("Please enter a number of iterations"));

for (var i = 0; i < numberOfIterations; i++) {
    
    if (firstNum > secondNum) {
        console.log("1st number is bigger than the 2nd one " + i)
    }
    
    if (secondNum > firstNum) {
        console.log("1st number is smaller than the 2nd one " + i)
    }
    
    if (secondNum == firstNum) {
        console.log("numbers are even " + i)
    }
}