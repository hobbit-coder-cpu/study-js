// 상속(Inheritance)

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
      this.speed = 0
      this.acceleration = acceleration
  }

  accelerate() {
      this.speed += this.acceleration
  }

  decelerate() {
      if(this.speed<= 0) {
          console.log('Stop!')
          return
      }

      this.speed -= this.acceleration
  }
}

class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
      super(acceleration)
      this.price = price
      this.wheel = 2
  }
}

const bicycle = new Bicycle(300)
bicycle.accelerate()
bicycle.accelerate()
console.log(bicycle)
console.log('bicycle instanceof Bicycle:', bicycle instanceof Bicycle)
console.log('bicycle instanceof Vehicle:', bicycle instanceof Vehicle)


class Car extends Bicycle {
  constructor(license, price, acceleration) {
      super(price, acceleration)
      this.license = license
      this.wheel = 4
  }

  // overriding
  accelerate() {
      if(!this.license) {
          console.log('No license')
          return
      }

      this.speed += this.acceleration
      console.log('Acceleration!', this.speed)
  }
}

const carA = new Car(true, 7000, 10)
const carB = new Car(false, 4000, 6)
carA.accelerate()
carB.accelerate()
console.log(carA)
console.log(carB)
console.log('carA instanceof Car:', carA instanceof Car)
console.log('carB instanceof Car:', carB instanceof Car)
console.log('carA instanceof Bicycle:', carA instanceof Bicycle)
console.log('carB instanceof Vehicle:', carA instanceof Vehicle)


class Boat extends Vehicle {
  constructor(price, acceleration) {
      super(acceleration)
      this.price = price
      this.motor = 1
  }
}

const boat = new Boat(10000, 5)
console.log(boat instanceof Boat)
console.log(boat instanceof Vehicle)
console.log(boat instanceof Bicycle)