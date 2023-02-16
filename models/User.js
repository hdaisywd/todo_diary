const mongoose = require("mongoose"); // mongoose 불러오기
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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

/* UserSchema.methods.comparePassword = function (plainPassword) {
  
  return bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => isMatch)
    .catch((err) => err);
};


UserSchema.methods.generateToken = function () {
  const token = jwt.sign(this._id.toHexString(), "secretToken");
  this.token = token;
  return this.save()
    .then((user) => user)
    .catch((err) => err);
};
UserSchema.statics.findByToken = function (token) {
  let user = this;
  return jwt.verify(token, "secretToken", function (err, decoded) {
    return user
      .findOne({ _id: decoded, token: token })
      .then((user) => user)
      .catch((err) => err);
  });
}; */



// model을 export 해주기
module.exports = User = mongoose.model("user", UserSchema, "user");