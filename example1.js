const person = {
    name: "John",
    age: 30,
    address: null
};

console.log(person.name); // Outputs "John"
console.log(person.age); // Outputs 30
console.log(person.address?.street); // Outputs "123 Main St"
console.log(person.address?.city); // Outputs "New York"
console.log(person.address?.state); // Outputs "NY"