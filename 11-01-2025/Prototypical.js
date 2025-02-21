let person={
    fname:"Sai",
    lname:"Dhruva",
    age:20
}

let student={
    role:"Student"
}
Object.setPrototypeOf(student,person);
console.log(person.fname+" "+person.lname+" "+person.age+" "+student.role);
function getDetails(){
    return person.fname+" "+person.lname+" "+person.age+" "+student.role;
}
export{ getDetails }