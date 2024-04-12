function getPerson() {
  return {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    email: "john@gmail.com",
    city: "New York",
    country: "USA",
  };
}

let { firstName, lastName } = getPerson();
console.log(firstName);
console.log(lastName);

function displayFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

displayFullName(getPerson());
