//function inside object is called method
let person = {
  firstName: "Ertugrul",
  lastName: "Ghazi",
  dob: "9-9-1256",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.firstName);
console.log(person.fullName);
console.log(person.fullName());

let str = "Osman";
console.log(str.length);
