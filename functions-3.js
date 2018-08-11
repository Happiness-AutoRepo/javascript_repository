//function calculateArea(width,height){
//    var area=width * height;
//    console.log(area);
//}
//
//calculateArea(3,5);


//function calculateSomeNumber(num1,num2){
//    return num1+num2;
//}
//
//
////100000 lines code
//
//function calculateArea(width,height){
//    var area=calculateSomeNumber(3,4);
//    return area;
//}
//var x=calculateArea(5,8);
//
//
//
//console.log(x);

//function isChecked(){
//    if(x>15){
//        console.log("valid");
//    }else{
//        console.log("no valid");
//    }
//}
//
//console.log(x%2);
//console.log( (x*9)+12);


//function sum(num1,num2){
//    var x = num1 + num2;
//    return x;
//}
//
//var v1= sum(5,8);
//var v2= sum(15,18);
//console.log(v1);
//console.log(v2);

//Task
//Write two functions:
//1-calculateAge(yearBirth); and returns the age
//2-yearsUntilRetirement(name,year); and displays in the console following:  “John retires in 37 years”
//
//Example: yearsUntilRetirement(“John”,1990);


var age=80;

function calculateAge(year){
    var age = 2018 - year;
    return age;
}

function yearsUntilRetirement(name,year){
    var retirement = 65 - calculateAge(year);
    console.log( name + " retires in " + retirement + " years");
}

console.log(age);

yearsUntilRetirement("John",1990);













