# JavaScript-Optional-Chaining

Optional chaining is a feature in Javascript that allows you to access properties of an object safely, without the risk of encountering a "Cannot read property of undefined" error. It is especially useful when working with complex data structures that may contain null or undefined values.

Let's start by looking at an example of an object in Javascript:

```
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};
```
This object has three properties: "name", "age", and "address". The "address" property is itself an object with three properties: "street", "city", and "state". To access the values of these properties, you can use the dot notation:

```
console.log(person.name); // Outputs "John"
console.log(person.age); // Outputs 30
console.log(person.address.street); // Outputs "123 Main St"
console.log(person.address.city); // Outputs "New York"
console.log(person.address.state); // Outputs "NY"
```
However, if any of these properties are null or undefined, you will encounter an error when trying to access them. For example:

```
const person = {
  name: "John",
  age: 30,
  address: null
};

console.log(person.address.street); // Outputs "Cannot read property 'street' of null"
```
This is where optional chaining comes in. With optional chaining, you can safely access the properties of an object without the risk of encountering an error. Here is an example of optional chaining in action:

Copy code
console.log(person.address?.street); // Outputs "undefined"
In this example, we use the optional chaining operator (?) to safely access the "street" property of the "address" object. If the "address" object is null or undefined, the expression will return undefined instead of throwing an error.

Optional chaining can also be used to access properties of objects that are nested multiple levels deep. For example:
```
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    country: {
      name: "United States",
      code: "US"
    }
  }
};

console.log(person.address?.country?.name); // Outputs "United States"
```
In this example, we use optional chaining to access the "name" property of the "country" object, which is nested inside the "address" object.

Optional chaining is a powerful and convenient feature in Javascript that allows you to safely access the properties of an object without the risk of encountering an error. I hope this video has given you a good understanding of how optional chaining works. **Happy Coding**

