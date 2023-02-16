import Todo from "./Todo";
import { Nav } from 'react-bootstrap';
import DiaryMain from "../pages/Diary/DiaryMain";
import {useNavigate} from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
return(
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
            <Nav.Link href="/diary" onClick={()=>{
                <DiaryMain/>
            }}>Diary</Nav.Link>
        </Nav.Item>
        </Nav>
);
}

export default Navbar;