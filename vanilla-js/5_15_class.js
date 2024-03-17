class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
}

let ionic = new Car("아이오닉", "2021", "e", 4000);
let genesis = new Car("제네시스", "2021", "g", 7000);

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }
}
