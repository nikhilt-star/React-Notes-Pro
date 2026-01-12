import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NotesList from './Components/NotesList'
import { Routes , Route } from 'react-router-dom'
        
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Notes' element={<NotesList/>}/>
      </Routes>
    </>
  )
}

export default App
