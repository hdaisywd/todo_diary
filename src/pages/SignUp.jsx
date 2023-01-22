import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import "./main.css";
import regiserBtn from "./resources/회원가입.png";
import logo from "./resources/로고.png";
import Modal from "react-modal";
import PasswordModal from './PasswordModal';
function SignUp(){
    //const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) =>{
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호를 다시 확인해주세요.');
        }

        let body = {
            id: Id,
            password: Password,
            confirmpassword: ConfirmPassword,
        }
    }

  
    return (
    
    <div className='signup'>
            <div className="mainBox">
                <h1><img className='logo' alt='logo' src={logo}/></h1>
                <p id='registerText'>회원 가입</p>
                <form className="register" onSubmit={onSubmitHandler}>
                    <label>아이디</label>
                    <input className='input' placeholder="아이디를 입력하시오." type='id' value={Id} onChange={onIdHandler}/>
                    <label>비밀번호</label>
                    <input className='input' placeholder="비밀번호를 입력하시오." type='password' value={Password} onChange={onPasswordHandler}/>
                    <label>비밀번호 확인</label>
                    <input className='input' placeholder="비밀번호를 다시 입력하시오." type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    <br/>
                    <button formAction='' onClick={()=>setModalIsOpen(!modalIsOpen)}>
                        <img alt="register" src={regiserBtn}/>
                    </button>
                    { modalIsOpen === true ? <PasswordModal modal={modalIsOpen} setModal={setModalIsOpen}/> : null}

                </form>
            </div>
        </div>
    )
}

export default SignUp;