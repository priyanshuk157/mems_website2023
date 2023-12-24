import React, {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const Hidenavbar = ({children}) => {
    const location = useLocation()
    const [navshow , setNavshow] = useState(false)

    useEffect(()=>{
        if( location.pathname === "/faculty3"){
            setNavshow(false)
        }else{
            setNavshow(true)
        }
    },[location])
  return (
    <>
     <div>{ navshow && children}
      
    </div></>
   
  )
}

export default Hidenavbar
