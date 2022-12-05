import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Chatroom from './Components/Chatroom/Chatroom';

function App() {
  return (
    <div className = "App" >
     
      <BrowserRouter>
     
      <Routes>
     
        <Route exact path = '/' element = { <Login/> } />
     
        <Route path = '/chatroom' element = { <Chatroom/> } />
     
      </Routes>
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;
