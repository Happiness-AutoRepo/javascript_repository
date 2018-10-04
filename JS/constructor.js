function rectangle(height, length) {
    this.height = height;
    this.length = length;
    this.area = function(){
        return this.height * this.length;
    }
}

var rec1 = new rectangle(10,20);
var rec2 = new rectangle(5,10);

console.log(rec1.area());
console.log(rec2.area());

//=============================

var object1 = new Object();
object1.name = "Holly";
object1.height = "5";
console.log(object1);

var object2 = {name:"Grace", height: 6};
console.log(object2);