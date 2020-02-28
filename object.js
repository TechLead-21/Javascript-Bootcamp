const car = {
  color: "black",
  year: 2019,
  company: "Ford",
  owners: {
    owner: "Jayesh",
    co_owner: "Rey"
  }
};

// Before update
console.log(car);

car.color = "Blue";
car.year = 2020;

// After update
console.log(car);
