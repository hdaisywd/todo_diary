var { User } = require("../../models/User");

// 인증처리
let auth = (req, res, next) => {
  let token = req.cookies.x_auth;           // 서버에서 쿠키에 넣을때 x_auth라는 이름으로 넣었다.

  // Token 복호화 후 유저찾기
  User.findByToken(token)
    .then((user) => {
      if (!user) return res.json({ isAuth: false, error: true });
      req.token = token;
      req.user = user;
      next();
    })
    .catch((err) => {
      throw err;
    });

    
};

module.exports = { auth };