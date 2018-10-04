

//Classes
//
//ES5
//
//var Person5 = function(name,yearOfBirth,job){
//    this.name=name;
//    this.yearOfBirth=yearOfBirth;
//    this.job=job;
//}
//
//Person5.prototype.calculateAge = function(){
//    var age = new Date().getFullYear - this.yearOfBirth;
//    console.log(age);
//}
//
//var mike5 = new Person5("Mike",1980,"tester");

//ES6

//
//class Person6{
//    constructor(name,yearOfBirth,job){
//        this.name=name;
//        this.yearOfBirth=yearOfBirth;
//        this.job=job;
//    }
//    
//    calculateAge(){
//        var age = new Date().getFullYear - this.yearOfBirth;
//        console.log(age);
//    }
//    
//}
//
//const mike6 = new Person6("Mike",1980,"tester");

//All classes have to have constructor method
//This is where we define the initial properties that we want in our object




//Static methods 

//Static methods that are simply attached to the classes

//class Person6{
//    constructor(name,yearOfBirth,job){
//        this.name=name;
//        this.yearOfBirth=yearOfBirth;
//        this.job=job;
//    }
//    
//    calculateAge(){
//        var age = new Date().getFullYear - this.yearOfBirth;
//        console.log(age);
//    }
//    
//    static greeting(){
//        console.log("Hey there");
//    }
//    
//}
//
//const mike6 = new Person6("Mike",1980,"tester");
//
//Person6.greeting();

//Note: 
//Classes are not hoisted like functions. You need to declare the class first.
//We can only add methods in class , not properties. The reason is , it is not a good practice to inherit properties through object. 


//When to use static method?
//    If you are writing utility classes and they are not supposed to be changed.
//    If there is some code that can easily be shared by all the instance methods, extract that code into a static method.
//    If you are sure that the definition of the method will never be changed or overridden. As static methods can not be overridden.


///////////Task//////////////////////////////

//function Biycle5(cadence,speed,gear,tirePressure){
//    this.cadence=cadence;
//    this.speed=speed;
//    this.gear=gear;
//    this.tirePressure=tirePressure;
//    
//    this.inflateTires=function(){
//        this.tirePressure+=3;
//    }
//} 
//
//var b15=new Biycle5(50,20,4,25);


//class Biycle6{
//    constructor(cadence,speed,gear,tirePressure){
//        this.cadence=cadence;
//        this.speed=speed;
//        this.gear=gear;
//        this.tirePressure=tirePressure;
//    }
//    
//    inflateTires(){
//        return this.tirePressure+=3;
//    }
//}
//
//let b16=new Biycle6(50,20,4,25);
//console.log(b16.inflateTires());

///////////////////////////////////////////////////////

//INHERITANCE

//Inheriting constructor
//
//class Animal{
//    constructor(name){
//        this.name=name;
//    }
//}
//
//class Dog extends Animal{
//    constructor(name){
//        //super(name);
//    }
//} 
//
//let d1=new Dog("abc");
//console.log(d1.name);
//
//
//
//class Person{   //super class - parent class
//    constructor(name,age,weight){
//        this.name=name;
//        this.age=age;
//        this.weight=weight;
//    }
//    
//    displayName(){
//        console.log(this.name);
//    }
//    
//    displayAge(){
//        console.log(this.age);
//    }
//    
//    displayWeight(){
//        console.log(this.weight);
//    }
//}
//
//class Programmer extends Person{
//    
//    constructor(name,age,weight,language){
//        super(name,age,weight);
//        this.language=language;
//    }
//    
//    displayLanguage(){
//        console.log(this.language);
//    }
//}
//
//let mike = new Person("mike",25,200);
//mike.displayName();
//mike.displayAge();
//mike.displayWeight();
//
//console.log('............')
//
//let john = new Programmer("john",30,180,"JS");
//john.displayName();
//john.displayAge();
//john.displayWeight();
//john.displayLanguage();



/////Inheriting method

class Vehicle{
    start(){
        console.log("starting the vehicle");
    }
}

class Car extends Vehicle{
    start(){
       // super.start();
        console.log("starting the car")
    }
}

let c = new Car();
c.start();

////////////////////////////////////////////////

//Getter and Setters

class GetThings{
    constructor(size){
        this.length=size;
    }
    
    get Length(){
        return this.length;
    }
    
    set Length(value){
        this.length=value;
        console.log("the value has been set");
    }
}

var thing = new GetThings(9);
console.log(thing.Length);

thing.Length=10;
console.log(thing.Length);



//
class EncapTest{
    constructor(name,idNum,age){
    this._name = name;
    this._idNum = idNum;
    this._age = age;
    }
    
    get Age(){
        return this.age;
    }

    get Name(){
        return this.name;
    }

    get IdNum(){
        return this.idNum;
    }

    set Age(newAge){
        this.age = newAge;
    }

    set Name(newName){
        this.name = newName;
    }

    set IdNum(newId){
        this.idNum = newId;
    }
}

      var encap = new EncapTest();
      encap.Name="Mike";
      encap.Age=20;
      encap.IdNum="MS30";

      console.log(`Name : ${encap.Name} Age : ${encap.Age} ID : ${encap.IdNum}`) ;

      var encap2 = new EncapTest("Mike","MS30",30);
      console.log(`Name : ${encap2.Name} Age : ${encap2.Age} ID : ${encap2.IdNum}`) ;

////////////////////////////////////////////////

































