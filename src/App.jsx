import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Ticket from './components/Ticket'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Booking from './components/Booking'

function App() {



  return (
    <div className="App">
        <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/ticket" element={<Ticket />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/booking" element={<Booking />}/>

      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
