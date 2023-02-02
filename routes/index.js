const router = require("express").Router()
const Diary = require("../models/Diary");
const Todo = require("../models/Todo");
const User = require("../models/User");

// routes will be here....
// router.get("/", async(req, res) => {
//     const allTodo = await Todo.find();
//     res.render("index", {todo: allTodo})
// })

router.get("/diary", /*로그인했니,*/ async(req, res) => {
   Diary.find({})
    .sort("-created_date") // 최근 작성된 다이어리 순으로 정렬
    .exec((err, Diary) => {
      if (err) return res.json(err);
      console.log(Diary);
      //res.json(diary);
      res.render("diary");
    });
    /*const allDiary = await Diary.find({})
    .sort("-created_date")
    .exec((err, Diary)=>{
        if(err) return res.json(err);
        res.render("diary", {Diary: allDiary});
    })*/
    //res.render("diary", {Diary: allDiary});  //{데이터이름표: 전송할 데이터}
    //res.render("diary",{diary: allDiary});
});
/*function 로그인했니(req,res,next){
    if(req.user){
        next()
    }else{
        res.send("로그인안하셨는데요?")
    }
}
*/
router.get("/todo", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("todo", {todo: allTodo})
});

router.get("/user", async(req, res) => {
    const allUser = await User.find();
    res.render("usesr", {user: allUser})
});

router.get("/", async(req, res)=> {
    res.render("index");
 });

router.post("/login", async(req,res)=>{
    res.render("login")
});

router.post("/register", async(req,res)=>{
    res.render("register")
});





module.exports = router;