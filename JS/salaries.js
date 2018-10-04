var salaries = {
    john: 100,
    ann: 105,
    pete: 75
};

if (salaries.john <= 100) {
    salaries.john = 120;
}

if ("adam" in salaries != true) {
    salaries.adam = 150;
}

console.log(salaries);

for(x in salaries) {
    console.log(x + ":" +salaries[x])
}