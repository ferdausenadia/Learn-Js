class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return " I am running " + this.carname;
  }
}
class Model extends car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + "it is a " + this.model;
  }
}
