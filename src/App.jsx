
import './App.css'
import Home from './Pages/Home';

import { Routes,Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';
import Header from './components/Header';

function App() {
 

  return (

    <>
  <Header/>
 <Routes>

  <Route path="/" element={<Home 
  name="ALEN B KOSHY"
  role="MERN Stack Developer"
  bio="I design and develop modern, interactive and scalable web applications."
  img="https://static.vecteezy.com/system/resources/thumbnails/024/346/392/small/3d-cartoon-businesswoman-on-transparent-background-generative-ai-png.png"
/> } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} /> 
 </Routes>
    </>
  );
}

export default App
