const router = require("express").Router();
const Todo = require("../../models/Todo");

// routes
router


//CREATE
//<form action="/add/todo" method="POST" class="d-flex">
  .post("/add/todo", (req, res) => {
    const todo = new Todo();
    todo.todo = req.body.todo;
    todo.due_date = req.body.due_date;
    
  
    todo.save((err, result) => {
      if (err) res.json(err);
      console.log("Successfully added todo!");
      res.json(result);
      
    });
  })

  //READ
  .get("/find/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.findOne({_id}, (err, result) => {
      if(err) res.json(err);
      res.json(result);
    })
  })

  //UPDATE
  .put("/update/todo/:_id", (req, res)=> {
    const{_id} = req.params;
    Todo.findOneAndUpdate({_id}, 
      req.body,
      (err, result)=> {
        if (err) res.json(result);
        res.json({message: "todo updated"});
      })
  })

  //DELETE
  // <a href="/delete/todo/<%= todos._id %>"
  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;