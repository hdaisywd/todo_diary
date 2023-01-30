import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import regiserBtn from "./resources/회원가입.png";
import logo from "./resources/로고.png";
import PasswordModal from './PasswordModal';
import styled from 'styled-components';
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

    const SignUp = styled.div`
    background-color:#64e1f160;
    display: flex;
    width: 100%;
    height: 100vh;
    `;

    const MainBox = styled.div`
    align-items: center;
    position: fixed;
    background-color: #fff;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 5px 5px 20px gray;
    height: 550px;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    `;
    const Logo = styled.img`
    position:relative;
    margin-left: 33%;
    margin-top: 5%;
    `;

    const RegisterText = styled.p`
    margin-top: 0%;
    font-size:  xx-large;
    font-weight: bold;
    color: rgb(150, 150, 150);
    text-align: center ;
    `;

    const Register = styled.form`
    margin-top: 0%;
    display: flex;
    flex-direction: column;
    `;

    const Input = styled.input`
    align-self: center;
    width: 65%;
    height: 45px;
    border: 1px solid #64e1f17a;
    border-radius: 10px;
    `;

    const Button = styled.button`
    background-color: rgba(255, 255, 255, 0);
    border: none;
    `;
    
    return (
    
    <SignUp>
            <MainBox>
                <Logo className='logo' alt='logo' src={logo}/>
                <RegisterText>회원 가입</RegisterText>
                <Register className="register" onSubmit={onSubmitHandler}>
                    <Input className='input' placeholder="아이디를 입력하시오." type='id' value={Id} onChange={onIdHandler}/><br/>
                    <Input className='input' placeholder="비밀번호를 입력하시오." type='password' value={Password} onChange={onPasswordHandler}/><br/>
                    <Input className='input' placeholder="비밀번호를 다시 입력하시오." type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    <br/>
                    <Button formAction='' onClick={()=>setModalIsOpen(!modalIsOpen)}>
                        <img alt="register" src={regiserBtn}/>
                    </Button>
                    { modalIsOpen === true ? <PasswordModal modal={modalIsOpen} setModal={setModalIsOpen}/> : null}
                </Register>
            </MainBox>
        </SignUp>
    )
}

export default SignUp;