
let isBeginner: boolean = true;
let total: number = 0;
let names: string = "seyha";
let sentence: string = `My name is seyha.`;
interface myObject {
  names: string;
}
let object: myObject = { names: "seyha" };
let n: null = null;
let u: undefined = undefined;

console.log(isBeginner);
console.log(total);
console.log(names);
console.log(sentence);
console.log(object);
console.log(n);
console.log(u);


// interface;
interface Person {
  firstName: string;
  lastName: string;
}

// function;

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Seyha",
  lastName: "Oeurn"
};
fullName(p);

// class
class Employee {
  eName: string;
  constructor(name: string) {
    this.eName = name;
  }
  greet() {
    console.log(`Good Morning ${this.eName}`);
  }
}

let emp1 = new Employee("seyha");
console.log(emp1.eName);
emp1.greet();
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager deletgating tasks`);
  }
}

let m1 = new Manager("Seyha manager");
console.log("Inherite from classe Employee");
console.log(m1.eName);
m1.greet();
m1.delegateWork();