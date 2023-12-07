import React from 'react'
import underconst from './images/Under-construction.gif'
import "./underconst.css"
const Underconstruction = () => {
  return (
    <div className='under'>
      <img src={underconst} alt="" />
      <div className="under-name">Website In Development</div>
    </div>
  )
}

export default Underconstruction
