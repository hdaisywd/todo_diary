import {React} from "react";
import {Routes, 
    Route, useNavigate, Link} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const goRegister = () =>{
        navigate('/signUp');
    }

    return(
        <button type="button" onClick={goRegister}>회원가입</button>
    )
}

export default Home;