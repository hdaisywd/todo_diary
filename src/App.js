import './App.css';
import LoginPage from "./page/LoginPage.js";

import './App.css';
import SignUp from './pages/SignUp';
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DiaryMain from './pages/Diary/DiaryMain';
import DiaryWrite from './pages/Diary/DiaryWrite';
import DiaryView from './pages/Diary/DiaryView';
import Todo from './page/Todo';
import Home from './page/Home';
import HomePage from './page/HomePage';

function App() {

  return (
    <div className='App'>   
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/diary" element={<DiaryMain/>}/>
        <Route path="/diary-write" element={<DiaryWrite/>}/>
        <Route path="/diaryView" element={<DiaryView/>}/>
      </Routes>
  </div>
  );
}

export default App;