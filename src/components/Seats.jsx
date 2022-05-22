import React from 'react'
import ChairIcon from '@mui/icons-material/Chair';
import { useDispatch } from 'react-redux';
import {ticketprice1,ticketprice2,ticketprice3,ticketprice4,ticketprice5,ticketprice6,additems} from '../slices/movieSlice'

const Seats = () => {
  const dispatch=useDispatch();

  const clickChair1=(ChairIcon)=>{
    alert('Seat selected from 6th row');
    dispatch(ticketprice1());
    dispatch(additems(ChairIcon));
  }

  const clickChair2=(ChairIcon)=>{
    alert('Seat selected from 5th row');
    dispatch(ticketprice2());
    dispatch(additems(ChairIcon));
  }

  const clickChair3=(ChairIcon)=>{
    alert('Seat selected from 4th row');
    dispatch(ticketprice3());
    dispatch(additems(ChairIcon));
  }

  const clickChair4=(ChairIcon)=>{
    alert('Seat selected from 3rd row');
    dispatch(ticketprice4());
    dispatch(additems(ChairIcon));
  }

  const clickChair5=(ChairIcon)=>{
    alert('Seat selected from 2nd row');
    dispatch(ticketprice5());
    dispatch(additems(ChairIcon));
  }

  const clickChair6=(ChairIcon)=>{
    alert('Seat selected from 1st row');
    dispatch(ticketprice6());
    dispatch(additems(ChairIcon));
  }
  return (
      <>
    <div>Ticket Price 6 row:Rs.200</div>
    <div>Ticket Price 5 row:Rs.180</div>
    <div>Ticket Price 4 row:Rs.160</div>
    <div>Ticket Price 3 row:Rs.140</div>
    <div>Ticket Price 2 row:Rs.120</div>
    <div>Ticket Price 1 row:Rs.100</div>
    <div><br/><br/>
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair1(<ChairIcon />)} />
 
    </div><br/>

    <div>
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair2(<ChairIcon />)} />
   
    </div><br/>

    <div>
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair3(<ChairIcon />)} />

    </div><br/>

    <div>
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair4(<ChairIcon />)} />
    
    </div><br/>

    <div>
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
    <ChairIcon onClick={()=>clickChair5(<ChairIcon />)} />
  
    </div><br/>

    <div>
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    <ChairIcon onClick={()=>clickChair6(<ChairIcon/>)} />
    
    </div><br/>


      </>
  )
}

export default Seats;