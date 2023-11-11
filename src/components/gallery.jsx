import React from 'react'
import photo1 from './images/group_photo1.jpg'
import photo2 from './images/group_photo2.jpg'
import photo3 from './images/group_photo3.jpg'
import photo4 from './images/group_photo4.jpg'
import photo5 from './images/group_photo5.jpg'
import photo6 from './images/convocation.jpg'
import ss1 from './images/ss1.jpg'
import ss2 from './images/ss2.jpg'
import ss3 from './images/ss3.jpg'
import  "./gallery.css"


function Gallery() {
  return (
    <div className='gallery'>
      
        <img src={ss1} alt="afk" />
        <img src={ss2} alt="afk" />
        <img src={ss3} alt="afk" />
      
        
        <img src={photo1} alt="afk" />
        <img src={photo2} alt="afk" />
        <img src={photo3} alt="afk" />
        <img src={photo6} alt="afk" />  
       
        <img src={photo4} alt="afk" />
        <img src={photo5} alt="afk" />
        
        
        
        
        </div>    
      
    
  )
}

export default Gallery