var animals = ["dog", "cat", "monkey", "donkey", "dino", "elephant"];


console.log(animals.slice(0));

console.log(animals.slice(1));       // no second index - till the end
console.log(animals.slice(5));
console.log(animals.slice(4));
console.log(animals.slice(0, 1));    // starting included, finishing not included
console.log(animals.slice(0, 2));
console.log(animals.slice(0, 0));