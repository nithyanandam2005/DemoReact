import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'   
import Home from './components/home'

export default function () {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path=""element={<Home/>}></Route>
    
   </Routes>
   </BrowserRouter>
    </div>
  )
}
