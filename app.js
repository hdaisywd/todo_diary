const express = require("express");
require('dotenv').config({path:'variables.env'});
const mongoose = require("mongoose");


const app = express();
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, (err) => {
  if(err){
    console.log(err);
  } else{
    console.log('Connected to database successfully!');
  }

}
);


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.json())

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))
app.use(require("./routes/diary"))
app.use(require("./routes/register"))

// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));