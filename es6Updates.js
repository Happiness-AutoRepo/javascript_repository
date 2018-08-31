//Variable Declarations with let and const

//ES5
//var name5 = "Mike Smith";
//var age5 = 23;
//name5 = "Mike Miller";
//console.log(name5);

//ES6
//const name6 = "Mike Smith";
//let age6 = 23;
//name6 = "Mike Miller";
//
//console.log(name6);
//console.log(age6);

/////////////////////////////////////////////

//1
//const: if value is not changing
//let : if value is changing

//2
//Variables declared with var in ES5 is function scoped, and the variables declared with let and const in ES6 are block-scoped.

/////////////////////////////////////////////

//ES5

//function driverLicense5(passedTest){
//    if (passedTest){
//        var firstName = "Mike";
//        var yearOfBirth =1970;
//
//    }
//    
//}
//
//console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car");
//
//driverLicense5(true);


//ES6
//
//function driverLicense6(passedTest){
//    let firstName;
//    const yearOfBirth=1970;
//    if (passedTest){
//        firstName = "Mike";
//        //yearOfBirth =1970;
//        
//        
//        
//    }
//    
//}
//
//console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car");
//
//driverLicense6(true);

////////////////////////


//var i = 23;
//for(var i=0;i<5;i++){
//    console.log(i);
//}
//
//console.log(i);  //0 1 2 3 4 5

//
//let i = 23;
//
// let sum=0;
//for(let i=0;i<5;i++){
//   
//    console.log(i);
//    sum=sum+i;
//    
//    
//}
//
//console.log(sum);
//console.log(i);


/////////////////////////////////////////////

//Strings

//var a = 10;
//var b = 10;
//
////console.log("JavaScript first appeared " + " " + (a+b) + " years ago.");
//
////Template String
//
//console.log(`JavaScript first appeared ${a+b} years ago.`);


//Task

//let firstName = "Mike";
//let lastName = "Smith";
//const yearOfBirth = 1970;
//function calcAge(year){
//    return 2018 - year;
//}
//
////This is Mike Smith. He was born in 1970. Today, he is 48 years old.
//
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `);

//String Methods
//let fName = "Mike";
//let lName = "Smith";
//
//const n =`${fName} ${lName}`;
//
//console.log(n.startsWith("m"));
//console.log(n.endsWith("Sm"));
//console.log(n.endsWith("th"));
//console.log(n.includes(" "));
//console.log(n.includes("ik"));
//console.log(fName.repeat(5));
//console.log(`${fName} `.repeat(5));

////////////////////////////////////////////////////////////

//Arrow Functions

//ES5
//var x = function(a){
//    return a;
//}
//
////ES6
//let x = a => a;
//console.log(x(2));

//If we do not have any parameters

//ES5
//var y = function(){
//    console.log("Hello");
//}

//ES6
//let y = () => {console.log("Hello")};
//y();


//If we have multiple parameters

//ES5
//var z = function(a,b,c){
//    return a+b+c;
//}
//
//console.log(z(1,2,4));
//
////ES6
//let k = (a,b,c) => a+b+c;
//console.log(k(1,2,4));

////////////////////////////////////////////////////////////

//map() method

//var array1 = [1,4,9,14];
//let map1 = array1.map(x =>x*2);
//
//console.log(map1);
//
//const years = [1990,1965,1982,1957];
//
//let ages6 = years.map(el => 2018-el);
//
//console.log(ages6);

//Task

//var materials = [
//    "Hydrogen",
//    "Helium",
//    "Lithium",
//    "Beryllium"
//]
//
//console.log(materials.map(material => material.length));


//
//Expected outcome : [8,6,7,9]


//Arrow functions CAN NOT be used as a constructor and will throw an error when used with new 

//var Foo = () => {};
//var foo = new Foo();

//Arrow functions do not have a prototype property

//var Foo = () => {};
//console.log(Foo.prototype);

////////////////////////////////////////////////////////////

//Destructuring
//Destructuring is a JS expression that makes it possible to unpack values from array, or properties from objects, into distinct variables.

//ES5
//var john=["john",26];
//var name=john[0];
//var age=john[1];

//ES6
//let [name,age] = ["John",26];
//console.log(name);
//console.log(age);
//
//const obj={
//    firstName:"Mike",
//    lastName:"Smith"
//}
//
//const {firstName,lastName} = obj;
//console.log(firstName);


function calcAgeRetirement(year){
    const age =new Date().getFullYear()-year;
    return [age,65-age];
}

const [age2,retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);





















