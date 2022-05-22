import { SelectUnstyled, selectUnstyledClasses } from '@mui/base'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  items:[],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    ticketprice1: (state) => {
     state.value+=200
    },
    ticketprice2: (state) => {
      state.value+=180
     },
     ticketprice3: (state) => {
      state.value+=160
     },
     ticketprice4: (state) => {
      state.value+=140
     },
     ticketprice5: (state) => {
      state.value+=120
     },
     ticketprice6: (state) => {
      state.value+=100
     },
     additems: (state,action) => {
       state.items.push(action.payload);
       console.log(action.payload);
     },
     amount: (state) =>{
       state.value=0;
     },
     quantity: (state) =>{
       state.items=[];
     }
  },
})

// Action creators are generated for each case reducer function
export const { ticketprice1,ticketprice2,ticketprice3,ticketprice4,ticketprice5,ticketprice6,additems,amount,quantity } = movieSlice.actions

export default movieSlice.reducer