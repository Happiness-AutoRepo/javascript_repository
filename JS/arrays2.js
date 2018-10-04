var fish = ["clown", "mandarin", "orange", "sergean"];

var removed = fish.shift();

console.log(removed);
console.log(fish);


//write a program that every iteration will remove next element from the array

var names = ["Andrew", "Paul", "James", "Edward"];

//while(names.length > 0) {
//    
//    names.shift();
//    console.log(names);
//}

while(names.shift() != undefined) {
    
    console.log(names);
}