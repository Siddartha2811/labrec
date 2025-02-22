const express = require('express');
const app = express();

var students = [
    {
        "id": "1",
        "name": "sanju",
        "classn": "it-b"
    },
    {
        "id": "2",
        "name": "varshith",
        "classn": "cse - c"
    }
];
app.use(express.json())
app.get("/students/", (req, res) => {
    res.status(200).json(students);
});



app.get("/students/:id/", (req, res) => {
    let { id } = req.params;  
    let student = students.find((s) => s.id === id); 

    if (student) {
        res.status(200).json(student);  
    } else {
        res.status(400).json({ "message": "sorry" });  
    }
});

app.post("/post",(req,res)=>{
    student = req.body
    students.push(student)
    res.status(200).json(students)
    res.status(400).json({"mess":"with me and you're dead"})
})

app.delete("/delete/:id/",(req,res)=>{
    let {id} = req.params
    students =students.filter((s)=>s.id!=id)
    if(students){res.status(200).json(students)}
    else{res.status(400).json({"mess":"with me n your dead mate"})}
}
)


app.put("/put/:id", (req, res) => {
    let { id } = req.params;
    let updatedStudent = req.body;  
    var inx = students.findIndex(s=>s.id===id)
    var student = students.find(s=>s.id===id)
    if(student){
    student = updatedStudent
    students.splice(inx,1,student)
    res.status(200).json(students)
    }
    else{
    res.status(400).json({"mess":"and you're dead"})}
    
});

app.patch("/patch/:id",(req,res)=>{
    let {id} = req.params 
    let {name,classn} = req.body
    let student = students.find(s=>s.id===id)
    if(student){
        student.name = name ?(name):student.name
        student.classn = classn?(classn):student.classn
        res.status(200).json(students)
    }
    else{
        res.status(400).json({"mess":"and you're dead"})
    }
    

})


app.listen(2000, () => {
    console.log("Server running at http://localhost:2000");
});
