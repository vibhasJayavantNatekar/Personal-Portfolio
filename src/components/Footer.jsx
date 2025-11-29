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
          <h2><BiLogoGithub/> <RxLinkedinLogo/></h2>
        </div>
      </div>
    </div>

    </>


  )
}

export default Footer