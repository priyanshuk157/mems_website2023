import React from 'react'

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Peoplecard from '../components/peoplecard'

const people = () => {
  return (
    <>
    <div className='body'>
    <div>
        <Navbar/>
    </div>
    <div className="head">
     
       PEOPLE
      
      </div>
    <div>
       <Peoplecard/>
    </div>
    <div>
     

    </div>
    <div>
        <Footer/>
    </div>
    </div>
    </>
  )
}

export default people
