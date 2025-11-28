import React from 'react'
import './Projects.css'
import Inventory from '../assets/inventory-app.png'
const Project = () => {
  return (
    <>
      <div className="project-wrapper">
        <h1 className='section-heading'>My Recent <span className='name'>Work</span></h1>
        <p>Here's few <span className="name">Projects</span> I've Worked recently.</p>

        <div className="project-container">
          <div className="project-card">
            <div className="img-container">   <img src={Inventory} alt="" height={200} width={300} /> </div>
            <p className="title">Inventory App</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni expedita inventore delectus reprehenderit deserunt quo sunt id eos fugiat, cum explicabo atque nemo, provident tempora.</p>

            <div className="tect-stack">
              <p>React</p> <p>Node Js</p> <p>Express</p> <p>Mongodb</p>

            </div>
            <div className="btn-container">
              <button>GitHub</button>
              <button>Live</button>
            </div>

          </div>



          <div className="project-card">
            <div className="img-container">   <img src={Inventory} alt="" height={200} width={300} /> </div>
            <p className="title">Netlify Website - Clone</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni expedita inventore delectus reprehenderit deserunt quo sunt id eos fugiat, cum explicabo atque nemo, provident tempora.</p>

            <div className="tect-stack">
              <p>Html</p> <p>Css</p> <p>Bootstrap</p>

            </div>
            <div className="btn-container">
              <button>GitHub</button>
              <button>Live</button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Project  