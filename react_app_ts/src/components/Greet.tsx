

// Define the type for the props
// interface GreetProps {
//   propName: {
//     name: string;
//     number: number;
//   };
// }


type GreetProps = {
  name : string,
  messageCount? : number,
  isLoggedIn: boolean
}

// props string or number
// Greet(props: {name: string})


const Greet = (props: GreetProps) => {
  // Destructuring props
  const {messageCount = 0} = props
  return (
    <div>
     <h1>{messageCount}</h1>
      {props.isLoggedIn ? "Welcome" : "Welcome Guest"}
    </div>
  );
}

export default Greet;
