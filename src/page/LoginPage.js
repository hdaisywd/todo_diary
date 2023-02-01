import './LoginPage.css';
import loginBtn from './login.png';
import logo from '../pages/resources/로고.png';
import LoginErrorModal from '../Modal/LoginErrorModal.js';
import { useState } from "react";
import {useNavigate} from  "react-router-dom";

export default function LoginPage(){

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    return (
    <div className='Login'>   
        <div className='mainBox'>
        <br/><h1 className='logo'><img alt='logo' src={logo}/></h1><br/>
        <p><text className='welcome'>환영합니다!</text></p><br/>
        <p><input type="text" className='id' placeholder='아이디를 입력하세요.'></input></p>
        <p><input className='id' type="password" placeholder='비밀번호를 입력하세요.'></input></p>
        <br/>
        <p><button className='loginBtn' onClick={()=>{
            setModal(!modal)
        }}><img alt="login" src={loginBtn}/></button></p>
        <text className='joinBtn' onClick={() => {
            navigate("/signup");
        }}>회원가입</text>
        </div>
        <text className='title'><b>오늘의 투다</b></text>
        { modal === true ? <LoginErrorModal modal={modal} setModal={setModal}/> : null}
    </div>
    )

}