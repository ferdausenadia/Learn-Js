class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  run(speed) {
    console.log(`${this.name} is running in ${speed}`);
  }
}
const bmw = new Car("bmw", 1999);
console.log(bmw);
bmw.run("100 km per hour");
