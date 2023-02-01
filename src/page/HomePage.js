import "./Home.css";
import logo from "./logo.png";
import Navbar from "./Navbar";

function HomePage(){

    return (
    <>
    <Navbar></Navbar>
        <div className='todoBox'>
            <br/><text className='text_Home'>HOME</text><br/><br/><br/>
            <img className='logo_img' alt='logo' src={logo}/><br/><br/><br/><br/>
            <text className='text_Welcome'>오늘의 투다에 오신 것을 환영합니다!</text>
        </div>
        <text className='text_title'>오늘의 투다</text>
        </>
    );
    
}

export default HomePage;