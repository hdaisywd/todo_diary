import { Nav } from 'react-bootstrap';
import Todo from './Todo.js'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './Todo.css';
import './Home.css';
import logo from '../page/logo.png';

function Home(){
    let navigate = useNavigate()

    return(
        <div className='Home'>
        <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/todo" onClick={()=>{
                <Todo/>
            }}>Todo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/diary">Diary</Nav.Link>
        </Nav.Item>
        </Nav>
        

        <Routes>
        <Route path="/home" element={
        <>
        <div className='todoBox'>
            <br/><text className='text_Home'>HOME</text><br/><br/><br/>
            <img className='logo_img' alt='logo' src={logo}/><br/><br/><br/><br/>
            <text className='text_Welcome'>오늘의 투다에 오신 것을 환영합니다!</text>
        </div>
        <text className='text_title'>오늘의 투다</text>
        </>
        }>
        </Route>
            {/* <Route path="/todo" element={<Todo/>}></Route> */}
        </Routes>
    </div>
    )
}

export default Home;