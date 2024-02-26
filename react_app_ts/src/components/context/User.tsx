// import { useContext } from "react";
// import { useContext } from "react";
import {   UserProvider } from "./UserContext";


function User() {
    // const userContext = useContext(UserContext);
    const userContext = UserProvider();
//   const { user, setUser } = userContext ;
//   const { user, setUser } = userContext ;

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({ name: "seyha", email: "seyha@gmail.com" });
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setUser({name: "", email: ""});
    }
  };

  return (
    <div>
      <h1>My name is : {userContext.user?.name}</h1>
      <h1>My email is : {userContext.user?.email}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
