import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import AccountSettings from './AccountSettings'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/account' element={<AccountSettings />} />
      </Routes>
    </Router>
  )
}
export default App
