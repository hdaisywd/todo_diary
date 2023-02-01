import { Nav } from 'react-bootstrap';
import Todo from './Todo.js'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import './Todo.css';
import './Home.css';
import logo from '../page/logo.png';
import HomePage from './HomePage.js';
import styled from "styled-components";

function Home(){
    
    
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
            <Route path="/home" element={<HomePage/>}/>
            
                {/* <Route path="/todo" element={<Todo/>}></Route> */}
            </Routes>
        </div>
    )
}

export default Home;