// import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}


function Guest({name,isLoggedIn, messageCount}:GreetProps) {
   messageCount = 3;
  return (
    <div>
        <h1> props isLoggedIn </h1>

        <h1>{ isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages` : "welcome Guest"}</h1>
    </div>
  )
}

export default Guest