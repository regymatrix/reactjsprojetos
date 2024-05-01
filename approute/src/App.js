
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";

import  Home  from './pages/home';
import  Login from './pages/login'
import Feed from './pages/feed'
import  Hookteste  from "./pages/hookteste";
import {UserContextProvider} from "./contexts/userContext"

function App() {
  return (
    <Router>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />        
        <Route path="/feed" element={<Feed/>} />    
        <Route path="/hookteste" element={<Hookteste/>} />    

      </Routes>
     </UserContextProvider>
    </Router>
  );
}

export default App;
