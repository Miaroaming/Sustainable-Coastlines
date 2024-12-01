import { Routes, Route } from 'react-router-dom'
import React from 'react'

// pages
import Home from '../pages/Home'
import About from '../pages/About'
import Involved from '../pages/Involved'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'

import Story from '../pages/Story'
import Partners from '../pages/Partners'
import Team from '../pages/Team'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/involved' element={<Involved/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/story' element={<Story/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/partners' element={<Partners/>} />
    </Routes>
  )
}

export default Links
