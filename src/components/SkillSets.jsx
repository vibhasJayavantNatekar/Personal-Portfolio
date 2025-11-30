
import {  SiCplusplus, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiOracle, SiPhp, SiPostman, SiReact, SiRender,  SiXampp } from 'react-icons/si'
import './Skillsets.css'
import { DiJava} from 'react-icons/di'

import { BiLogoChrome, BiLogoGithub, BiLogoNetlify, BiLogoVisualStudio } from 'react-icons/bi'


const SkillSets = () => {



    return (
        <>

            <div className="skillsets-wrapper">
                <h1 className='skill-heading' ><span className='name'>Skillsets</span></h1>
                <div className="skill-container">
                     
                    <h2 className='skil-badge'>  <span><SiHtml5/></span> HTML</h2>
                    <h2 className='skil-badge'>  <span><SiCss3/></span> CSS</h2>


                    <h2 className='skil-badge'>  <span><SiJavascript/></span> Javascript</h2>
                    <h2 className='skil-badge'>  <span><SiReact/></span> React Js</h2>

                    <h2 className='skil-badge'>  <span><SiNodedotjs/></span> Node Js</h2>

                    <h2 className='skil-badge'>  <span><SiExpress/></span> Express</h2>

                    <h2 className='skil-badge'>  <span><SiMongodb/></span> MongoDB</h2>
                     <h2 className='skil-badge'>  <span><SiOracle/></span> Oracle DB</h2>
              
                      <h2 className='skil-badge'>  <span><SiCplusplus/></span> C / C++ Programming</h2>
                     

                      <h2 className='skil-badge'>  <span><DiJava/></span> Java</h2>
                      <h2 className='skil-badge'>  <span><SiGit/></span>Git</h2>

                      <h2 className='skil-badge'>  <span><SiPostman/></span> Postman</h2>

                    







                </div>
                <div className="tools">
                    <h1 className='skill-heading' ><span className='name'>Tools</span> I use</h1>
                   <div className="skill-container">
                      <h2 className='skil-badge'>  <span><BiLogoVisualStudio/></span> Vs Code</h2>
                      <h2 className='skil-badge'>  <span><BiLogoChrome/></span> Chrome </h2>
                      <h2 className='skil-badge'>  <span><BiLogoGithub/></span> GitHub </h2>
                      <h2 className='skil-badge'>  <span><BiLogoNetlify/></span> Netlify </h2>
                      <h2 className='skil-badge'>  <span><SiRender/></span>Render </h2>
                      <h2 className='skil-badge'>  <span><SiXampp/></span>Xampp </h2>





                        </div>
                </div>
            </div>


           

        </>
    )
}

export default SkillSets