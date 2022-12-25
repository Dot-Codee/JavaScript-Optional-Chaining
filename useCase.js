const person = {
    name: "John",
    age: 16,
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
  
console.log(person.driverLicense?.expirationDate);