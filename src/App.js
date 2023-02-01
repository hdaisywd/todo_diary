import './App.css';
import { useState } from "react";
import LoginPage from "./page/LoginPage.js";

function App() {

  const [modal, setModal] = useState(false);

  return (
    <div className='App'>   
      <LoginPage/>
  </div>
  );
}

export default App;