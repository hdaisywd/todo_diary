import './App.css';
import Home from './page/Home.js'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='App'>
      <div className='mainBox'>
        <h1>😊</h1><br/><br/>
        <p><h1>환영합니다!</h1></p><br/><br/>
        <p><input type="text" placeholder='아이디를 입력하세요.'></input></p>
        <p><input type="text" placeholder='비밀번호를 입력하세요.'></input></p>
        <br/><br/>
        <p><Button variant="info">LOGIN</Button></p>
        <text>회원가입</text>
      </div>
    </div>
  );
}

export default App;