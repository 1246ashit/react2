import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home,About,Contact,Projects} from './pages'
import { NavBar } from "./componets/NavBar";



function App  ()  {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;