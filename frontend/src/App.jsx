import React from 'react'
import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/signin" element={<SignIn/>} />
  <Route path="/signup" element={<SignUp/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/about" element={<About/>} />

</Routes>
</BrowserRouter>
  )
}

export default App
