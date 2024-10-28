// Task 01

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

// Task 02

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020 ,
    passenger_capacity : 5 ,
};

// console.log(car.passenger_capacity);

// Task 03
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30,
//     }
// };

// console.log(student.physics.marks)


// task 04
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

for (const prop in student)
{
    console.log(prop);
  
}



