import React from 'react'
import Home from './home/Home.jsx'

import {Routes,Route} from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp.jsx'
import Login from './components/login.jsx'
import Contacts from './contactUs/Contacts.jsx'


export default function App() {
  return (
      <div >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/course' element={<Courses/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
     
    </div>
  )
}
