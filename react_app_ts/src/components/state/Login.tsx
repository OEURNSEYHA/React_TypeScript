// import React from 'react'

import { useState } from "react"

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
  return (
    <div>
        <h1>==============</h1>
        <button onClick={handleLogin}> Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div> User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  )
}

export default Login