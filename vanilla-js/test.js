const products = [
  { name: "솔의눈", price: 100 },
  { name: "사이다", price: 140 },
  { name: "콜라", price: 250 },
];

for (const { name: n, price: p } of products) {
  console.log(n, p);
}
