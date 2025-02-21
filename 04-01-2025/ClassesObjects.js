//Using Object Literal
let p1={
    id: '001',
    name: 'sai',
    salary: '10000'
};
console.log("Object 1: ");
console.log(p1);

//Using new keyword
function Employee2(id, name, salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

let p2=new Employee2('002','Narsi','20000');
console.log("Object 2:");
console.log(p2);

//Using constructor
class Employee3{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}

let p3=new Employee3('003','Ayya','30000');
console.log("Object 3:");
console.log(p3);