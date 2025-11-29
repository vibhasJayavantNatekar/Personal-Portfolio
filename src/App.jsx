import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Herosection from './components/herosection'
import FindMe from './components/FindMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {

  return (
    <>

   <ParticlesBackground />

     
        {/* Main content */}
        <Navbar />
        <Herosection />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />

      



    </>
  );


}

export default App
