function getScores() {
  return [70, 80, 90, 10];
}

let scores = getScores();

let [x, y, z] = getScores();

console.log(x);
console.log(y);
console.log(z);

let [a, b, ...c] = getScores();
console.log(a);
console.log(b);
console.log(c);
console.log(Array.isArray(c));

function getProfile() {
  return ["John", "Doe", ["red", "green", "blue"]];
}

let [firstName, lastName, [clr1, clr2, clr3]] = getProfile();

console.log(clr1, clr2, clr3);
