import React from 'react'
import {useSelector} from 'react-redux'



const Booking = () => {
  const amount=useSelector((state)=>state.movie.value);
  
  return (
    <>
    <div>Booking successfull</div>
    <div style={{backgroundColor:'black',color:'white'}}><h3>Bill amount:{amount}</h3></div>
    </>
  )
}

export default Booking;