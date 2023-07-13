var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";
for (var i = 1; i <= n; i++) {
  sum += i * i;
  series = series + i * i;
  if ((series = n)) {
    continue;
  }
  series = series + "+";
}
console.log(`${series} = ${sum}`);
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
  sum += i ** 2;
  series += (i ** 2).toString();
  if (i == n) {
    continue;
  }
  series += " + ";
}

console.log(`${series} = ${sum}`);
