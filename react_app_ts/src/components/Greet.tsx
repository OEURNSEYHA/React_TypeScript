

// Define the type for the props
// interface GreetProps {
//   propName: {
//     name: string;
//     number: number;
//   };
// }

// props string or number
// Greet(props: {name: string})


const Greet = (props : { propName: { name: string, number: number }, great: number }) => {
  // Destructuring props
  const { name, number } = props.propName;

  return (
    <div>
      <p>My name is {name}!</p>
      <p>Your number is: {number} {props.great}</p>
    </div>
  );
}

export default Greet;
