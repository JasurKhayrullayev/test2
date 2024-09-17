import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from "./login/SignIn"
import Register from "./register/Register"


const Auth = () => {
  return (
    <>
    <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
    </Routes>
    </>
  )
}

export default Auth