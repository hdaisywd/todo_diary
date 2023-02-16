const router = require("express").Router();
const Diary = require("../../models/Diary");
const moment = require("moment");
// routes
//router

//<form action="/add/todo" method="POST" class="d-flex">
  /*.post("/add/diary", (req, res) => {
    const { title, post, date } = req.body;
    const newDiary = new Diary({ title, post, date });
    
    // save the todo
    newDiary
      .save()
      .then(() => {
        console.log("Successfully added diary!");
        res.redirect("/diary");
      })
      .catch((err) => console.log(err));
  })*/

  // <a href="/delete/todo/<%= todos._id %>"
  // .get("/delete/diary/:_id", (req, res) => {
  //   const { _id } = req.params;
  //   Diary.deleteOne({ _id })
  //     .then(() => {
  //       console.log("Deleted Diary Successfully!");
  //       res.redirect("/");
  //     })
  //     .catch((err) => console.log(err));
  // });


//RETRIEVE
//전체 diary 출력하기
/*router.get("/all/diary", (req, res) => {
  Diary.find({})
    .sort("-created_date") // 최근 작성된 다이어리 순으로 정렬
    .exec((err, diary) => {
      if (err) return res.json(err);
      res.json(diary);
    });
});*/

//특정 다이어리 출력
router.get("/find/diary/:_id", (req, res) => {
  const { _id } = req.params;
  Diary.findOne({ _id }, (err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});


//CREATE
router.post("/add/diary", (req, res) => {
  const diary = new Diary();
  diary.title = req.body.title;
  diary.post = req.body.post;
  // moment 모듈을 사용하여 날짜 포매팅
  diary.created_date = moment().format("YYYY-MM-DD");

  diary.save((err, result) => {
    if (err) res.json(err);
    console.log("Successfully added diary!");
    res.json(result);
    //res.redirect("/diary");
  });
});


//UPDATE
router.put("/update/diary/:_id", (req, res) => {
  const { _id } = req.params;
  req.body.updated_date = moment().format("YYYY-MM-DD");
  Diary.findOneAndUpdate({ _id},
    req.body,
    (err, result) => {
      if (err) res.json(result);
      res.json({ message: "diary updated" });
    }
  );
});

//DELETE
/*router.delete("delete/diary/:_id", (req, res) => {
  Diary.deleteOne({ _id: req.params.diary_id }, (err) => {
    if (err) return res.json(err);
    res.status(204).end();
  });
});*/
router.get("/delete/diary/:_id", (req, res) => {
     const { _id } = req.params;
    Diary.deleteOne({ _id })
      .then(() => {
         console.log("Deleted Diary Successfully!");
        res.redirect("/diary");
      })
      .catch((err) => console.log(err));
   });



module.exports = router;