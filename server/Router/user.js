 const express = require("express");
const router = express.Router();
const User = require("../../models/User");

const bcrypt = require("bcryptjs");  // 암호화 모듈

const jwt= require("jsonwebtoken");
//get our urls and secrets
const JWT_SECRET = process.env.SECRET_KEY;

const saltRounds = 10;
const { auth } = require("./auth"); 




 //register 코드
router 
// @route  POST api/register
// @desc   Register user
// @access Public
  .post("/register/user", function (req, res, next) {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const{name, password, pwc} = req.body;
    let user = new User(req.body);
    if(user.password !== user.pwc){
      return res.send("Your password and password confirmation have to be same");
    }

     User.findOne({name}, function(err,docs){
      if(err) throw err;  
      else if(docs == null){
        if(user.name&&user.password&&user.pwc){
          return next();
        }
        else return res.send("please enter all the blanks");
      }
      else{
        return res.send("Your entered name already exists.");
      }
     });
    });

    router.post("/register/user", function (req, res){
      let user = new User(req.body);
      bcrypt.genSalt(saltRounds, function(err, salt){
        if(err) throw err;
        bcrypt.hash(user.password, salt, function(err, hash){
          if(err) throw err;
          user.password = hash;
          user.save();
          return res.send("You have just created your new account!")
        })
      })

    });
    



//login 코드
router
  .post('/login/user',function(req,res,next){
  const {name,password}=req.body;
  console.log('req.body: ', req.body);
    let user = new User(req.body);
    User.findOne({name}, function(err, docs) {
        if(err) throw err;
        else if(docs == null) { // Entered ID does not exist.
            return console.log('Entered ID does not exist.');
        } else {  // when entered ID matches.
            bcrypt.compare(user.password, docs.password, function (err, answer) {
                if (err) throw err;
                if(answer) {
                    req.user = docs;
                    return next();
                } else {
                    return res.json('Your password does not match with your ID.');
                }
            })
        }
    });
});

router
  .post('/login/user',function(req,res){
    const docs = req.user;
    const payload = { // putting data into a payload
        docs,
    };
    // generating json web token and sending it
    jwt.sign(
    payload, // payload into jwt.sign method
    JWT_SECRET, // secret key value
    { expiresIn: "30m" }, // token expiration time
    (err, token) => {
        if (err) throw err;
        else {
            return res
            .cookie('user', token,{maxAge:30*60 * 1000}) // 1000 is a sec
            .json("Log in succeeded!")
            .end();
            
        }
    });
}); 


/* const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");  // 암호화 모듈
const jwt= require("jsonwebtoken");
//get our urls and secrets
const JWT_SECRET = process.env.SECRET_KEY;
const saltRounds = 10;
const { auth } = require("./auth"); 

router.post('/register/user',(req,res)=>{
  const user = new User(req.body)
  if(user.password !== user.pwc){
    return res.send("Your password and password confirmation have to be same");
  }
  User.findOne({name:req.body.name}, function(err,docs){
    if(err) throw err;  
    else if(docs == null){
      if(user.name&&user.password&&user.pwc){
        return  user.save((err, userInfo)=>{
          if(err) return res.json({success: false,err})
          return res.status(200).json({
            success:true
          })
        })
      }
      else return res.send("please enter all the blanks");
    }
    else{
      return res.send("Your entered name already exists.");
    }
   });
  
})
 */



module.exports = router; // export, 다른 파일에서도 사용할 수 있도록
