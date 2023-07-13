//class is a templete for creating object

class Person {
  constructor(fname, lname, birthday) {
    this.firstname = fname;
    this.lastname = lname;
    this.dob = birthday;
  }
  calculateAge() {
    let birthday = new Date(this.dob);
    let diff = Date.now() - birthday.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  fullName() {
    console.log(this.firstname, this.lastname);
  }
}

let person1 = new Person("shakib", "Al- Hasan", "03-24-1987");
let person3 = new Person("virat", "kohli", "03-24-1987");
let person2 = new Person("Moinul", "Islam", "02-11-1991");
console.log(person1.calculateAge());
console.log(person3.calculateAge());
console.log(person2.calculateAge());
