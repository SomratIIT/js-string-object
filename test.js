let student ={

    name : 'Somrat',
    age : 25 ,
    salary : 5000,
    Profession : 'Student',
    wants_to_visit : ['Switzerland', 'Austria', 'Sarbia'],
    dream : function()
    {
        console.log("Age is "+this.age +" ..Now or Never?")
    }
};

console.log(student);
student.dream();

