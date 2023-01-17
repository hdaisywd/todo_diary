const router = require("express").Router();
const User = require("../models/User");

const express = require("express"); 
const bcrypt = require("bcryptjs");        // 암호화 모듈

router 
// @route  POST api/register
// @desc   Register user
// @access Public
  .post("/register/user", async (req, res) => {
    // req의 body 정보를 사용하려면 server.js에서 따로 설정을 해줘야함
    const { name, email, password } = req.body;

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

module.exports = router; // export