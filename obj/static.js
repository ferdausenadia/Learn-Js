class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  greetings() {
    return `hello ${this.firstName}`;
  }
  static test() {
    console.log("I am a static function");
  }
}

let person1 = new Person("Shakib", "Al Hasan");

console.log(person1.greetings());
console.log(Person.test());
