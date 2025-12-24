
import './About.css'
import ProfileImg from '../assets/profile.png'
import SkillSets from './SkillSets'

const About = () => {
  return (
    <>
      <div id='about' className="about-wrapper">
        <div className="about-container">
          <div className="my-self">
            <h1 className='section-heading'>Know Who <span className='name'>I'M </span> </h1>
            <p>Hi everyone! I'm <span className="name">Vibhas Natekar </span> from Maharastra , India   <br /> I'm currently pursuing <span className="name" > BCA </span> at <span className="name" >Kavi Kulguru Kalidas  Sanskrit Vishwvidyalay, Ramtek </span> <br /> I build full-stack applications using <span className="name"> MongoDB , Express , React , and Node.js </span>,and I love Creating modern UIs with powerful backend logic.   </p>
          </div>
          <img src={ProfileImg} alt="" className='profile-avatar' />
        </div>

        <SkillSets/>
      </div>
    </>
  )
}

export default About