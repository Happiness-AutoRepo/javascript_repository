var num, sum = 0;

for(var i = 0; i < 5; i++) {
    
    num = parseInt(prompt("Enter a number"));
    
    if(num <= 0) {
        continue;
    }
    
    sum = sum + num;
}

console.log(sum);