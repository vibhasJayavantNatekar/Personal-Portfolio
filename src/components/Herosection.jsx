import React from 'react'
import './Herosection.css'
import { NavLink } from 'react-router-dom'
import Illustrate from '../assets/illustrate.png'


const Herosection = () => {
  return (
    <>

    <div className="hero-container">

        <div className="hero-right">

          <div className="heading-container">
          <h1>Hi There !</h1>
          <h1>I'M <span className='name' > VIBHAS NATEKAR </span></h1>
          <h1 className='title'> MERN STACK - Web Developer </h1>

          </div>

          <div className="btn-container">
            <button>Resume</button>
           <button>Contact</button> 
          </div>

        
      </div>

      <div className="hero-left">
        <img src={Illustrate} alt="" className='dev-img'/>

      </div>

      
    </div>

    </>
  )
}

export default Herosection  