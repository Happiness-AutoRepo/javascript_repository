class Person {
    
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    
    calculateAge() {
        console.log(new Date().getFullYear()-this.yearOfBirth);
    }
}

let mike = new Person("Mike", 1980);
mike.calculateAge();