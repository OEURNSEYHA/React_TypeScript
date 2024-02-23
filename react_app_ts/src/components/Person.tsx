type PersonProps = {
  name: {
    first: string;
    last: string;
  },
  nameList: {
    first: string,
    last: string
  }[]
}; 

function Person({ name, nameList }: PersonProps) {
  return (
    <div>
      Person {name.first} {name.last}
      {nameList.map((item)=> (
        <h1> {item.first}</h1>
      ))}
    </div>
  );
}

export default Person;
