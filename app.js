const express = require("express");
require('dotenv').config({path:'variables.env'});
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')();   // 통신 수락해주기 : cors
//back과 front의 통신을 허락하기 위해서 사용
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//mongodb연결
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, (err) => {
  if(err){
    console.log(err);
  } else{
    console.log('Connected to database successfully!');
  }

}
);


// middlewares
app.use(cors);
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, 'todo_diary/build')));

//app.get('/', (req, res) => {
 //res.sendFile(path.join(__dirname, 'todo_diary/build/index.html'));
 //res.render('index.html');
//})
app.use(express.json());

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));
app.use(require("./routes/diary"));
app.use(require("./routes/user"));

app.get("/api/hello", (req, res) => {
  res.send("request test");
});

// server configurations....
app.listen(8080, () => console.log("Server started listening on port: 8080"));
