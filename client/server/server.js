const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();
const test = require("./Router/test");

//미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/api", test);

const port = 5000; //노드서버가 사용할 포트번호
app.listen(port,()=> console.log('Listening on port 5000'));