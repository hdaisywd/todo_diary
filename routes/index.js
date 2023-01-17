const router = require("express").Router()
const Diary = require("../models/Diary");
const Todo = require("../models/Todo");
const User = require("../models/User");

// routes will be here....
// router.get("/", async(req, res) => {
//     const allTodo = await Todo.find();
//     res.render("index", {todo: allTodo})
// })

router.get("/diary", async(req, res) => {
    const allDiary = await Diary.find();
    res.render("diary", {diary: allDiary})
})

router.get("/todo", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("todo", {todo: allTodo})
})

router.get("/register", async(req, res) => {
    const allUser = await User.find();
    res.render("register", {user: allUser})
})

router.get("/", async(req, res)=> {
    res.render("index")
})


module.exports = router;