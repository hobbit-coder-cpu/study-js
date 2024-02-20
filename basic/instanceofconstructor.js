// instnaceof constructor

class A {
  constructor() {

  }
}

class B extends A {
  constructor() {
      super()
  }
}   

class C extends B {
  constructor() {
      super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log('a instanceof A:', a instanceof A)
console.log('a instanceof B:', a instanceof B)
console.log('a instanceof C:', a instanceof C)
console.log('b instanceof A:', b instanceof A)
console.log('b instanceof B:', b instanceof B)
console.log('b instanceof C:', b instanceof C)
console.log('c instanceof A:', c instanceof A)
console.log('c instanceof B:', c instanceof B)
console.log('c instanceof C:', c instanceof C)

console.log('c.constructor === A:', c.constructor === A)
console.log('c.constructor === B:', c.constructor === B)
console.log('c.constructor === C:', c.constructor === C)

// const fruits = ['Apple', 'Banana']
const fruits = new Array('Apple', 'Banana')

console.log('fruits.constructor === Array:', fruits.constructor === Array)
console.log('fruits instanceof Array:', fruits instanceof Array)