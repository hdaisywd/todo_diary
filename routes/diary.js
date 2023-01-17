const router = require("express").Router();
const Diary = require("../models/Diary");

// routes
router

//<form action="/add/todo" method="POST" class="d-flex">
  .post("/add/diary", (req, res) => {
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
  })

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

module.exports = router;