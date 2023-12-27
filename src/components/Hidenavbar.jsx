import React, {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const Hidenavbar = ({children}) => {
    const location = useLocation()
    const [navshow , setNavshow] = useState(false)

    useEffect(()=>{
        if( location.pathname === "/Studentcorner" || location.pathname === "/faculty4" || location.pathname === "/oi"  ){
            setNavshow(false)
        }else{
            setNavshow(true)
        }
    },[location])
  return (
    <>
     <div>{navshow && children}
      
    </div></>
   
  )
}

export default Hidenavbar
