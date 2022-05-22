import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductionQuantityLimitsTwoTone } from '@mui/icons-material';
import {amount,quantity} from '../slices/movieSlice'

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const Homes=()=>{
  navigate('/home');
  dispatch(amount());
  dispatch(quantity());
}

const Ticket=()=>{
  navigate('/ticket');
  dispatch(amount());
  dispatch(quantity());
}
  return (
      <>
    <div style={{color:'white',backgroundColor:'red'}}><h1><b>Book my Show</b></h1></div>
    <Stack direction="row" spacing={2} style={{position:'relative',left:'1000px',bottom:'60px'}}>
      <Button onClick={ Homes} style={{color:'white'}} ><b>Home</b></Button>
      <Button onClick={Ticket} style={{color:'white'}} ><b>Ticket booking</b></Button>
      </Stack>
 
      </>
  )
}

export default Header