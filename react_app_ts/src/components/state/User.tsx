// import React from 'react'

import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
function User() {
  // const [user, setUser] = useState<AuthUser|null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "seyha",
      email: "seyha@gmail.com",
    });
  };
  
  // const handleLogout = () => {
  //   setUser(null)
  // };

  return (
    <div>
      <h1> user </h1> <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>
        {" "}
        {/* User name is {user?.name} <br /> Email is {user?.email} */}
        User name is {user.name} <br /> Email is {user.email}
      </div>
    </div>
  );
}

export default User;
