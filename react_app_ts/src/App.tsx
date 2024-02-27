import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import Status from "./components/Status";
import Box from "./components/context/Box";
import Counter from "./components/state/Counter";
import Login from "./components/state/Login";
import User from "./components/state/User";
import Users from "./components/context/User";
import DomRef from "./components/ref/DomRef";
// import Multable from "./components/ref/Multable";
import Counters from "./components/class/Counter";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile"
function App() {
  const personName = {
    first: "Oeurn",
    last: "Seyha",
  };

  const personList = [
    {
      first: "Oeurn",
      last: "Seyha",
    },
    {
      first: "Nona",
      last: "Cola",
    },
  ];
  return (
    <>
      {/* <Greet great={10}/> */}
      {/* <Greet propName={{ name: "seyha", number: 10 }} great={10} /> */}
      <Person name={personName} nameList={personList} />
      <Status status="success" />
      <Oscar>
        {" "}
        <Heading> Oscar goes to Leonardo Dicpario! </Heading>{" "}
      </Oscar>
      <Greet name="seyha" isLoggedIn={false} />
      <Button
        handleClick={(e, id) => {
          alert(`hello${id} ${e}`);
        }}
      />

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Login />
      <User />
      <Counter />
      <Box />
      <Users />
      <DomRef />
      {/* <Multable/> */}
      <Counters message="hello" />
      {/* <Profile name={"seyha"}/> */}
      <Private isLoggedIn={true} component={Profile} />

    </>
  );
}

export default App;
