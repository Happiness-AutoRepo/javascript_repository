// let user enter 5 numbers and print how many of them are between 10 and 20
var num, counter = 0;

for (var i = 0; i < 5; i++) {
    
    num = parseInt(prompt("Enter a number"));
    
    if (num <= 20 && num >= 10) {
        
        counter++;
    }
}

alert(counter);