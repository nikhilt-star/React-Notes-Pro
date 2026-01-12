import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
    <div className='nav-bar w-full  mb-6 flex items-center justify-between'>
        <h1 className='nav-title'>Notes</h1>
        <button onClick={()=>{navigate("/Notes")}} className='nav-btn'>Notes List</button>
    </div>
  )
}

export default Navbar