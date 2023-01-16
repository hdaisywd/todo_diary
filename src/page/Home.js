import Nav from 'react-bootstrap/Nav';
import Todo from './Todo.js'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function Home(){
    let navigate = useNavigate()

    return(
        <div className='App'>
        <Nav variant="tabs" defaultActiveKey="/home">
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
            <div className='mainBox'>
            <h1>HOME</h1>
            <h1>😊</h1>
            <h2>오늘의 투다에 오신 것을 환영합니다!</h2>
        </div>
        }>
        </Route>
            <Route path="/todo" element={<Todo/>}></Route>
        </Routes>
    </div>
    )
}

export default Home;