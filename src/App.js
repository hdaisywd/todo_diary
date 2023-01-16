import './App.css';
import Home from './page/Home.js'
import Button from 'react-bootstrap/Button';
import loginBtn from './login.png';
import logo from './logo.png';
import { Toast } from 'bootstrap';

function App() {
  return (
    <div className='App'>
      <div className='mainBox'>
        <h1><img alt='logo' src={logo}/></h1><br/><br/>
        <p><h1 className='welcome'>환영합니다!</h1></p><br/><br/>
        <p><input type="text" placeholder='아이디를 입력하세요.'></input></p><br/>
        <p><input type="password" placeholder='비밀번호를 입력하세요.'></input></p>
        <br/><br/>
        <p><img alt="login" src={loginBtn}/></p>
        <text>회원가입</text>
      </div>
      <text className='title'><h1>오늘의 투다</h1></text>
    </div>
  );
}

export default App;