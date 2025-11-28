import React from 'react'
import { DiJavascript } from 'react-icons/di'

const Skillbadge = ({skill}) => {
  return (
    <>
    
    <div className="skill-badge-container">
        
        <h1> <DiJavascript/>{skill}</h1>
        <h1></h1>

         {/* <h1> <Di+{skill}/>{skill}</h1>
        <h1></h1> */}


    </div>
    
    </>
  )
}

export default Skillbadge