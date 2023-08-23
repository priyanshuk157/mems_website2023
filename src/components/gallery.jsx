import React from 'react'
import img from '../image.png'

function Gallery() {
  return (
    <div className='container d-flex justify-center align-center flex-wrap gap-3'>
       <div >
        <img src={img} alt="afk" />
       </div>
       <div>
        <img src={img} alt="afk" />
       </div>
       <div >
        <img src={img} alt="afk" />
       </div>
       <div >
        <img src={img} alt="afk" />
       </div>       
    </div>
  )
}

export default Gallery