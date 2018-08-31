//In Java we created classes and put methods inside and inherited these methods by using extends. 
//
//JS (ES5) does not have classes but have PROTOTYPES  
//
//It is not exactly same as class, because you do not create instance of it, but you can create methods that affect multiple objects by using prototype 

//function Bicycle(cadence,speed,gear,tirePressure){
//    this.cadence=cadence;
//    this.speed=speed;
//    this.gear=gear;
//    this.tirePressure=tirePressure;
//    
//    this.inflateTires=function(){
//        return this.tirePressure+=3;
//    }
//}
//
//var b1=new Bicycle(50,20,4,25);
//b1.inflateTires();
//
//function Mechanic(name){
//    this.name=name;
//}
//
//var m1=new Mechanic("Mike");   //I want to give Mike access to inflateTires method 

////////////////////////

//Whenever you create a function, JS creates 2 objects. 
//    1- function name object
//    2- prototype object 
//    
//function foo(){}
//function bar(){}

//function greet(){
//    console.log("Hello");
//}
//
//greet(); //hello
//console.log(greet);   //function object
//console.log(greet.prototype); //prototype object 

//When you create object, __proto__ is created by JS Engine

//function foo(){}
//var obj=new foo();
//console.log(obj);
//    
////Set a property to foo prototype and access it from obj 
//
//foo.prototype.test="this is object";
//console.log(obj.__proto__.test);
//
//
//
//obj.__proto__.hello="test";
//console.log(obj.hello);
//
//obj.test=10;


//function Employee(name){
//    this.name=name;
//}
//
//var emp1=new Employee("Mike");
//var emp2=new Employee("Smith");
//
//Employee.prototype.playPranks=function(){
//    console.log("Plank played");
//}
//
//emp1.playPranks();
//emp2.playPranks();
//
//In class  modules, you have to define all method upfront 
//In prototype, you can put things at runtime 
//The minute you add that extra property, every object that was created from the employee as a constructor, even the ones that were created before you added that on the property would still work. Because the prototype look up happens at runtime 


//var simple = {};
//var obj=new Object(); 
//
//
//
//console.log(simple.__proto__ === obj.__proto__);
//
//console.log(obj.__proto__ === Object.prototype)


function Employee(){}
var emp=new Employee();

//emp.test;

emp.prop="Employee";
emp.__proto__.parentProp="Parent of Employer";

console.log(emp.__proto__.__proto__ === Object.prototype)

Object.prototype.grandParentProp="Grand Parent";


function foo(){}
var tmp=new foo();
console.log(tmp.grandParentProp);

console.log(emp.__proto__.__proto__.__proto__);

//INHERITANCE

function Employee(name){
    this.name=name;
}

Employee.prototype.getName=function(){
    return this.name;
}

var emp1=new Employee("Mike");
console.log(emp1.getName());

//you have employee obejct and some behavior., also you have manager object. Managers are also employeee and have common properties but managers have their own special beh. as well.


function Manager(name,dept){
    this.name=name;
    this.dept=dept;
}

Manager.prototype.getDept=function(){
    return this.dept;
}

var mgr=new Manager("Michael","Sales");
console.log(mgr.getDept());
//console.log(mgr.getName());


//One way to share is put all common properties in the Objects prototype
//Second way - Manager's prototype __proto__ points to Employee's prototype not object's prototype

mgr.__proto__.__proto__ = Employee.prototype;

console.log(mgr.getName());























