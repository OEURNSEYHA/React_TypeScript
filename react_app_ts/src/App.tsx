import Greet from "./components/Greet";
import Person from "./components/Person";

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
    { first: "Nona", last: "Cola" },
  ];
  return (
    <>
      {/* <Greet great={10}/> */}
      <Greet propName={{ name: "seyha", number: 10 }} great={10} />
      <Person name={personName} nameList={personList} />
    </>
  );
}

export default App;
