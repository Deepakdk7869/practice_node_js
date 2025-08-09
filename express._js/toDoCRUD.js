const express = require('express');
const app = express();
app.use(express.json());
let middleWare = (req,res,next)=>{
  console.log('middleware is called');
  next();
}
app.use(middleWare);
let todos  = [
    {id: 1, text : "to-do_1", completed : true},
    {id: 2, text : "to-do_2", completed : true},
    {id: 3, text : "to-do_3", completed : true}
]

app.get('/getTodoList',middleWare, (req,res)=>{
    res.status(200).send(todos);
    res.end();
})
app.get('/', (req,res)=>{
    res.status(200).send('Todo application');
    res.end();
})
app.post('/addTodo', (req, res) => {
  try {
    console.log(req.body);
    let { id, text, completed } = req.body;
    if (
      typeof id !== "number" ||
      typeof text !== "string" ||
      typeof completed !== "boolean"
    ) {
      return res.status(400).send("Invalid request body");
    }
    todos.push({ id, text, completed });
    res.status(200).send("To-Do List update successfully");
  } catch (error) {
    console.log("Error updating todo:", error);
    res.status(500).send("Internal server error");
  }
});

app.delete("/deleteTodo/:id", (req, res) => {
  try {
    let id = req.params.id;
    let todoIndex = todos.findIndex((res)=> res.id == id);
    if(todoIndex == -1){
      res.status(200).send('No todo present at this index');
      return;
    }
    todos.splice(todoIndex,1);
    res.status(200).send("To-Do List update successfully", todos);
    res.end();
  } catch (error) {
    console.log("Error updating todo:", error);
    res.status(500).send("Internal server error");
  }
});

app.patch("/updateToDo/:id", (req, res) => {
  try {
     let updateToDO = req.body;
     let todoId = req.params.id;
    todos = todos.map((res)=>{
        if(res.id == todoId){
            return res = {...res ,...updateToDO};
        }
        return res;
    });    
    res.status(200).send("To-Do List update successfully", todos);
  } catch (error) {
    console.log("Error updating todo:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(4200, ()=>{
    console.log('server is listening at port number 4200')
})