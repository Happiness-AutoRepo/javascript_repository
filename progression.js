var sum = 1;

var n = parseInt(prompt("Enter a number"));

for (var i = 2; i <= n; i++) {
    
    sum = sum + 1/i;
    console.log(sum + " " + i);
}