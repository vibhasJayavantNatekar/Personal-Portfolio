import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Herosection from './components/herosection'

function App() {

  return (
    <>

  
     
      <BrowserRouter>
         <Navbar/>
         <Herosection/>
        <Routes>
          <Route path="projects" element={<Projects/>} />
          <Route path="about" element={<About/>} />
          <Route path="resume" element={<Resume/>} />


        </Routes>
      </BrowserRouter>


    </>
  );


}

export default App
