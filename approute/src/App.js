
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";

import  Home  from './pages/home';
import  Login from './pages/login'
import Feed from './pages/feed'
import  Hookteste  from "./pages/hookteste";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />        
        <Route path="/feed" element={<Feed/>} />    
        <Route path="/hookteste" element={<Hookteste/>} />    

      </Routes>
    </Router>
  );
}

export default App;
