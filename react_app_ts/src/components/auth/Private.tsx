// import React from 'react'

import Login from "./Login"
import { ProfileProps } from "./Profile"
type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
  }
// function Private({isLoggedIn, Component}: PrivateProps) {
    function Private({isLoggedIn, component:Component }: PrivateProps) {
    if(isLoggedIn){
        return <Component name='Seyha'/>
    } else {
        return <Login/>
    }
}

export default Private