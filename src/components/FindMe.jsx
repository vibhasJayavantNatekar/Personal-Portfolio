import React from 'react'
import './FindMe.css'
import { PiLinkedinLogoBold, PiLinkedinLogoFill } from 'react-icons/pi'
import { RxGithubLogo } from 'react-icons/rx'

const FindMe = () => {
  return (
    <>
  <div className="section-wrapper">
  <h1 className="section-heading">
    <span className="name">Find Me</span>
  </h1>

  <p>
    Feel free to <span className="name">Connect</span> with me.
  </p>

  <div className="section-container">

    <a href="https://linkedin.com" className="logo-container" target="_blank">
      <PiLinkedinLogoFill />
    </a>

    <a href="https://github.com" className="logo-container" target="_blank">
      <RxGithubLogo />
    </a>

  </div>
</div>


    </>
  )
}

export default FindMe