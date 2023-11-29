
import React from 'react'
import {useState} from 'react'
import Header from './Header'

export const Login = () => {

  const [signIn,SetSignIn] = useState(true)
  
  const toggleBtnClick = ()=>{
    
    SetSignIn(!signIn)
  }

  return (
    <div>
      <Header/>
    <div className = "absolute">    
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt = 'bg-img'/>
    </div>
      <form className='absolute my-36 mx-auto right-0 left-0 w-3/12 sm: bg-black p-12 bg-opacity-90'>
        <h1 className = "font-bold text-3xl py-4 text-white">{signIn ? "Sign In":"Sign Up"}</h1>
        {!signIn && 
        <input className='my-4 p-4 bg-gray-800 w-full text-white rounded' placeholder='Enter your Name' type = "text"/>}
        <input className='my-4 p-4 bg-gray-800 w-full  text-white rounded' type = "email" placeholder='Enter the Email Address'/>
        <input className='my-4 p-4 w-full bg-gray-800  text-white rounded' type = "password" placeholder='Enter the Password'/>
        <button  className='w-full bg-red-700 text-white my-6 p-4 rounded font-bold' type = "button">{signIn ? "Sign In":"Sign Up"}</button>
        { signIn ?
          <p className='text-gray-600'>New to Netflix? <button onClick = {toggleBtnClick} className = "text-white hover:underline" type = "button">Sign up Now.</button></p>
          :
          <p className = "text-white">Already registered? <button className='text-white hover:underline' onClick = {toggleBtnClick} type ="button">Sign In Now</button></p>
          }
      </form>
    </div>
  )
}
