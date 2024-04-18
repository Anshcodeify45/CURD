import './App.css';
import Navbar from './Components/Navbar';
import CURD from './Components/CURD';
import Alluser from './Components/Alluser';
import AddUser from './Components/AddUser';
import { BrowserRouter,Routes , Route } from 'react-router-dom' 
import Edituser from './Components/Edituser';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      < Route path='/' element={<CURD/>}/>
      < Route path='/all' element={ <Alluser/>}/>
      < Route path='/add' element={<AddUser/>}/>
      < Route path='/edit/:id' element={<Edituser/>}/>   
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
