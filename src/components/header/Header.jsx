import React from 'react'
import "./Header.scss"
import {Container} from "../../utils/Components"
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const data = useSelector(data => data);
    const location = useLocation()
  return (
    <>
       {
        !(location.pathname.includes("signIn") || 
        location.pathname.includes("register")||
        location.pathname.includes("products/add") ) && (
        <Container>
               <div className='header__wrapper'>
                   <span className='header__hi'>HI!</span>
                   <Link
                       className="header__signIn"
                       to={"/signIn"}
                   >{data?.login?.email ? data.login.email : "Sign in"}</Link>
                   <span className='header__or'>OR</span>
                   <Link
                       className="header__register"
                       to={"/register"}
                   >register</Link>
               </div>
       </Container>
       )}
    </>
  )
}

export default Header