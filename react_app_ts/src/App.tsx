import Greet from "./components/Greet"

function App() {

  return (
    <>
    {/* <Greet number={10}/> */}
    <Greet propName={{"name": "seyha", "number": 10}}/>
    </>
  )
}

export default App
