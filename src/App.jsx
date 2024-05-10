import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home,About,Contact,Projects} from './pages'
import { NavBar } from "./componets/NavBar";



function App  ()  {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='react2/' element={<Home/>}/>
          <Route path='react2/about' element={<About/>} />
          <Route path='react2/projects' element={<Projects/>} />
          <Route path='react2/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;