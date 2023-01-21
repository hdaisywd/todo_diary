const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcryptjs");  // 암호화 모듈

const jwt= require("jsonwebtoken");
//get our urls and secrets
const JWT_SECRET = process.env.SECRET_KEY;

//register 코드
router 
// @route  POST api/register
// @desc   Register user
// @access Public
  .post("/register/user", async (req, res) => {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const { name, email, password } = req.body;  //나중에 email 제거

    try {
      // email을 비교하여 user가 이미 존재하는지 확인
      let user = await User.findOne({ email });
			if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
			
      // user에 name, email, password 값 할당
      user = new User({
        name,
        email,
        password,
      });

      // password를 암호화 하기
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save(); // db에 user 저장

      res.redirect("/");
      console.log("Registered Successfully!");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//로그인 할때 비밀번호 확인 + jwt토큰 생성
const verifyUserLogin = async (email,password)=>{
  try {
      const user = await User.findOne({email}).lean()
      if(!user){
          return {status:'error',error:'user not found'}
      }
      if(await bcrypt.compare(password,user.password)){
          // creating a JWT token
          token = jwt.sign({id:user._id,username:user.email,type:'user'},JWT_SECRET,{ expiresIn: '2h'})
          return {status:'ok',data:token}
      }
      return {status:'error',error:'invalid password'}
  } catch (error) {
      console.log(error);
      return {status:'error',error:'timed out'}
  }
};

//login 코드
router
  .post('/login/user',async(req,res)=>{
  const {email,password}=req.body;
  // we made a function to verify our user login
  const response = await verifyUserLogin(email,password);
  if(response.status==='ok'){
      // storing our JWT web token as a cookie in our browser
      res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
      console.log("Log in succeeded!");
      res.redirect('/');
  }else{
      console.log("Log is not possible!");
      res.json(response);
  }
});

const verifyToken = (token)=>{
  try {
      const verify = jwt.verify(token,JWT_SECRET);
      if(verify.type==='user'){return true;}
      else{return false};
  } catch (error) {
      console.log(JSON.stringify(error),"error");
      return false;
  }
};



module.exports = router; // export