

import './Resume.css'
import Resumepdf from '../assets/resume.jpg'

const Resume = () => {
  return (
    <>
      <div id='resume' className="resume-wrapper">
        <h1 className='section-heading' ><span className="name " >Resume</span></h1>
        <div className="resume-conatiner">


          <div className="btn-container">
            <a
              href={Resumepdf}
              download="Vibhas_Natekar_Resume.pdf"
              className="download-btn">

              Download Resume
            </a>

          </div>

          <div className="resume-preview">
            <img src={Resumepdf} alt="" className='resume-img' />

          </div>

          <div className="btn-container">
            <a
              href={Resumepdf}
              download="Vibhas_Natekar_Resume.pdf"
              className="download-btn">

              Download Resume
            </a>





          </div>
        </div></div>

      </>
      )
}

      export default Resume