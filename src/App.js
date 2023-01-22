import './App.css';
import Home from './page/Home.js'
import loginBtn from './login.png';
import logo from './logo.png';
import LoginErrorModal from './Modal/LoginErrorModal.js';
import { useState } from "react";

function App() {

  const [modal, setModal] = useState(false);

  return (
    <div className='App'>   
      <div className='mainBox'>
      <h1 className='logo'><img alt='logo' src={logo}/></h1><br/>
        <p><text className='welcome'>환영합니다!</text></p><br/>
        <p><input type="text" placeholder='아이디를 입력하세요.'></input></p>
        <p><input type="password" placeholder='비밀번호를 입력하세요.'></input></p>
        <br/>
        <p><button className='loginBtn' onClick={()=>{
          setModal(!modal)
        }}><img alt="login" src={loginBtn}/></button></p>
        <text className='joinBtn'>회원가입</text>
      </div>
      <text className='title'><h2><b>오늘의 투다</b></h2></text>
      { modal === true ? <LoginErrorModal modal={modal} setModal={setModal}/> : null}
      </div>
  );
}

export default App;