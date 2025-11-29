import React from 'react'
import './Footer.css'
import { BiLogoGithub } from 'react-icons/bi'
import { RxLinkedinLogo } from 'react-icons/rx'

const Footer = () => {
  return (
   

    <>
    
    <div className="footer-wrapper">
      <div className="footer-container">
        <p >Designed and Developed by Vibhas Natekar</p>
        <p className='copy'>Copyright @ 2025 Vn</p>
        <div className="social_icons">
          <h2> <a href="https://github.com/vibhasJayavantNatekar/Inventory-App.git"><BiLogoGithub/></a> <a href="https://www.linkedin.com/in/vibhas-natekar-75a410232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <RxLinkedinLogo/> </a> </h2>
        </div>
      </div>
    </div>

    </>


  )
}

export default Footer