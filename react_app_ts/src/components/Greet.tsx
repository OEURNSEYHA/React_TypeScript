

// Define the type for the props
// interface GreetProps {
//   propName: {
//     name: string;
//     number: number;
//   };
// }

// Define the Greet component
const Greet = (props : {propName:{name:string, number: number}}) => {
  // Accessing props
  const { name, number } = props.propName;

  return (
    <div>
      <p>Hello, {name}!</p>
      <p>Your number is: {number}</p>
    </div>
  );
}

export default Greet;
