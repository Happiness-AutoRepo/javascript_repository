var months = Array(3);

console.log(months);
alert(months);

months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";

var number = parseInt(prompt("Please enter a number"));

console.log(months);
console.log(months.length);
console.log(months[number - 1]);

for (var i = 0; i < months.length; i++) {
    
    if(months[i] == "May") {
        console.log("Found it!")
    }
}

console.log(Array.isArray(months));
console.log(months.toString());