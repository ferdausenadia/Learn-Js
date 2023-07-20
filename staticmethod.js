class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "hello!";
  }
}
const myCar = new Car("ford");
//console.log(myCar.hello());
console.log(Car.hello());

class Name {
  constructor(name) {
    this.name = name;
  }
  static greetings(x) {
    return "Hello " + x.name;
  }
}
const myCustomer = new Name("rahim");
console.log(Name.greetings(myCustomer));
