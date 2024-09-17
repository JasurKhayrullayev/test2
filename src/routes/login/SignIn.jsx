import React , {useState} from 'react'
import signIn from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import {AiFillFacebook , AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { instance } from '../../api/instance';
import { useNavigate } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "" ,
    password: ""
  })
  const createUser = (e) => {
    e.preventDefault();
    instance.post("/auth/login" , userData)
  .then(response => {
    
    if(response.data.access_token){
      localStorage.setItem("token", response.data.access_token)
      navigate("/")
    }
  })
  .catch(err => console.log(err))
  }
  
 
  return (
    <>
      <div>
      <header className="register__header">
            <a href={"/"}>
            <img width={40} height={40} src={signIn} alt="" />
            </a>
          </header>
          <div className='signIn__container'>
            <h2 className='signIn__title'>Hello</h2>
            <div className='signIn__sign'><p>Sign in to site or </p><Link className='signIn__sign-link' to={'/register'}>create an account</Link></div>
            <form className='signIn__form' onSubmit={createUser}>
              <input className='signIn__input' onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
               required type="email" placeholder='Email or username'/>
              <input className='signIn__input' onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
               required type="password" placeholder='Password'/>
               
              <p className='signIn__num'>Created your account with a mobile number?</p>
              <Link className='signIn__num-link'>Sign in with mobile</Link>
              <button className='signIn__con-btn' type='submit'>Continue</button>
              <div className='signIn__hr'><span ></span> or <span ></span></div>
              <Link className='signIn__fac-btn' to={"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwii6obQlbr9AhVP-BgKHalGAxAYABAAGgJsZQ&ohost=www.google.com&cid=CAESauD2f0hYELPutCBNhKQ-VUsM3kZMgTryUK_PArbgKDflXRPHzdmptflWzs_PmUQ9ph3H663RSOzwE0ydI_YY9l-lyV7P7lzdEvzLzIb0xfwZTGSAlztS33beQXABe9RbfopYLxHdW0zKLhM&sig=AOD64_2oC5BThSjtz__MnlARs_Vah2nn6A&q&adurl&ved=2ahUKEwj1w4DQlbr9AhXsCRAIHYNWCz0Q0Qx6BAgJEAE"}><AiFillFacebook/> Continue with Facebook</Link>
              <Link className='signIn__goog-btn' to={"https://accounts.google.com/v3/signin/identifier?dsh=S-1157271442%3A1677654654829000&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dru&ec=GAlA8wE&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession"}><FcGoogle/> Continue with Google</Link>
              <Link className='signIn__app-btn' to={"https://appleid.apple.com/account"}><AiFillApple/> Continue with Apple</Link>
            </form>
          </div>
      </div>
    </>
  )
}

export default SignIn