// Creating an object to represent a person
let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"], // Array as a value
    greet: function() {  // Method inside the object
        return "Hello, " + this.name + "!";
    }
};

// Accessing properties and methods
console.log(person.name);         // Output: Alice
console.log(person.age);          // Output: 25
console.log(person.hobbies[1]);   // Output: traveling
console.log(person.greet());      // Output: Hello, Alice!
