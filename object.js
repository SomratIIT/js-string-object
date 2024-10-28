// Creating an object to represent a person
let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"], // Array as a value
    greet: function() {  // Method inside the object
        // return "Hello, " + this.name + "!";
        console.log("Hello, " + this.name)
    }
};

// Accessing properties and methods
/* console.log(person.name);         
console.log(person.age);         
console.log(person.hobbies[1]);  
console.log(person.greet());  */    
// console.log(person);

person.greet();
