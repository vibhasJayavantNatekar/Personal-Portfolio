
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

          <a href="https://www.linkedin.com/in/vibhas-natekar-75a410232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="logo-container" target="_blank">
            <PiLinkedinLogoFill />
          </a>

          <a href="https://github.com/vibhasJayavantNatekar" className="logo-container" target="_blank">
            <RxGithubLogo />
          </a>

        </div>
      </div>


    </>
  )
}

export default FindMe