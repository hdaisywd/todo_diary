import './LoginPage.css';
import loginBtn from './login.png';
import logo from '../pages/resources/로고.png';
import LoginErrorModal from '../Modal/LoginErrorModal.js';
import { useState, useEffect } from "react";
import {useNavigate} from  "react-router-dom";
import axios from 'axios';

export default function LoginPage(){

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onNameHandler = (event) =>{
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Name', name);
        console.log('Password', password);

        let body = {
            Name : name,
            password : password,
        };

    }

    return (
    <div className='Login'>   
        <div className='mainBox'>
        <br/><h1 className='logo'><img alt='logo' src={logo}/></h1><br/>
        <p><text className='welcome'>환영합니다!</text></p><br/>
        <p><input type="text" className='id' placeholder='아이디를 입력하세요.' 
        onChange={onNameHandler}></input></p>
        <p><input className='id' type="password" placeholder='비밀번호를 입력하세요.' 
        onChange={onPasswordHandler}></input></p>
        <br/>
        <p><button className='loginBtn' onClick={()=>{
            //id, passwd가 일치하면 --> navigate("/home")
            //일치하지 않으면 --> setModal(!modal)
            //setModal(!modal);
            navigate("/home");
        }}><img alt="login" src={loginBtn}/></button></p>
        <text className='joinBtn' onClick={() => {
            navigate("/signUp");
        }}>회원가입</text>
        </div>
        <text className='title'><b>오늘의 투다</b></text>
        { modal === true ? <LoginErrorModal modal={modal} setModal={setModal}/> : null}
    </div>

    )

}