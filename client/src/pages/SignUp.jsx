import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import registerBtn from "./resources/회원가입.png";
import logo from "./resources/로고.png";
import PasswordModal from './PasswordModal';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../_actions/user_action';

const SignUP = styled.div`
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
    margin-left: 34%;
    margin-top: 6%;
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

    const TextLogo = styled.p`
    position: fixed;
    color: #6EE9FA;
    font-size: 25px;
    font-weight: bold;
    right: 10px;
    bottom: 10px;
    `;
    
function SignUp(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        }

        dispatch(registerUser(body)).then((response) =>{{
            if(response.payload.success){
                navigate("/");
            } else {
                alert("회원가입에 실패했습니다.");
            }
        }});
    };

    
    
    return (
    
        <SignUP>
            <MainBox>
                <Logo className='logo' alt='logo' src={logo}/>
                <RegisterText>회원 가입</RegisterText>
                <Register className="register" onSubmit={onSubmitHandler}>
                    <Input className='input' placeholder="아이디를 입력하시오." type='id' value={Id} onChange={onIdHandler}/><br/>
                    <Input className='input' placeholder="비밀번호를 입력하시오." type='password' value={Password} onChange={onPasswordHandler}/><br/>
                    <Input className='input' placeholder="비밀번호를 다시 입력하시오." type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    <br/>
                    <Button formAction='' type="submit" onClick={()=>setModalIsOpen(!modalIsOpen)}>
                        <img alt="register" src={registerBtn}/>
                    </Button>
                    { modalIsOpen === true ? <PasswordModal modal={modalIsOpen} setModal={setModalIsOpen}/> : null}
                </Register>
            </MainBox>
            <TextLogo>오늘의 투다</TextLogo>
        </SignUP>
    )
}

export default SignUp;