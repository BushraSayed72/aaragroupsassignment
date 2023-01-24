import Navbar from './Components/Navbar'
import './App.css';
import Home from './Components/Home'
import { Route, Routes} from "react-router-dom";
import Client from './Components/Client'

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/Client" element={<Client/>} />
    </Routes>
    
      
    </div>
  );
}

export default App;
