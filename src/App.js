import logo from './logo.svg';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DiaryMain from './pages/Diary/DiaryMain';
import DiaryWrite from './pages/Diary/DiaryWrite';
import DiaryView from './pages/Diary/DiaryView';

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/diary" element={<DiaryMain/>}/>
        <Route path="/diary-write" element={<DiaryWrite/>}/>
        <Route path="/diaryView" element={<DiaryView/>}/>
      </Routes>
    </div>
  );
}

export default App;
