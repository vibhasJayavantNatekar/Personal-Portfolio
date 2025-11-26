import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Resume from './Resume'
import { DiGitBranch, DiGithubBadge } from 'react-icons/di'
import { GiThreeBurningBalls, GiThreeKeys, GiTreeBranch } from 'react-icons/gi'
import { IoGitBranchSharp } from 'react-icons/io5'
import './navbar.css'
import { GoHome, GoProject, GoProjectTemplate } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { GrNotes } from 'react-icons/gr'
import { FaCross, FaHamburger, FaHammer } from 'react-icons/fa'
import { MdCancel, MdMenu } from 'react-icons/md'
import { CgCross } from 'react-icons/cg'

const Navbar = () => {
  const [ismenuopen, setismenuopen] = useState(false)
  return (
    <>
      <div className='nav-container' >
        <h2 className='logo' >Vn.</h2>
   
       {ismenuopen ? '':    
        <h2 onClick={()=>setismenuopen(true)} className='menu-icon' ><MdMenu/></h2>
       }
        <ul  className={ismenuopen ? 'side-bar ':'nav-items'} >
          
        {ismenuopen && (
  <h2 className='cancel-icon' onClick={() => setismenuopen(false)}>
    <MdCancel />
  </h2>
)}
          <NavLink to={'/'}><li> <GoHome/> Home</li></NavLink>
          <NavLink to={'/projects'}><li> <GoProject/> Project</li></NavLink>
          <NavLink to={'/about'}><li > <BiUser/> About me</li></NavLink>
            <NavLink to={'/about'}><li > <GrNotes/> Resume</li></NavLink>
          <NavLink to={'#'}> <li className='git-btn' >  <IoGitBranchSharp/> </li> </NavLink>



        </ul>
      </div>


    </>
  )
}

export default Navbar