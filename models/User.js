const mongoose = require("mongoose"); // mongoose 불러오기

// Schema 생성
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  
  password: {
    type: String,
    required: true,
  },
  pwc:{   // 비밀번호 재확인
    type: String,
    required: true
  }
});

// model을 export 해주기
module.exports = User = mongoose.model("user", UserSchema, "user");