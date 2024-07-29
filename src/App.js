import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import { useState } from 'react'
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
function App() {
  const [adminPage, setAdminPage] = useState('')
  const LoginWidthGoogle =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setAdminPage(data.user.email)

    })
  }
 
  return (
    <div className='App'>
      {/* <Darkmode/> */}
  
      <Navbar/>
      
      {/* <Update/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin' element={adminPage?<p onClick={LoginWidthGoogle}>LoginWidthGoogle</p>:<Admin/>}></Route>
        
          
       

        
      </Routes>
    
    </div>
  )
}

export default App
