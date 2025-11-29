import React from 'react'
import './Projects.css'
import Inventory from '../assets/inventory-app.png'
import Natural from '../assets/natural_icecream.png'
const Projects = () => {
  return (
    <>
      <div id='projects' className="project-wrapper">
        <h1 className='section-heading'>My Recent <span className='name'>Work</span></h1>
        <p>Here's few <span className="name">Projects</span> I've Worked recently.</p>

        <div className="project-container">
          <div className="project-card">
            <div className="img-container">   <img src={Inventory} alt="" height={200} width={300} /> </div>
            <p className="title">Inventory App</p>
            <p>A MERN-based inventory system enabling CRUD operations, authentication, role-based access, and responsive management of products, categories, suppliers, and users, ensuring simple, scalable, and efficient inventory control.</p>

            <div className="tect-stack">
              <p>React</p> <p>Node Js</p> <p>Express</p> <p>Mongodb</p>

            </div>
            <div className="btn-container">
              <button>GitHub</button>
              <button>Live</button>
            </div>

          </div>



          <div className="project-card">
            <div className="img-container">   <img src={Natural} alt="" height={200} width={300} /> </div>
            <p className="title">Natural Ice-Cream Website - Clone</p>
            <p>A responsive Natural Ice Cream website clone built using HTML, CSS, and Bootstrap, featuring clean UI, product sections, smooth navigation, and a modern, brand-inspired layout for a visually appealing and extraordinarily delightful user experience.</p>

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

export default Projects  