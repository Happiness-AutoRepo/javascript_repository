var fish = ["angel", "clown", "mandarin", "sturgeon"];

fish.splice(2, 0, "drum");  // starting position, how many elements to delete, what to replace it with

console.log(fish);

fish.splice(3, 1);   // starting position, how many elements to delete, what to replace it with

console.log(fish);

fish.splice(2, 1, "trumpet"); // starting position, how many elements to delete, what to replace it with

console.log(fish);

fish.splice(0, 2, "parrot", "anemone", "blue");  // starting position, how many elements to delete, what to replace it with

console.log(fish);

fish.splice(2, 2);   // starting position, how many elements to delete, what to replace it with

console.log(fish);

fish.splice(1, 1);   // starting position, how many elements to delete, what to replace it with

console.log(fish);