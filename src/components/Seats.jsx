import React from 'react'
import ChairIcon from '@mui/icons-material/Chair';
import { useDispatch } from 'react-redux';
import {ticketprice1,ticketprice2,ticketprice3,ticketprice4,ticketprice5,ticketprice6} from '../slices/movieSlice'

const Seats = () => {
  const dispatch=useDispatch();

  const clickChair1=()=>{
    alert('Seat selected from 6th row');
    dispatch(ticketprice1());
  }

  const clickChair2=()=>{
    alert('Seat selected from 5th row');
    dispatch(ticketprice2());
  }

  const clickChair3=()=>{
    alert('Seat selected from 4th row');
    dispatch(ticketprice3());
  }

  const clickChair4=()=>{
    alert('Seat selected from 3rd row');
    dispatch(ticketprice4());
  }

  const clickChair5=()=>{
    alert('Seat selected from 2nd row');
    dispatch(ticketprice5());
  }

  const clickChair6=()=>{
    alert('Seat selected from 1st row');
    dispatch(ticketprice6());
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
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    <ChairIcon onClick={clickChair1} />
    </div><br/>

    <div>
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    <ChairIcon onClick={clickChair2} />
    </div><br/>

    <div>
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    <ChairIcon onClick={clickChair3} />
    </div><br/>

    <div>
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    <ChairIcon onClick={clickChair4} />
    </div><br/>

    <div>
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    <ChairIcon onClick={clickChair5} />
    </div><br/>

    <div>
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    <ChairIcon onClick={clickChair6} />
    </div><br/>


      </>
  )
}

export default Seats;