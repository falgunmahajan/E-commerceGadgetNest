import React, { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';

const Auth = () => {
    const [showLogin,setShowLogin]=useState(true);
  return (
    <>
   {showLogin ? <Login onClick={()=>setShowLogin(!showLogin)}/>:<SignUp onClick={()=>setShowLogin(!showLogin)}/>}
   </>
  )
}

export default Auth
