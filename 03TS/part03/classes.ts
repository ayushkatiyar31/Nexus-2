"use strict";

// Person Class
class Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`hi ${this.name}`);
  }
}

// Blueprint of an object
const obj1 = new Person("Rohit", 20);
const obj2 = new Person("Nitin", 11);

console.log(obj1);
console.log(obj2);
console.log(obj1.name);
obj1.greet();


// Customer Class
class Customer {
  constructor(
    public name: string,
    public age: number,
    protected balance: number   // protected so child can access
  ) {}

  meet(): number {
    this.age = this.age + 10;
    return this.age;
  }
}

const P1 = new Customer("Deepak", 20, 420);

console.log(P1.name);
console.log(P1.meet());
// console.log(P1.balance); ❌ Error (protected)


// Employee Class (Inheritance)
class Employee extends Customer {
  constructor(
    public salary: number,
    name: string,
    age: number,
    balance: number
  ) {
    super(name, age, balance);
  }

  greet(): void {
    console.log(this.balance); // works because protected
  }

  meet(): number {
    console.log("Hello Coder armu");
    return 10;
  }
}

const E1 = new Employee(420, "Rohit", 20, 320);

console.log(E1.meet());
console.log(E1.salary);


// Generic Function
function value<T>(a: T): T {
  return a;
}

console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));