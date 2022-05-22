import React from 'react'
import Seats from './Seats'
import {useNavigate} from 'react-router-dom'




const Ticket = () => {
  

 const navigate=useNavigate();


  const book=()=>{
   navigate("/booking")
  }


  return (
    <>
    <Seats />

    <button onClick={book}>
      Book tickets
    </button>
    

    <footer>
      Screeen this way
    </footer>
    
    </>
  )
}

export default Ticket