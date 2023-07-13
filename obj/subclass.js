//subclass
//inheritance
class Person {
  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
  }
  greetings() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
}

class Customer extends Person {
  constructor(fname, lname, phone, membership) {
    super(fname, lname);
    this.phone = phone;
    this.membership = membership;
  }
  fullName() {
    console.log(this.firstname, this.lastname);
  }
}
let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
console.log(customer1);
console.log(customer1.greetings());
console.log(customer1.fullName());
