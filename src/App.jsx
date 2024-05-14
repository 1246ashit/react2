import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home,About,Contact,Projects} from './pages'
import { NavBar } from "./componets/NavBar";



function App  ()  {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='threejs_play/' element={<Home/>}/>
          <Route path='threejs_play/about' element={<About/>} />
          <Route path='threejs_play/projects' element={<Projects/>} />
          <Route path='threejs_play/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;