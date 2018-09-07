//Arrays

//var x = Array.from("JavaScript");
//console.log(x);

//ES5
//var ages = [12,17,8,21,14,11];
//var full = ages.map(function(cur){
//    return cur >= 18;
//})
//
//console.log(full);
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);

//ES6
//findIndex() = returns the index of the first element in the array that satisfies the provided texting function 
//
//find() = returns the value of the first element in the array that satisfies the provided testing function 

//let ages = [12,17,8,21,14,11];
//console.log(ages.findIndex(cur => cur >= 18));
//console.log(ages.find(cur => cur >= 18));

//for..of 

//let myArray = [10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x);
//}

//let myObj = {
//    
//    x:1,
//    y:2,
//    z:3
//}
//
//for(let a in myObj){
//    console.log(a);
//    console.log(myObj[a]);
//}
//
//let list = [4,5,6];
//for(let i in list){
//    console.log(i);
//}
//
//for(let i of list){
//    console.log(i);
//}


//Spread Operator

let mid =[3,4];
let arr = [1,2,mid,5,6];
console.log(arr);

let arr2 = [1,2,...mid,5,6];
console.log(arr2);

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

let sum1 = addFourAges(10,20,30,40);
console.log(sum1);

if i have those ages in an array, how can I pass it to function??

function addFourAges(a,b,c,d){
    return a+b+c+d;



//let ages = [10,20,30,40];
//let sum = addFourAges(...ages);
//console.log(sum);
//
//let sum = (a,b,c,d) => a+b+c+d;
//console.log(sum(...ages));

Rest Operator

function sumAll(...args){
    
    let sum=0;
    
    for(let arg of args){
        sum+=arg;
    }
    
    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));

//The big difference between spread and rest operator is the place in which we use each of them 
//
//Spread operator is used in the function call. While the rest operator is used in the function declaration to exact an arbitrary number of parameters. 

//Task 

//function multiply(multiplier,...theArgs){
//    return theArgs.map(function(element){
//        return multiplier * element;
//    });
//}
//
//var arr = multiply(2,1,2,3);
//console.log(arr);

//
//let multiply = (multiplier,...theArgs) => theArgs.map(element => multiplier * element);
//
//var arr = multiply(2,1,2,3);
//console.log(arr);

//MAP

//The map object hold key-value pairs. Any value(both objects and primitive values) may be used as either a key or a value 

//var myMap = new Map();
//
//myMap.set("keyString","value associated with a string");
//myMap.set("keyObj","value associated with keyObj");
//myMap.set("keyFunc","value associated with keyFunc");
//
//console.log(myMap.size);
//
//console.log(myMap.get("keyString"));
//console.log(myMap.get("keyObj"));
//console.log(myMap.get("keyFunc"));


let question = new Map();
question.set("question","what is the offcial name of the latest major JS version");
question.set(1,"ES5");
question.set(2,"ES6");
question.set(3,"ES2015");
question.set("correct",3);
question.set(true,"Corredt answer is D");
question.set(false,"Wrong,try again");

console.log(question.get("question"));
console.log(question.size);

for( let [key,value] of question.entries()){
    console.log(`This is ${key}, and it is set to ${value}`);
}





















