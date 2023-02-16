const express = require("express");
const router = express.Router();
//const Diary = require("../models/Diary");
//const Todo = require("../models/Todo");
const User = require("../../models/User");
const Diary = require("../../models/Diary");
const Todo = require("../../models/Todo");

router.get("/", async(req,res) => {
    res.json({ test: "dfs" });
});



router.post("/login", async(req,res)=>{});

router.post("/register", async(req,res)=>{});


router.get("/diary", /*로그인했니,*/ async(req, res) => {
    Diary.find({})
     .sort("-created_date") // 최근 작성된 다이어리 순으로 정렬
     .exec((err, Diary) => {
       if (err) return res.json(err);
       console.log(Diary);
       //res.json(diary);
       res.render("diary");
     });
    });

    router.get("/todo", async(req, res) => {
        const allTodo = await Todo.find();
        res.render("todo", {todo: allTodo})
    });
    




module.exports = router;