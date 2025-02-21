let person={
    fname:"Sai",
    lname:"Dhruva"
};
let {
    fname,
    lname,
    fname:firstname,
    age=10 //Default property
}=person;
console.log(fname+" "+lname+" "+firstname+" age:"+age);
