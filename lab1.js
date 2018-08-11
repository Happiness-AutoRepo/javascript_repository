

//1-Create 5 variables for 5 vegetables and print them on the console

var vegetables_1, vegetables_2, vegetables_3, vegetables_4, vegetables_5;

vegetables_1 = "Cucumber";
vegetables_2 = "Tomatoes";
vegetables_3 = "Onion";
vegetables_4 = "Pepper";
vegetables_5 = "Carrot";



console.log("list of vegetables");
console.log(vegetables_1);
console.log(vegetables_2);
console.log(vegetables_3);
console.log(vegetables_4);
console.log(vegetables_5);

//2- Create a program that asks user to enter amount for each //vegetables and make sure results are number

var amountOfVegetables_1, amountOfVegetables_2, amountOfVegetables_3, amountOfVegetables_4, amountOfVegetables_5;

amountOfVegetables_1 = parseInt(prompt("Please enter the amount of " + vegetables_1));
amountOfVegetables_2 = parseInt(prompt("Please enter the amount of " + vegetables_2));
amountOfVegetables_3 = parseInt(prompt("Please enter the amount of " + vegetables_3));
amountOfVegetables_4 = parseInt(prompt("Please enter the amount of " + vegetables_4));
amountOfVegetables_5 = parseInt(prompt("Please enter the amount of " + vegetables_5));

console.log(typeof amountOfVegetables_1);



//3-Create price for each product 

var price_1, price_2, price_3, price_4, price_5;

price_1 = 2.5;
price_2 = 3;
price_3 = 1.5;
price_4 = 2;
price_5 = 4;

//4- calculate and show price of each vegetables with following format

// 1 Cucember is 2.5 dollars
// 2             5 

var totalVegetables_1, totalVegetables_2, totalVegetables_3, totalVegetables_4, totalVegetables_5;

totalVegetables_1 = amountOfVegetables_1 * price_1;
totalVegetables_2 = amountOfVegetables_2 * price_2;
totalVegetables_3 = amountOfVegetables_3 * price_3;
totalVegetables_4 = amountOfVegetables_4 * price_4;
totalVegetables_5 = amountOfVegetables_5 * price_5;

console.log(amountOfVegetables_1 + " " + vegetables_1 + " is " + totalVegetables_1 + " Dollars");
console.log(amountOfVegetables_2 + " " + vegetables_2 + " is " + totalVegetables_2 + " Dollars");
console.log(amountOfVegetables_3 + " " + vegetables_3 + " is " + totalVegetables_3 + " Dollars");
console.log(amountOfVegetables_4 + " " + vegetables_4 + " is " + totalVegetables_4 + " Dollars");
console.log(amountOfVegetables_5 + " " + vegetables_5 + " is " + totalVegetables_5 + " Dollars");
























































