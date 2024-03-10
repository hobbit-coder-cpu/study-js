function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(3, 4));
console.log(sum(1));
