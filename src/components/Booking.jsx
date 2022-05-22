import React from 'react'
import {useSelector} from 'react-redux'



const Booking = () => {
  const amount=useSelector((state)=>state.movie.value);
  const show=useSelector((state)=>state.movie.items);
  
  return (
    <>
    <h3>Seats Selected</h3>
    <div>{show}</div>
    <div style={{backgroundColor:'black',color:'white'}}><h3>Bill amount:{amount}</h3></div>
    </>
  )
}

export default Booking;