import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {Routes, 
Route, useNavigate, Link} from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
