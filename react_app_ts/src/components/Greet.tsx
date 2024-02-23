type GreetProps = {
    name: string
}

//  Greet({name: string})
function Greet(props : GreetProps) {
  return (
    <div>Greet {props.name}</div>
  )
}

export default Greet

