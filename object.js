var student = {
  name: "kfh",
  age: 15,
  hometown: "gh",
};
console.log(student["name"]);
console.log(student.age);
student["occupation"] = "student";
console.log(student.occupation);
student.village = "gg";
console.log(student);
delete student.village;
console.log(student);
student = {}; //override
console.log(student);
student.name = "gjj";
student.age = 4;
console.log(student);
a = [1, 3, { a: 1, b: 3, c: [1, 3, 4, { x: 5, y: 10 }] }];
console.log(a[2].c[3].x);
console.log(a[2]["c"][3]["x"]);
