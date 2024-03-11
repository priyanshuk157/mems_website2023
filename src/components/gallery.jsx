import React, { useState } from 'react'

import photo1 from './images/group_photo1.jpg'
import photo2 from './images/group_photo2.jpg'
import photo3 from './images/group_photo3.jpg'
import photo4 from './images/group_photo4.jpg'
import photo5 from './images/group_photo5.jpg'
import photo6 from './images/convocation.jpg'
import ss1 from './images/ss1.jpg'
import ss3 from './images/ss3.jpg'

import {FaSearch} from "react-icons/fa"

import  "./gallery.css"


function Gallery() {
  const [name,setName] = useState()
  const [display,setDisplay] = useState(false)

 


  return ( 
   <div className='gallery'>
      <div className='gallery-img'>
      <img src={ss1} className='pic img' alt="afk"  />
        <div className='magnify' onClick={()=>{setName(ss1);setDisplay(true)}}>
          <FaSearch/>
        </div>

      </div>
      
        
        <div className='gallery-img'>
        <img src={ss3} className='pic img' alt="afk" />
        <div className='magnify' onClick={()=>{setName(ss3);setDisplay(true)}}>
          <FaSearch/>
        </div>

        </div>
        
        <div className='gallery-img'>
        <img src={photo1} className='pic img' alt="afk" />
        <div className='magnify' onClick={()=>{setName(photo1);setDisplay(true)}}>
          <FaSearch/>
        </div>
        </div>
        
        
        <div className='gallery-img'>
        <img src={photo2} className='pic img' alt="afk" />
        <div className='magnify' onClick={()=>{setName(photo2);setDisplay(true)}}>
          <FaSearch/>
        </div>

        </div>
        
        <div className='gallery-img'>
        <img src={photo3} className='pic img' alt="afk" />
        <div className='magnify' onClick={()=>{setName(photo3);setDisplay(true)}}>
          <FaSearch/>
        </div>

        </div>
       
        <div className='gallery-img'>
          <img src={photo6} className='pic img' alt="afk" />  
          <div className='magnify' onClick={()=>{setName(photo6);setDisplay(true)}}>
            <FaSearch/>
          </div>

        </div>

        <div className='gallery-img'>
          <img src={photo4} className='pic img' alt="afk" />
          <div className='magnify' onClick={()=>{setName(photo4);setDisplay(true)}}>
            <FaSearch/>
          </div>

        </div>
        
       <div className='gallery-img'>
       <img src={photo5} className='pic img' alt="afk" />
        <div className='magnify'  onClick={()=>{setName(photo5);setDisplay(true)}}>
          <FaSearch/>
        </div>

       </div>
       {display && (
          <div className={`photo`} onClick={()=>{setDisplay(false)}}>
            <div className='inside'>
              <img src={name} className='images' alt="afk" />
            </div>
        
  
          </div>
       )}
       

        
        </div>
        
        
        
       
      
    
  )
}

export default Gallery